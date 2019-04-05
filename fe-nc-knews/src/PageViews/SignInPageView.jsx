import React, { Component } from "react";

import { Link, navigate } from "@reach/router";
import { fetchAllUsers } from "../Components/apis";

class SignInPageView extends Component {
  handleUserNameChange = event => {
    this.setState({ userName: event.target.value });
    console.log("this is the state", this.state);
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.userLoginFunc(this.state.userName);

    this.setState({ userName: this.state.userName });
    console.log("all users", this.state.AllUsers);
    const checkForUser = this.state.AllUsers.filter(user => {
      return user.username === this.state.userName;
    });
    console.log("im above the navigate", checkForUser.length);
    console.log("im above the navigate", this.state.userName);
    if (checkForUser.length === 1) {
      navigate(`/users/${this.state.userName}`);
    }
  };
  state = {
    AllUsers: [],
    userName: ""
  };

  componentDidMount = () => {
    Promise.resolve(
      fetchAllUsers().then(users => {
        this.setState({ AllUsers: users });
      })
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
        </label>

        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default SignInPageView;
