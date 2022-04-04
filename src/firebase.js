import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCh1UFWqD4B8GYq0jRMuLItlQj-G66uq7c",
  authDomain: "whatsapp-clone-64479.firebaseapp.com",
  projectId: "whatsapp-clone-64479",
  storageBucket: "whatsapp-clone-64479.appspot.com",
  messagingSenderId: "1040528987646",
  appId: "1:1040528987646:web:dcc5a5305e7fd252c11caf",
  measurementId: "G-50HP1HH50W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firedbase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
