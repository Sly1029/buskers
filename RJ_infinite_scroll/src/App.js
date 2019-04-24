    import React, { Component } from "react";
    import logo from "./logo.svg";
    import "./App.css";
    import Image from 'react-image-resizer'
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
        var incrementor = 2258;
        //'./busking/'+"IMG_"+incrementor+".jpg"
        for (var i = 0; i < this.state.items; i++) {
          items.push(
            <div>
            <Image
              src="../public/IMG_2258.jpg"
              height= {200}
              width = {200}
            />
          </div>
          );
         incrementor++;
        }
        return items;
      }

      loadMore() {
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
    }

    export default App;
