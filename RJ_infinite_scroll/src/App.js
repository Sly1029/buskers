    import React, { Component } from "react";
    import logo from "./logo.svg";
    import "./App.css";
    import Image from "./Image.js"
    //import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
      var incrementor = 2258;
    class App extends Component {
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
          if (incrementor == 2262){
            incrementor = 2258;
          }
          items.push(
            <Image src={require('./busking/'+"IMG_"+incrementor+".jpg")} height={700} width={500} mode='fit'/>

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
            <ul>
              {this.showItems()}
            </ul>
            {this.state.loading
              ? <p className="App-intro">
                  loading ...
                </p>
              : ""}

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

    export default App;
