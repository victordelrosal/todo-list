import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    https://todo-list-6e32f-default-rtdb.europe-west1.firebasedatabase.app/
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();