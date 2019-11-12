import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDztHXhEqSZwsKSzx0KNXuhmF8-p3TwYRM',
  authDomain: 'dionizer-5656e.firebaseapp.com',
  databaseURL: 'https://dionizer-5656e.firebaseio.com',
  projectId: 'dionizer-5656e',
  storageBucket: 'dionizer-5656e.appspot.com',
  messagingSenderId: '64956808979',
  appId: '1:64956808979:web:e688416d178d9d0fc164e6',
  measurementId: 'G-K7WQM2Z0F3'
}

let app = null
app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const db = app.database()
