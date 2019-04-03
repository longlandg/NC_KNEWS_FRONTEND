import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";

class userPageView extends Component {
  state = { userInfo: "" };

  render() {
    return (
      this.state.userInfo && (
        <div>
          <h1>hello</h1>
          <h1>{this.state.userInfo.user.username}</h1>
          {console.log(this.props.userName)}
          {console.log("this is the state", this.state)}
          <p>weiofjwdoifweoifjoieiwfj</p>
        </div>
      )
    );
  }

  componentDidMount = () => {
    this.userInfo();
  };

  userInfo = () => {
    Axios.get(
      `https://longlandncknews.herokuapp.com/api/users/${this.props.userName}`
    ).then(
      res => this.setState({ userInfo: res.data }),
      () => {
        console.log("this i sthe state", this.state);
      }
    );
  };
}

export default userPageView;
