import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDLcrBLgAbWb3d_KE-DInA4IoL8svlsyvU",
  authDomain: "buskers-demo-vivek.firebaseapp.com",
  databaseURL: "https://buskers-demo-vivek.firebaseio.com",
  projectId: "buskers-demo-vivek",
  storageBucket: "buskers-demo-vivek.appspot.com",
  messagingSenderId: "698456608857"
};
const fire = firebase.initializeApp(config);
export default fire;

//This step gives us access to firebase anywhere else in the application and we will not have to go
//through the entire process again.
