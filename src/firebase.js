import firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDU-ltmq-nTchySFGroZEpqhbMkCCeOzfE",
  authDomain: "instagram-5448b.firebaseapp.com",
  projectId: "instagram-5448b",
  storageBucket: "instagram-5448b.appspot.com",
  messagingSenderId: "156598336825",
  appId: "1:156598336825:web:1e88bb754304083f7e3ce8",
  measurementId: "G-E7P6H2WEF4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export {db};
  export default db;
