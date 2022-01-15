import { initializeApp, getApps } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
import { getFirestore as getStore } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'
import {
  getAuth,
  TwitterAuthProvider,
  signInWithRedirect,
  signOut,
} from 'firebase/auth'
import type { Auth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const getApp = (): FirebaseApp => {
  return getApps()[0] || initializeApp(firebaseConfig)
}

const getFirestore = (): Firestore => {
  return getStore(getApp())
}

const getAuthenticate = (): Auth => {
  const auth = getAuth(getApp())
  auth.languageCode = 'ja'
  return auth
}

const login = async () => {
  const auth = getAuthenticate()
  const provider = new TwitterAuthProvider()
  provider.setCustomParameters({
    lang: 'ja',
  })

  signInWithRedirect(auth, provider)
}

const logout = async () => {
  signOut(getAuthenticate())
}

export { getApp, getFirestore, getAuthenticate, login, logout }
