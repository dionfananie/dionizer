import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'dionizer-5656e.firebaseapp.com',
  databaseURL: 'https://dionizer-5656e.firebaseio.com',
  projectId: 'dionizer-5656e',
  storageBucket: 'dionizer-5656e.appspot.com',
  messagingSenderId: process.env.FIREBASE_SENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.MEASUREMENTID
}

let app = null
app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const db = app.database()
