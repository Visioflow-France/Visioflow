import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

/* Module-level flag: survives StrictMode double-mount, ensures single run */
let _introHasRun = false;

/* ─── Floating shapes config ─────────────────────────────────── */
const SHAPES = [
  { delay: 0.5, width: 680, height: 155, rotate: 12, gradient: "from-indigo-500/[0.22]", style: { left: "-10%", top: "17%" } },
  { delay: 0.7, width: 560, height: 130, rotate: -14, gradient: "from-rose-500/[0.22]",   style: { right: "-6%", bottom: "20%" } },
  { delay: 0.6, width: 340, height: 88,  rotate: -7,  gradient: "from-violet-500/[0.17]", style: { left: "7%",  bottom: "13%" } },
  { delay: 0.9, width: 240, height: 68, rotate: 22, gradient: "from-amber-500/[0.17]", style: { right: "17%", top: "9%" } },
  { delay: 1.0, width: 170, height: 48, rotate: -28, gradient: "from-cyan-500/[0.14]",   style: { left: "23%", top: "7%" } },
  { delay: 0.8, width: 290, height: 78, rotate: 8,   gradient: "from-blue-500/[0.15]",   style: { right: "6%", top: "42%" } },
];

function ElegantShape({ width, height, rotate, gradient, delay, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -110, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.0,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.1 },
      }}
      className="absolute pointer-events-none"
      style={style}
    >
      <motion.div
        animate={{ y: [0, 17, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.07)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.14),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Grid dots background ──────────────────────────────────── */
function GridDots() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        zIndex: 1, pointerEvents: "none", opacity: 0.18,
      }}
    >
      <defs>
        <pattern id="si-dots" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.5)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#si-dots)" />
    </svg>
  );
}

/* ─── Main component ────────────────────────────────────────── */
const BRAND = "VISIOFLOW";
const SESSION_KEY = "vf_intro_seen";

