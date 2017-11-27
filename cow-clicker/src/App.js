import React, { Component } from "react";
import cowsvg from "./Cow_cartoon_04.svg";
import "./App.css";

class App extends Component {
  //Initialize the count to be 0.
  state = {
    count: 0
  };

  //onClick the count will be incremented by 1.
  onClick = () =>
    this.setState({
      count: this.state.count + 1
    });

  render() {
    return (
      //Add a className centered to center the image to the page using css.
      //Add onClick function to the svg so the count will increment by one when the cow is clicked.
      //Display the count, so you can see the count being incremented when the cow image is clicked.
      <div className="centered">
        <img src={cowsvg} alt="cow" onClick={this.onClick} />
        <div class="count">{`Count: ${this.state.count}`}</div>
      </div>
    );
  }
}

export default App;
