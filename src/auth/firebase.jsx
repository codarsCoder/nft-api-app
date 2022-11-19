// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const auth = getAuth(app)

export const createUser = async (email, password, navigate, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/");
      toastSuccessNotify("Registered successfully!");
      // console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
      // alert(error.message);
    }
  };