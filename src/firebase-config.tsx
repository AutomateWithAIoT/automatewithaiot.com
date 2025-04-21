// Import the functions you need from the SDKs you need
import { initializeApp, setLogLevel } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { config } from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain:import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId:import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID
};

setLogLevel("debug");
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebaseApp);