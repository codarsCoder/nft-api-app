// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  deleteDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLoader } from "../redux/DatabaseSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoSpYuneo1zefud5hybByzS6Af96F2mY8",
  authDomain: "poke-app-fb207.firebaseapp.com",
  projectId: "poke-app-fb207",
  storageBucket: "poke-app-fb207.appspot.com",
  messagingSenderId: "997203523659",
  appId: "1:997203523659:web:b5233d0bb896937ec835ce",
  measurementId: "G-KRC1CHFCHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const database = getFirestore(app);
export const dbComments = collection(database, "comments")
export const dbLike = collection(database, "likes")





export const getLkesWhis = async(pName,email) =>{
  
  let carray= []
  try {
    const q = query(dbLike, where('pName', '==', pName) , where('emal', '==', email))//wherede == olduğunda orderby çalışmıyor
    const querySnapshot = await getDocs(q);
    const fillArray = async () => {
      querySnapshot.forEach((doc) => {
        const id = doc.id;
        const { pName, emal } = doc.data()
        carray.push({ id,  pName, emal })
      })
    }
    await fillArray()

} catch (e) {
  console.log(e);
}
}
export const getAllLikesWhis = async(SetAllLikeList) =>{
  let carray= []
  try {
    const q = query(dbLike)//wherede == olduğunda orderby çalışmıyor
    const querySnapshot = await getDocs(q);
    const fillArray = async () => {
      querySnapshot.forEach((doc) => {
        const id = doc.id;
        const { pName, emal } = doc.data()
        carray.push({ id,  pName, emal })
      })
    }
    await fillArray()
    SetAllLikeList(carray)

} catch (e) {
  console.log(e);
}
}