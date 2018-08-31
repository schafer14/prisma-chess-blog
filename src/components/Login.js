import React, {Component} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {auth, firebase} from '../firebase/firebase'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

class Register extends Component {
  render() {
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  }
}

export default Register
