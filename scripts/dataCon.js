// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
  collection,
  addDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
console.log(db);
var username;
var email;
var errorState;
async function createUser() {
  const college = document.getElementById("college").value;
  const year = document.getElementById("year").value;
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: username,
      email: email,
      college: college,
      year: year,
    }).then(() => {
      alert("user created");
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
document.onkeyup = (event) => {
  try {
    document.getElementById("user").value;
    errorState = false;
  } catch (error) {
    errorState = true;
  }
  if (!errorState) {
    username = document.getElementById("user").value;
    email = document.getElementById("email").value;
    console.log(username);
  }
  document.getElementById("get_otp").onclick = createUser;
};
