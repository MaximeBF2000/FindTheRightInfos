import firebase from "firebase"
import "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCC7Rt7uUUYZP77o18iQ2U1eSldjbOQuLA",
  authDomain: "findtherightinfos.firebaseapp.com",
  projectId: "findtherightinfos",
  storageBucket: "findtherightinfos.appspot.com",
  messagingSenderId: "982951663910",
  appId: "1:982951663910:web:e1584a7eb5b978ddc9c9e7"
}

firebase.initializeApp(firebaseConfig)


const fireStore = firebase.firestore()
const auth = firebase.auth()


export { firebase, fireStore, auth }

export { useAuth, useAuthActions } from "./useAuth"