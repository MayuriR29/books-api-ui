import React, { Component } from "react";
import Books from "./Books";
import Authors from "./Authors";

class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <Authors />
      </div>
    );
  }
}

export default App;
