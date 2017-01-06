import React from "react";
import { Link } from "react-router";
import { createHistory } from 'history';

export default class Layout extends React.Component {

  navigate() {
    let history = createHistory();
    history.pushState(null, "/");
  }

  render() {
    return (
      <div>
        <h1>Layout</h1>
        {this.props.children}
        <Link to="archives" activeClassName="test"><button class="btn btn-danger">archives</button></Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }

}