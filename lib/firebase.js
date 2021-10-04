import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAvjljk4Gi1cO_koC12Nja29wRCPz730Sk",
  authDomain: "nextfire-e2dd7.firebaseapp.com",
  projectId: "nextfire-e2dd7",
  storageBucket: "nextfire-e2dd7.appspot.com",
  messagingSenderId: "872153502191",
  appId: "1:872153502191:web:25e12df409261a8fc4e61a",
  measurementId: "G-Y6KQYZ6MN0"
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();