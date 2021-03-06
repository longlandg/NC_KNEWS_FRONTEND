import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";

const Nav = props => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to={`/users/${props.userName}`}>
        <button>User</button>
      </Link>
    </nav>
  );
};

export default Nav;
