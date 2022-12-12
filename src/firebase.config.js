import {getApp, getApps, initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import{getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCYMD25Dms6-BDcmGVq4FaN4Wc4zGtJNLo",
  authDomain: "restaurant-app-3242f.firebaseapp.com",
  databaseURL: "https://restaurant-app-3242f-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-3242f",
  storageBucket: "restaurant-app-3242f.appspot.com",
  messagingSenderId: "450479572332",
  appId: "1:450479572332:web:11d9b08f5dab79faf59f49"  
};


  const app = getApps.Length > 0 ? getApp() :initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)
  
  export{app,firestore,storage};