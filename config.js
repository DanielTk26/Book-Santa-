import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBrYmnBv3hmDjT8MvO4w-uYg2i4IXfco8g",
    authDomain: "book-santa-d7704.firebaseapp.com",
    databaseURL: "https://book-santa-d7704-default-rtdb.firebaseio.com",
    projectId: "book-santa-d7704",
    storageBucket: "book-santa-d7704.appspot.com",
    messagingSenderId: "93833400628",
    appId: "1:93833400628:web:c5d785f751dc36b4861561"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();