export default function ShowcaseIntro({ onComplete }) {
  const rootRef = useRef(null);
  const curtainRef = useRef(null);

  const complete = useCallback(() => {
    document.body.style.overflow = "";
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch (_) {}
    onComplete && onComplete();
  }, [onComplete]);

  /* ── Skip handler ─────────────────────────────────────────── */
  const handleSkip = useCallback(() => {
    gsap.killTweensOf(".si-scan, .si-count-wrap, .si-brand-wrap, .si-tagline, .si-deco, .si-progress-fill");
    if (curtainRef.current) {
      gsap.to(curtainRef.current, {
        yPercent: 0,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: complete,
      });
    } else {
      complete();
    }
  }, [complete]);

  /* ── Main GSAP timeline ───────────────────────────────────── */
  useEffect(() => {
    /* Skip on repeat session visit */
    try {
      if (sessionStorage.getItem(SESSION_KEY)) { complete(); return; }
    } catch (_) {}

    /* Guard against StrictMode double-mount or hot-reload re-runs */
    if (_introHasRun) { complete(); return; }
    _introHasRun = true;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {

      /* Initial states */
      gsap.set(".si-scan", { autoAlpha: 0 });
      gsap.set(".si-scan-bar", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".si-count-wrap", { autoAlpha: 0, scale: 0.94 });
      gsap.set(".si-count-sub", { autoAlpha: 0, y: 18 });
      gsap.set(".si-brand-wrap", { autoAlpha: 0 });
      gsap.set(".si-letter", { autoAlpha: 0, y: 88, rotationX: -68, filter: "blur(14px)" });
      gsap.set(".si-deco", { autoAlpha: 0 });
      gsap.set(".si-deco-l", { scaleX: 0, transformOrigin: "right center" });
      gsap.set(".si-deco-r", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".si-tagline", { autoAlpha: 0, y: 30, filter: "blur(10px)" });
      gsap.set(".si-badge", { autoAlpha: 0, y: 20, scale: 0.88 });
      gsap.set(".si-progress-fill", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(curtainRef.current, { yPercent: 100 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* Phase 1 — Scan line & counter setup (0.0 → 0.6s) */
      tl.to(".si-scan-bar", { scaleX: 1, duration: 0.6 })
        .to(".si-count-wrap", { autoAlpha: 1, scale: 1, duration: 0.5 }, "<0.1")
        .to(".si-count-sub", { autoAlpha: 1, y: 0, duration: 0.4 }, "<0.15")
        .to(".si-progress-fill", { scaleX: 0.16, duration: 0.5 }, "<");

      /* Phase 2 — Counter animation (0.6 → 2.0s) */
      tl.to(".si-count-num", {
        innerHTML: 1, snap: { innerHTML: 1 },
        duration: 1.4, ease: "power2.out"
      });

      /* Phase 3 — Reveal brand (2.0 → 3.1s) */
      tl.fromTo(".si-letter", {
        autoAlpha: 0, y: 88, rotationX: -68, filter: "blur(14px)"
      }, {
        autoAlpha: 1, y: 0, rotationX: 0, filter: "blur(0px)",
        stagger: 0.052, duration: 0.62, ease: "expo.out"
      });

      /* Phase 4 — Decorative lines & tagline (2.6s) */
      tl.to(".si-deco", { autoAlpha: 1, duration: 0.3 }, "<0.15")
        .to(".si-deco-l", { scaleX: 1, duration: 0.4, ease: "power2.out" }, "<")
        .fromTo(".si-tagline", {
          autoAlpha: 0, y: 30, filter: "blur(10px)"
        }, {
          autoAlpha: 1, y: 0, filter: "blur(0px)",
          duration: 0.5, ease: "power2.out"
        }, "<0.1");

      /* Phase 5 — Badge reveal (3.1s) */
      tl.fromTo(".si-badge", {
        autoAlpha: 0, y: 20, scale: 0.88
      }, {
        autoAlpha: 1, y: 0, scale: 1,
        duration: 0.4, ease: "back.out(1.7)"
      });

      /* Phase 6 — Hold complete (3.5 → 4.5s) */
      tl.to({}, { duration: 1.0 });

      /* Phase 7 — Exit (4.5 → 5.5s) */
      tl.to(".si-brand-wrap", {
        scale: 1.05, filter: "blur(16px)", autoAlpha: 0,
        duration: 0.5, ease: "power2.inOut"
      })
        .to(".si-tagline", {
          autoAlpha: 0, y: -10,
          duration: 0.35, ease: "power2.inOut"
        }, "<0.1")
        .to(".si-deco", { autoAlpha: 0, duration: 0.2 }, "<")
        .to(".si-badge", {
          autoAlpha: 0, scale: 0.88,
          duration: 0.3, ease: "power2.inOut"
        }, "<");

      /* Phase 8 — Black curtain (5.5 → 6.0s) */
      tl.to(curtainRef.current, {
        yPercent: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: complete
      });

    }, rootRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [complete]);

  return (
    <div
      ref={rootRef}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "#000", overflow: "hidden",
      }}
    >
      {/* Grid dots */}
      <GridDots />

      {/* Film grain */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
          opacity: 0.042, mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.76' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          background: "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,113,227,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Floating shapes */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 4, pointerEvents: "none" }}
      >
        {SHAPES.map((s, i) => <ElegantShape key={i} {...s} />)}
      </div>

      {/* ── Scan line ─────────────────────────────────────────── */}
      <div
        className="si-scan"
        aria-hidden="true"
        style={{
          position: "absolute", left: 0, right: 0,
          top: "50%", transform: "translateY(-50%)",
          padding: "0 clamp(24px, 6vw, 80px)",
          zIndex: 10,
        }}
      >
        <div
          className="si-scan-bar"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.45) 15%, rgba(0,113,227,0.95) 50%, rgba(255,255,255,0.5) 85%, transparent)",
            boxShadow: "0 0 28px rgba(0,113,227,0.55), 0 0 70px rgba(0,113,227,0.18)",
          }}
        />

        {/* Scan glow dot */}
        <div style={{
          position: "absolute", right: "clamp(24px, 6vw, 80px)", top: "50%",
          transform: "translateY(-50%)",
          width: "6px", height: "6px", borderRadius: "50%",
          background: "rgba(0,113,227,0.9)",
          boxShadow: "0 0 12px rgba(0,113,227,1), 0 0 30px rgba(0,113,227,0.5)",
        }} />
      </div>

      {/* ── Counter section ───────────────────────────────────── */}
      <div
        className="si-count-wrap"
        style={{
          position: "absolute", inset: 0, zIndex: 20,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", textAlign: "center" }}>
          {/* Glow shadow behind number */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(110px, 24vw, 290px)",
            fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.88,
            color: "transparent",
            background: "linear-gradient(180deg, rgba(0,113,227,0.45) 0%, transparent 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "blur(22px)",
            transform: "translateY(10px)",
            userSelect: "none", pointerEvents: "none",
          }}>5</div>

          {/* Number */}
          <div
            className="si-count-num"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(110px, 24vw, 290px)",
              fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.88,
              color: "transparent",
              background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.52) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(0,113,227,0.38))",
              userSelect: "none", position: "relative",
            }}
          >0</div>

          {/* Unit label */}
          <div
            className="si-count-sub"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(9px, 1.5vw, 14px)",
              fontWeight: 700, letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.36)",
              marginTop: "14px",
            }}
          >Jours · Livraison garantie</div>
        </div>
      </div>

      {/* ── Brand section ─────────────────────────────────────── */}
      <div
        className="si-brand-wrap"
        style={{
          position: "absolute", inset: 0, zIndex: 20,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          perspective: "1000px",
        }}
      >
        {/* Letters */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(46px, 10.5vw, 148px)",
            fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1,
            margin: 0, transformStyle: "preserve-3d",
            userSelect: "none",
          }}
        >
          {BRAND.split("").map((letter, i) => (
            <span
              key={i}
              className="si-letter"
              style={{
                display: "inline-block",
                color: "transparent",
                background: `linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,${0.62 + (i / BRAND.length) * 0.28}) 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 2px 22px rgba(0,113,227,0.22))",
              }}
            >{letter}</span>
          ))}
        </h1>

        {/* Decorative line */}
        <div
          className="si-deco"
          style={{
            display: "flex", alignItems: "center",
            width: "100%", maxWidth: "clamp(340px, 58vw, 840px)",
            margin: "clamp(14px, 2.2vw, 26px) 0",
            gap: "14px",
            padding: "0 clamp(20px, 4vw, 60px)",
          }}
        >
          <div
            className="si-deco-l"
            style={{
              flex: 1, height: "1px",
              background: "linear-gradient(to left, rgba(255,255,255,0.42) 0%, transparent 100%)",
            }}
          />
          <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.28)" }} />
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.75)",
              boxShadow: "0 0 18px rgba(0,113,227,0.95), 0 0 40px rgba(0,113,227,0.35)",
            }} />
          </div>
        </div>

        {/* Tagline */}
        <p
          className="si-tagline"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(12px, 1.75vw, 18px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.04em",
            textAlign: "center",
            margin: 0, lineHeight: 1.5,
          }}
        >
          Votre site de restaurant en seulement{" "}
          <span style={{ color: "rgba(255,255,255,0.76)", fontWeight: 600 }}>
            5 jours.
          </span>
        </p>

        {/* Trust badge */}
        <div
          className="si-badge"
          style={{
            marginTop: "clamp(18px, 2.8vw, 32px)",
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "8px 18px",
            borderRadius: "980px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 8px rgba(34,197,94,0.7)",
          }}
          />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px", fontWeight: 600,
            color: "rgba(255,255,255,0.52)",
            letterSpacing: "0.06em",
          }}>
            Design · Développement · Livraison en 5 jours
          </span>
        </div>
      </div>

      {/* ── Bottom progress bar ───────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "clamp(24px, 6vw, 80px)",
          right: "clamp(24px, 6vw, 80px)",
          zIndex: 30,
        }}
      >
        {/* Track */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", position: "relative" }}>
          {/* Fill */}
          <div
            className="si-progress-fill"
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, rgba(0,113,227,0.85), rgba(255,255,255,0.65))",
              boxShadow: "0 0 10px rgba(0,113,227,0.55)",
            }}
          />
        </div>

        {/* Timer label */}
        <div style={{
          marginTop: "8px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px", fontWeight: 600,
          color: "rgba(255,255,255,0.18)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          Chargement en cours
        </div>
      </div>

      {/* ── Exit curtain ──────────────────────────────────────── */}
      <div
        ref={curtainRef}
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          background: "#000",
          zIndex: 9999,
          transform: "translateY(100%)",
        }}
      />
    </div>
  );
}
