import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyW6suCo2XOGCBWAiA3-YvMaea3abOovw",
  authDomain: "new-panel-admin.firebaseapp.com",
  projectId: "new-panel-admin",
  storageBucket: "new-panel-admin.appspot.com",
  messagingSenderId: "33035290044",
  appId: "1:33035290044:web:9e89efe8b8457015f917b9",
  measurementId: "G-RV9X06W1Q8"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
