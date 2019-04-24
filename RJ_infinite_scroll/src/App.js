    import React, { Component } from "react";
    import logo from "./logo.svg";
    import "./App.css";
    import Image from "./Image.js"
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
        var incrementor = 2258;
        for (var i = 0; i < this.state.items; i++) {
          items.push(
            <Image src={require('./busking/'+"IMG_"+incrementor+".jpg")} height={500} width={500} mode='fit'/>

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
