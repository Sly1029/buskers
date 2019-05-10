import React, { Component } from "react";
import Image from "./Image.js";
import "./HomePage.css";
//import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
var incrementor = 2258;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 5,
      loading: false
    };
  }
  componentDidMount() {
    // Detect when scrolled to bottom.
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.loadMore();
      }
    });
  }

  showItems() {
    var items = [];
    //<div>
    //<img src={require('./busking/'+"IMG_"+incrementor+".jpg")}/>;
    //</div>);

    for (var i = 0; i < this.state.items; i++) {
      if (incrementor == 2283) {
        incrementor = 2284;
      }
      if (incrementor == 2271) {
        incrementor = 2273;
      }
      if (incrementor == 2302) {
        incrementor = 2250;
      }
      items.push(
        <div class="wrapper">
          <div class="container">
            <Image
              src={require("./busking/" + "IMG_" + incrementor + ".jpg")}
              height={1000}
              width={800}
              mode="fit"
            />
          </div>
        </div>
      );
      incrementor++;
    }
    return items;
  }

  loadMore() {
    console.log(this.state.items);
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ items: this.state.items + 5, loading: false });
    }, 2000);
  }

  render() {
    return (
      <div
        className="App"
        ref="myscroll"
        style={{ height: "2000px", overflow: "auto" }}
      >
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