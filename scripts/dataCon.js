import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCecudXCUUV1vveyHsOQLI8UvJiakT4zzQ",
  authDomain: "hostelroomallotment-2d270.firebaseapp.com",
  projectId: "hostelroomallotment-2d270",
  storageBucket: "hostelroomallotment-2d270.appspot.com",
  messagingSenderId: "30923520241",
  appId: "1:30923520241:web:d3918fe10640da83265150",
  measurementId: "G-4DLC4MNHN5",
};

// Initialize Firebase

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore";

const eve = document.getElementById("get_otp");

async function createUser() {
  const username = document.getElementById("user");
  const email = document.getElementById("email");
  const college = document.getElementById("college");
  const year = document.getElementById("year");
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: username,
      email: email,
      college: college,
      year: year,
    });
    alert("user created");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

eve.onclick = createUser();
