import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDRTdHRiNuBiIcpKPh2hF37qN7Dls65Emw",
  authDomain: "netflix-f3715.firebaseapp.com",
  projectId: "netflix-f3715",
  storageBucket: "netflix-f3715.appspot.com",
  messagingSenderId: "1089302645401",
  appId: "1:1089302645401:web:f3400cb4aa595482b60608",
  measurementId: "G-P9FX30GPBG"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);















// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//
//
//
//
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
