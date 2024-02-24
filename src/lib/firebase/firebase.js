import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBynEhehWgdlJYMOGqoOTSoutYkNZ0zB6E",
    authDomain: "things2do-42d1f.firebaseapp.com",
    projectId: "things2do-42d1f",
    storageBucket: "things2do-42d1f.appspot.com",
    messagingSenderId: "715537988187",
    appId: "1:715537988187:web:004f027cf45875b8dfdd7e",
    measurementId: "G-85Z1G4V0D3"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);