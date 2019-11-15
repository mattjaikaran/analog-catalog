import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

//switch over
const config = {
  apiKey: "AIzaSyDzxG11EAQ14gfB2eRlqji3vuej4iSo5Z0",
  authDomain: "analog-catalog.firebaseapp.com",
  databaseURL: "https://analog-catalog.firebaseio.com",
  projectId: "analog-catalog",
  storageBucket: "analog-catalog.appspot.com",
  messagingSenderId: "123946873651",
  appId: "1:123946873651:web:a68841ca59d7425bb80446",
  measurementId: "G-M9GX50X2N8"
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  register = async (email, password) => {
    return await this.auth.createUserWithEmailAndPassword(email, password)
  }

  login = async (email, password) => {
    await this.auth.signInWithEmailAndPassword(email, password)
  }



  logout = async () => await this.auth.signOut()

  passwordReset = async email => await this.auth.sendPasswordResetEmail(email)

  passwordUpdate = async password =>
    await this.auth.currentUser.updatePassword(password)
}

export default Firebase
