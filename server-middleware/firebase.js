const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyDepVexsiFrNg3yjOTT8ppzgRcWBAw530E",
  authDomain: "verniba-21622.firebaseapp.com",
  databaseURL: "https://verniba-21622-default-rtdb.firebaseio.com",
  projectId: "verniba-21622",
  storageBucket: "verniba-21622.appspot.com",
  messagingSenderId: "407912600422",
  appId: "1:407912600422:web:fb54f7e41e8d6e2ccfaea7",
  measurementId: "G-3NQZ8DXNPM"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

module.exports = {db: database}
