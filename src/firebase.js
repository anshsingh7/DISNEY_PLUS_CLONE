// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4X3kzKMmsYC_9_4W-Xr2uipNVGrDMgSI",
  authDomain: "disneyplus-clone-70efd.firebaseapp.com",
  projectId: "disneyplus-clone-70efd",
  storageBucket: "disneyplus-clone-70efd.appspot.com",
  messagingSenderId: "952739403946",
  appId: "1:952739403946:web:d326ca1ea6afd8eb8d58d3",
  measurementId: "G-CR0VNZKGQ3"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBEovajbY68AohvUemYUIqT4K55TgAz3jE",
//     authDomain: "disney-clone-c45ca.firebaseapp.com",
//     projectId: "disney-clone-c45ca",
//     storageBucket: "disney-clone-c45ca.appspot.com",
//     messagingSenderId: "1087165830413",
//     appId: "1:1087165830413:web:38b9617d44791f89a30c44",
//     measurementId: "G-N8671GYTHZ"
//   };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export {auth, provider, storage };
export default db;

