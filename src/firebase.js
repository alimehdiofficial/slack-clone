import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9KDDmIFY3ArcdjcPW_gL3qMd-bcIa4E4",
  authDomain: "slack-clone-7c6bc.firebaseapp.com",
  projectId: "slack-clone-7c6bc",
  storageBucket: "slack-clone-7c6bc.appspot.com",
  messagingSenderId: "254103466180",
  appId: "1:254103466180:web:e040e102ddfb0a6e8d5991",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
