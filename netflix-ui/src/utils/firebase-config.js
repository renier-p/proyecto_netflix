import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC98OTvjm0FvyQjPaKSXJJmhU4LNl06Ot4",
  authDomain: "react-netflix-14a71.firebaseapp.com",
  projectId: "react-netflix-14a71",
  storageBucket: "react-netflix-14a71.appspot.com",
  messagingSenderId: "1020385876103",
  appId: "1:1020385876103:web:eca186da021d89f1d24022",
  measurementId: "G-430TTSKBRM",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
