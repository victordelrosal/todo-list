import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBwkF4bXrZp2M3MkcloPnI_IQYoPDpVik4",
    authDomain: "todo-list-6e32f.firebaseapp.com",
    databaseURL: "https://todo-list-6e32f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-list-6e32f",
    storageBucket: "todo-list-6e32f.appspot.com",
    messagingSenderId: "645532534713",
    appId: "1:645532534713:web:fdb0aaf5c7ab10e3d21868"
  };

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();