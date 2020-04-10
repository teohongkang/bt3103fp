import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDpjn73cfsBV-PLJVjntXJBF13KGGZ-6dk",
  authDomain: "finalproject-693d6.firebaseapp.com",
  databaseURL: "https://finalproject-693d6.firebaseio.com",
  projectId: "finalproject-693d6",
  storageBucket: "finalproject-693d6.appspot.com",
  messagingSenderId: "627519512723",
  appId: "1:627519512723:web:3cdecd2ada8f7e5b0fed66",
  measurementId: "G-06WYBVHN6T"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;