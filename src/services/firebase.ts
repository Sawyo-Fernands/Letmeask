import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBqPRJM_D5pPv7DJYpgo_wbB0jlW4nk7t4",
  authDomain: "letmeask-4ce10.firebaseapp.com",
  databaseURL: "https://letmeask-4ce10-default-rtdb.firebaseio.com",
  projectId: "letmeask-4ce10",
  storageBucket: "letmeask-4ce10.appspot.com",
  messagingSenderId: "667087490996",
  appId: "1:667087490996:web:64f4286f39af8316ab2ce1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }