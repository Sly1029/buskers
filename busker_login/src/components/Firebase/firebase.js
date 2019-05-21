import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase"
const config = {
  apiKey: "AIzaSyDLcrBLgAbWb3d_KE-DInA4IoL8svlsyvU",
  authDomain: "buskers-demo-vivek.firebaseapp.com",
  databaseURL: "https://buskers-demo-vivek.firebaseio.com",
  projectId: "buskers-demo-vivek",
  storageBucket: "buskers-demo-vivek.appspot.com",
  messagingSenderId: "698456608857"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***


returnRef(reference){
  return firebase.ref(reference)
}
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);



}
export default Firebase
