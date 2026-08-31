import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

let _introHasRun = false;
const SESSION_KEY = "vf_intro_seen";
const BRAND = "VISIOFLOW";

export default function ShowcaseIntro({ onComplete }) {
  const rootRef    = useRef(null);
  const curtainRef = useRef(null);

  const complete = useCallback(() => {
    document.body.style.overflow = "";
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch (_) {}
    onComplete?.();
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    gsap.killTweensOf("*");
    if (curtainRef.current) {
      gsap.to(curtainRef.current, { yPercent: 0, duration: 0.3, ease: "power3.inOut", onComplete: complete });
    } else complete();
  }, [complete]);

  useEffect(() => {
    try { if (sessionStorage.getItem(SESSION_KEY)) { complete(); return; } } catch (_) {}
    if (_introHasRun) { complete(); return; }
    _introHasRun = true;

    document.body.style.overflow = "hidden";

    const root = rootRef.current;
    if (!root) { complete(); return; }

    const ctx = gsap.context(() => {
      const letters  = root.querySelectorAll(".si-letter");
      const scanBar  = root.querySelector(".si-scan-bar");
      const scanWrap = root.querySelector(".si-scan");
      const countWrap = root.querySelector(".si-count-wrap");
      const countNum  = root.querySelector(".si-count-num");
      const countSub  = root.querySelector(".si-count-sub");
      const brandWrap = root.querySelector(".si-brand-wrap");
      const tagline   = root.querySelector(".si-tagline");
      const badge     = root.querySelector(".si-badge");
      const decoL     = root.querySelector(".si-deco-l");
      const decoWrap  = root.querySelector(".si-deco");
      const fill      = root.querySelector(".si-progress-fill");
      const curtain   = curtainRef.current;

      /* ── Initial states ── */
      gsap.set(scanWrap,  { autoAlpha: 0 });
      gsap.set(scanBar,   { scaleX: 0, transformOrigin: "left center" });
      gsap.set(countWrap, { autoAlpha: 0, scale: 0.92 });
      gsap.set(countSub,  { autoAlpha: 0, y: 14 });
      gsap.set(brandWrap, { autoAlpha: 0 });
      gsap.set(letters,   { autoAlpha: 0, y: 72, rotationX: -55, filter: "blur(12px)" });
      gsap.set(decoWrap,  { autoAlpha: 0 });
      gsap.set(decoL,     { scaleX: 0, transformOrigin: "right center" });
      gsap.set(tagline,   { autoAlpha: 0, y: 22, filter: "blur(8px)" });
      gsap.set(badge,     { autoAlpha: 0, y: 14, scale: 0.9 });
      gsap.set(fill,      { scaleX: 0, transformOrigin: "left center" });
      gsap.set(curtain,   { yPercent: 100 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* ── Phase 1 : Scan + compteur  (0 → 1.6s) ── */
      tl.to(fill,      { scaleX: 0.12, duration: 0.4, ease: "none" })
        .to(scanWrap,  { autoAlpha: 1, duration: 0.25 }, "<")
        .to(scanBar,   { scaleX: 1, duration: 0.55 }, "<0.05")
        .to(countWrap, { autoAlpha: 1, scale: 1, duration: 0.45 }, "<0.08")
        .to(countSub,  { autoAlpha: 1, y: 0, duration: 0.35 }, "<0.12")
        .to(fill,      { scaleX: 0.38, duration: 1.1, ease: "none" }, "<")
        .to(countNum,  { innerHTML: 5, snap: { innerHTML: 1 }, duration: 1.1, ease: "power1.inOut" }, "<");

      /* ── Phase 2 : Masquer compteur, révéler marque  (1.6 → 3.0s) ── */
      tl.to(countWrap, { autoAlpha: 0, scale: 1.06, duration: 0.28, ease: "power2.inOut" })
        .to(scanWrap,  { autoAlpha: 0, duration: 0.2 }, "<")
        .to(fill,      { scaleX: 0.44, duration: 0.28, ease: "none" }, "<")
        .set(brandWrap, { autoAlpha: 1 })
        .to(letters, {
          autoAlpha: 1, y: 0, rotationX: 0, filter: "blur(0px)",
          stagger: 0.048, duration: 0.58, ease: "expo.out"
        })
        .to(fill,     { scaleX: 0.66, duration: 0.9, ease: "none" }, "<");

      /* ── Phase 3 : Décor + tagline (3.0 → 3.7s) ── */
      tl.to(decoWrap, { autoAlpha: 1, duration: 0.22 }, "<0.1")
        .to(decoL,    { scaleX: 1, duration: 0.35, ease: "power2.out" }, "<")
        .to(tagline,  { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.42, ease: "power2.out" }, "<0.08")
        .to(fill,     { scaleX: 0.78, duration: 0.4, ease: "none" }, "<");

      /* ── Phase 4 : Badge (3.7 → 4.1s) ── */
      tl.to(badge, { autoAlpha: 1, y: 0, scale: 1, duration: 0.38, ease: "back.out(1.8)" })
        .to(fill,  { scaleX: 0.92, duration: 0.38, ease: "none" }, "<");

      /* ── Phase 5 : Hold + barre complète (4.1 → 4.6s) ── */
      tl.to(fill, { scaleX: 1, duration: 0.5, ease: "none" })
        .to({}, { duration: 0.05 });

      /* ── Phase 6 : Sortie (4.6 → 5.05s) ── */
      tl.to(brandWrap, { scale: 1.04, filter: "blur(14px)", autoAlpha: 0, duration: 0.42, ease: "power2.inOut" })
        .to(tagline,   { autoAlpha: 0, y: -8, duration: 0.28, ease: "power2.inOut" }, "<0.06")
        .to(decoWrap,  { autoAlpha: 0, duration: 0.18 }, "<")
        .to(badge,     { autoAlpha: 0, scale: 0.9, duration: 0.25, ease: "power2.inOut" }, "<");

      /* ── Phase 7 : Rideau noir (5.05 → 5.5s) ── */
      tl.to(curtain, { yPercent: 0, duration: 0.45, ease: "power3.inOut", onComplete: complete });

    }, rootRef);

    return () => { ctx.revert(); document.body.style.overflow = ""; };
  }, [complete]);

  return (
    <div
      ref={rootRef}
      onClick={handleSkip}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "#03060f",
        overflow: "hidden", cursor: "default",
      }}
    >
      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,113,227,0.10) 0%, transparent 65%)",
      }} />

      {/* Grid dots */}
      <svg aria-hidden="true" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        zIndex: 2, pointerEvents: "none", opacity: 0.14,
      }}>
        <defs>
          <pattern id="si-dots" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#si-dots)" />
      </svg>

      {/* Film grain */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
        opacity: 0.038, mixBlendMode: "overlay",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.76' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ── Scan line ── */}
      <div className="si-scan" aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0,
        top: "50%", transform: "translateY(-50%)",
        padding: "0 clamp(28px, 7vw, 90px)", zIndex: 10,
      }}>
        <div className="si-scan-bar" style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 15%, rgba(0,113,227,0.95) 50%, rgba(255,255,255,0.45) 85%, transparent)",
          boxShadow: "0 0 24px rgba(0,113,227,0.5), 0 0 60px rgba(0,113,227,0.15)",
        }} />
        <div style={{
          position: "absolute", right: "clamp(28px, 7vw, 90px)", top: "50%",
          transform: "translateY(-50%)",
          width: "5px", height: "5px", borderRadius: "50%",
          background: "rgba(0,113,227,0.95)",
          boxShadow: "0 0 10px rgba(0,113,227,1), 0 0 28px rgba(0,113,227,0.5)",
        }} />
      </div>

      {/* ── Compteur ── */}
      <div className="si-count-wrap" style={{
        position: "absolute", inset: 0, zIndex: 20,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ position: "relative", textAlign: "center" }}>
          {/* Glow derrière le chiffre */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            fontFamily: "'Fraunces', sans-serif",
            fontSize: "clamp(108px, 23vw, 280px)",
            fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.88,
            color: "transparent",
            background: "linear-gradient(180deg, rgba(0,113,227,0.48) 0%, transparent 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "blur(20px)", transform: "translateY(8px)",
            userSelect: "none", pointerEvents: "none",
          }}>5</div>

          <div className="si-count-num" style={{
            fontFamily: "'Fraunces', sans-serif",
            fontSize: "clamp(108px, 23vw, 280px)",
            fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.88,
            color: "transparent",
            background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 38px rgba(0,113,227,0.40))",
            userSelect: "none", position: "relative",
          }}>0</div>

          <div className="si-count-sub" style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: "clamp(9px, 1.4vw, 13px)",
            fontWeight: 700, letterSpacing: "0.30em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.32)",
            marginTop: "12px",
          }}>Jours · Livraison garantie</div>
        </div>
      </div>

      {/* ── Marque ── */}
      <div className="si-brand-wrap" style={{
        position: "absolute", inset: 0, zIndex: 20,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        perspective: "900px",
      }}>
        <h1 style={{
          fontFamily: "'Fraunces', sans-serif",
          fontSize: "clamp(44px, 10vw, 144px)",
          fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1,
          margin: 0, transformStyle: "preserve-3d",
          userSelect: "none",
        }}>
          {BRAND.split("").map((ch, i) => {
            const isFlow = i >= 5 // "FLOW" commence à l'index 5
            return (
              <span
                key={i}
                className="si-letter"
                style={{
                  display: "inline-block",
                  color: "transparent",
                  background: isFlow
                    ? "linear-gradient(180deg, #60a5fa 0%, #0071E3 100%)"
                    : `linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,${0.60 + (i / BRAND.length) * 0.30}) 100%)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: isFlow
                    ? "drop-shadow(0 2px 28px rgba(0,113,227,0.55))"
                    : "drop-shadow(0 2px 20px rgba(0,113,227,0.22))",
                }}
              >{ch}</span>
            )
          })}
        </h1>

        {/* Ligne déco */}
        <div className="si-deco" style={{
          display: "flex", alignItems: "center",
          width: "100%", maxWidth: "clamp(320px, 54vw, 820px)",
          margin: "clamp(12px, 2vw, 24px) 0",
          gap: "12px",
          padding: "0 clamp(20px, 5vw, 64px)",
        }}>
          <div className="si-deco-l" style={{
            flex: 1, height: "1px",
            background: "linear-gradient(to left, rgba(255,255,255,0.40) 0%, transparent 100%)",
          }} />
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.25)" }} />
            <div style={{
              width: "3px", height: "3px", borderRadius: "50%",
              background: "rgba(255,255,255,0.78)",
              boxShadow: "0 0 16px rgba(0,113,227,0.9), 0 0 36px rgba(0,113,227,0.32)",
            }} />
          </div>
        </div>

        {/* Tagline */}
        <p className="si-tagline" style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: "clamp(11px, 1.65vw, 17px)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.04em",
          textAlign: "center",
          margin: 0, lineHeight: 1.5,
        }}>
          Votre site de restaurant en seulement{" "}
          <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>5 jours.</span>
        </p>

        {/* Badge */}
        <div className="si-badge" style={{
          marginTop: "clamp(16px, 2.6vw, 30px)",
          display: "inline-flex", alignItems: "center", gap: "7px",
          padding: "7px 16px",
          borderRadius: "980px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          backdropFilter: "blur(10px)",
        }}>
          <div style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 7px rgba(34,197,94,0.7)",
          }} />
          <span style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: "10.5px", fontWeight: 600,
            color: "rgba(255,255,255,0.48)",
            letterSpacing: "0.055em",
          }}>Design · Développement · Livraison en 5 jours</span>
        </div>
      </div>

      {/* ── Barre de progression ── */}
      <div style={{
        position: "absolute", bottom: "26px",
        left: "clamp(28px, 7vw, 90px)",
        right: "clamp(28px, 7vw, 90px)",
        zIndex: 30,
      }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", position: "relative" }}>
          <div className="si-progress-fill" style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(0,113,227,0.85), rgba(255,255,255,0.6))",
            boxShadow: "0 0 9px rgba(0,113,227,0.5)",
          }} />
        </div>
        <div style={{
          marginTop: "7px",
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: "9.5px", fontWeight: 600,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "0.09em",
          textTransform: "uppercase",
        }}>Chargement</div>
      </div>

      {/* ── Rideau de sortie ── */}
      <div ref={curtainRef} aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "#000",
        zIndex: 9999,
        transform: "translateY(100%)",
      }} />
    </div>
  );
}
