import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDIS9shtMtudd9_QUeHFsl_K76ZF_9yyEA',
  authDomain: 'chess4success-87818.firebaseapp.com',
  databaseURL: 'https://chess4success-87818.firebaseio.com',
  projectId: 'chess4success-87818',
  storageBucket: 'chess4success-87818.appspot.com',
  messagingSenderId: '976234231984',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {auth, firebase}
