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

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  addImages(){
    const storageRef = firebase.storage().ref();
    var mainImage;
    var path = require('path')
    var fs = require('fs')
    const directoryPath = path.join('busking');
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        mainImage = storageRef.child(file.name);
    });
});
}
}
export default Firebase;
