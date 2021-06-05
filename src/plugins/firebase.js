import Vue from 'vue';
import firebase from "firebase";
import store from "../store";

var firebaseConfig = {
    apiKey: "AIzaSyCMXcZsonMf4-wM8xiDrPI3fIVc-REWYa4",
    authDomain: "movie-project-21acb.firebaseapp.com",
    projectId: "movie-project-21acb",
    storageBucket: "movie-project-21acb.appspot.com",
    messagingSenderId: "890967571590",
    appId: "1:890967571590:web:438234b045e31ddc872507",
    measurementId: "G-0KEN0FM649"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(user => {
    store.dispatch("addUser", { name: user.displayName, email: user.email });
  });
  
  Vue.prototype.$firebase = firebase;
  
  export default firebase;