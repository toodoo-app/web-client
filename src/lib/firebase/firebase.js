import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfigBeta = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const firebaseConfig = {
    apiKey: "AIzaSyBynEhehWgdlJYMOGqoOTSoutYkNZ0zB6E",
    authDomain: "things2do-42d1f.firebaseapp.com",
    projectId: "things2do-42d1f",
    storageBucket: "things2do-42d1f.appspot.com",
    messagingSenderId: "715537988187",
    appId: "1:715537988187:web:004f027cf45875b8dfdd7e",
    measurementId: "G-85Z1G4V0D3"
  };

// export const app = initializeApp(firebaseConfig);
// workaround for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
// TODO: configure and use analitycs
// const analytics = getAnalytics(app);

export { app, auth };