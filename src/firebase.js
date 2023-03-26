import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore";
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
const projectCollection = collection(db, "projects");
const storage = getStorage(app);
export const userDoc = (userId) => doc(db, "users", userId);
export const projectDoc = (projectId) => doc(projectCollection, projectId);
export {
    auth, app, storage, db
}


