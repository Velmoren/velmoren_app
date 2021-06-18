const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyCD6YnQMbaqVM96l8Op1WKfJ8BJV2PY9tg",
  authDomain: "lms-pro-39994.firebaseapp.com",
  databaseURL: "https://lms-pro-39994-default-rtdb.firebaseio.com",
  projectId: "lms-pro-39994",
  storageBucket: "lms-pro-39994.appspot.com",
  messagingSenderId: "705347059317",
  appId: "1:705347059317:web:f2329ee0ce43fab11f823c",
  measurementId: "G-NR63BPEVXM"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

module.exports = {db: database}
