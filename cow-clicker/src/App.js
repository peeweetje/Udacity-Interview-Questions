import React, { Component } from "react";
import cowsvg from "./Cow_cartoon_04.svg";
import "./App.css";

/*Create a simple webpage that has a cow image in the middle (centered horizontally on the page) and a counter label below it.
 Add the necessary code so that every time you click the cow image, the counter is incremented by 1.
  The counter should start with a value of 0. You should include a brief explanation of your code.
  Also, here is a URL for a cow image, https://upload.wikimedia.org/wikipedia/commons/2/21/Cow_cartoon_04.svg,
  if you would like to include it in your answer.*/

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
