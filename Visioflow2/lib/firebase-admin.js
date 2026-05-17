import admin from 'firebase-admin'

if (!admin.apps.length) {
  const credential = process.env.FIREBASE_SERVICE_ACCOUNT
    ? admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
    : admin.credential.applicationDefault()

  admin.initializeApp({
    credential,
    projectId: process.env.FIREBASE_PROJECT_ID || 'visioflow-cb6eb-9d051',
  })
}

export const db = admin.firestore()
