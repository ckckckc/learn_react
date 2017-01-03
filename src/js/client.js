import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor() {
    super();

    this.nameList = [
      'Leo',
      'John',
      'Frank'
    ];
  }

  getName(num) {
    return this.nameList[num];
  }

  render() {
    return (
      <h1>Hello {this.getName(0)}!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);