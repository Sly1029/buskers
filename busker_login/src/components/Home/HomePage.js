import React, { Component } from "react";
import Image from "./Image.js";
import Modal from "react-bootstrap/Modal";
import "./HomePage.css";
import firebase from "firebase";
//import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
//var incrementor = 2258;

const config = {
  apiKey: "AIzaSyDLcrBLgAbWb3d_KE-DInA4IoL8svlsyvU",
  authDomain: "buskers-demo-vivek.firebaseapp.com",
  databaseURL: "https://busker-5561a.firebaseio.com/",
  projectId: "buskers-demo-vivek",
  storageBucket: "buskers-demo-vivek.appspot.com",
  messagingSenderId: "698456608857"
};

class HomePage extends Component {
  constructor(props) {
    if (firebase.apps.length === 0) firebase.initializeApp(config);
    super(props);
    this.imageSource = "";
    this.image_url = [];
    this.state = {
      items: 5,
      loading: false,
      isOpen: false
    };
    this.populateList();
    this.loadMore();
  }

  componentDidMount() {
    // Detect when scrolled to bottom.
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight + 20 >=
        this.refs.myscroll.scrollHeight
      ) {
        this.loadMore();
      }
    });
  }

  populateList() {
    var database = firebase.database();
    database.ref("images").on("value", snapshot => {
      var incrementor = this.state.items;
      snapshot.forEach(child => {
        //  console.log(child.val());
        this.image_url.push(child.val());
      });
    });
    console.log(this.image_url);
  }

  showItems() {
    var items = [];
    //<div>
    //<img src={require('./busking/'+"IMG_"+incrementor+".jpg")}/>;
    //</div>);
    var amtItems = this.state.items;
    console.log(amtItems);
    if (amtItems > this.image_url.length) {
      amtItems = this.image_url.length;
    }
    for (var i = 0; i < amtItems; i++) {
      console.log(this.image_url[i] + "");
      items.push(
        <div class="wrapper">
          <div class="container">
            <button>
              <Image
                src={this.image_url[i]}
                height={600}
                width={800}
                mode="fill"
                onClick={e => this.toggleModal(e, this.image_url[i])}
              />
            </button>

            <form onSubmit={this.addComment}>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    name="comment"
                    placeholder="Add a comment"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
    return items;
  }

  toggleModal(e, source) {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.imageSource = source;
  }

  loadMore() {
    //console.log(this.state.items);
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ items: this.state.items + 10, loading: false });
    }, 2000);
  }

  render() {
    //console.log(this.showItems());
    return (
      <div
        className="App"
        ref="myscroll"
        style={{ height: "2000px", overflow: "auto" }}
      >
        <Modal
          show={this.state.isOpen}
          onClose={e => this.toggleModal(e, this.imageSource)}
        >
          <Modal.Header>
            <button>
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Letter_x.svg/1200px-Letter_x.svg.png"
                }
                height={20}
                width={20}
                mode={"fit"}
                onClick={e => this.toggleModal(e, this.imageSource)}
              />
            </button>
          </Modal.Header>

          <Image src={this.imageSource} height={500} width={500} mode="fit" />
        </Modal>
        <ul>{this.showItems()}</ul>
        {this.state.loading ? <p className="App-intro">loading ...</p> : ""}
      </div>
    );
  }

  //     var styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     paddingTop: Constants.statusBarHeight,
  //     backgroundColor: '#ecf0f1',
  //   },
  //   image: {
  //     width: Dimensions.get('window').width,
  //     height: Dimensions.get('window').width,
  //   },
  //   info: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     padding: 10,
  //     paddingLeft: 15,
  //     paddingRight: 15,
  //     borderBottomWidth: 1,
  //     borderColor: '#d8d8d8',
  //   },
  //   infoText: {
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //   },
  //   comment: {
  //     flexDirection: 'row',
  //     padding: 10,
  //     paddingLeft: 15,
  //     borderBottomWidth: 1,
  //     borderColor: '#d8d8d8',
  //   },
  //   commentText: {
  //     paddingRight: 15,
  //     fontWeight: 'bold',
  //   },
  // })
}

export default HomePage;
