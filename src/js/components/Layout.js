import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {'name' : 'Wellcome'};
  }
  render() {
    setTimeout(() => {
      this.setState({'name' : 'Wellcome Leo'});
    }, 1500);

    return (
      <div>
        <Header name={this.state.name} />
        <Footer />
      </div>
    );
  }
}