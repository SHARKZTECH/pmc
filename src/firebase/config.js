// BACKEND FIREBASE
import firebase from "firebase/app";

// SERVICES OR FEATURES
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// config files
const firebaseConfig = {
    apiKey: "AIzaSyBSw9LZV8XboYWwAKpuKm-n2LuHDgR85t4",
    authDomain: "project-management-site-26cd1.firebaseapp.com",
    projectId: "project-management-site-26cd1",
    storageBucket: "project-management-site-26cd1.appspot.com",
    messagingSenderId: "830224299393",
    appId: "1:830224299393:web:1cc9d20efa4172cdb5e480"
  };

// initialize backend
firebase.initializeApp(firebaseConfig)

// initialize services or features
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export  {projectAuth, projectFirestore, projectStorage, timestamp}