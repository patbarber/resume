//import axios from "axios";
import db from "../init-firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const getData = () => {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(async () => {
      accessStore();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const accessStore = async () => {
    const docRef = doc(db, import.meta.env.VITE_DOC_NAME, import.meta.env.VITE_DOC_ID);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    
};

export default getData;
