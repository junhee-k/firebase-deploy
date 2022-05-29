// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//Third module is optionable (only to save in realtime database)
import {
  getDatabase,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2D8pmuo_y8DVuh9hqNFmA8kZGsfuQiE4",
  authDomain: "outta-sexy-web.firebaseapp.com",
  projectId: "outta-sexy-web",
  storageBucket: "outta-sexy-web.appspot.com",
  messagingSenderId: "442716455224",
  appId: "1:442716455224:web:42483957a4f0d1f2e601cd",
  measurementId: "G-7NV2JY54JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Login button is pressed
document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("id").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      //change bottom code to firestore
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: dt,
      });

      console.log("Successfully signed in!");
      alert("Successfully signed in!");
      location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      alert(errorMessage);
    });
});
