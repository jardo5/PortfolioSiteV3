import { w as writable, d as derived } from "./index.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDHkSg6LkjmG1rgrgIWQwF8gz0B4Jfm_BA",
  authDomain: "personalsitev3-30cdb.firebaseapp.com",
  projectId: "personalsitev3-30cdb",
  storageBucket: "personalsitev3-30cdb.appspot.com",
  messagingSenderId: "330670815520",
  appId: "1:330670815520:web:1d5422d33f277e5dd93f45",
  measurementId: "G-D1Q8MQ5FGW"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
collection(db, "projects");
getStorage(app);
const authState = writable("initializing");
auth.onAuthStateChanged((user) => {
  if (user) {
    authState.set("loggedIn");
  } else {
    authState.set("loggedOut");
  }
});
onAuthStateChanged(auth, (user) => {
  if (user) {
    authState.set("loggedIn");
  } else {
    authState.set("loggedOut");
  }
});
const isLoggedIn = derived(authState, ($authState) => $authState === "loggedIn");
export {
  isLoggedIn as i
};
