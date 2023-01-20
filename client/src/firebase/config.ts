import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuvsM-4vzI56MQ2LdGLXdgoSNXvj6oePc",
  authDomain: "better-me-a5504.firebaseapp.com",
  projectId: "better-me-a5504",
  storageBucket: "better-me-a5504.appspot.com",
  messagingSenderId: "436228465696",
  appId: "1:436228465696:web:66be7924fed041cb420845"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);