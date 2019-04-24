import React, { Component } from "react";
    import logo from "./logo.svg";
    import "./App.css";
    import InfiniteScroll from "react-infinite-scroller";
    import firebase from 'firebase'
    import Img from 'react-image'

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFPcW9EdAcRq9syfi_-5yZwvUAfwI3PTE",
    authDomain: "busker-5561a.firebaseapp.com",
    databaseURL: "https://busker-5561a.firebaseio.com",
    projectId: "busker-5561a",
    storageBucket: "busker-5561a.appspot.com",
    messagingSenderId: "564719364967"
  };
  var imageUrls = [];
  var images = [];
  firebase.initializeApp(config);
  const itemsRef = firebase.database().ref('example');
  const storageRef = firebase.storage().ref()
    class Scroll2 extends Component {
      constructor(props) {
        super(props);
        this.state = {
          items: 20,
          hasMoreItems: true
        };

        for (var i = 58; i<=68;i++){
          imageUrls.push("IMG_22"+i+".jpg");
          console.log("IMG_22"+i+".jpg");
        }

      }

      showItems() {

        for (var i = 0; i < this.state.imageUrls; i++) {
        images.push(<img src={require(process.env.PUBLIC_URL + '/'+ imageUrls[i])} alt="logo"/>)
        //images.push(<Img src={require('../public/'+ imageUrls[i])} alt="logo"/>)
        console.log(images[i]);
        }
        return images;
      }

      loadMore() {
        if(this.state.images===13){

          this.setState({ hasMoreItems: false});
        }else{
            setTimeout(() => {
            this.setState({ items: this.state.images + 5});
        }, 2000);
        }

      }

      render() {
        return (
          <div className="App">
            <div style={{height:'2000px', overflow:'auto'}}>
              <InfiniteScroll
                loadMore={this.loadMore.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={<div className="loader"> Loading... </div>}
                useWindow={false}
              >
                {this.showItems()}{" "}
              </InfiniteScroll>{" "}
            </div>{" "}
          </div>
        );
      }
    }

    export default Scroll2;
