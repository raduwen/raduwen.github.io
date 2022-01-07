import { initializeApp, FirebaseApp } from "firebase/app";
// import { getAnalytics, Analytics } from "firebase/analytics";
// import { getDatabase, Database } from "firebase/database";
import { getFirestore, Firestore } from  "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

type FB = {
    app: FirebaseApp;
//  analytics: Analytics;
//  database: Database;
    firestore: Firestore;
};

function initFirebase(): FB {
    const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
//  const database = getDatabase(app);
    const firestore = getFirestore(app);

    return {
        app,
//      analytics,
//      database,
        firestore,
    };
};

export { initFirebase };