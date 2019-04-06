import React, { Component } from "react";
import Axios from "axios";
import { Link, navigate } from "@reach/router";

const Nav = props => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to={`/users/${props.userName}`}>
        <button>User</button>
      </Link>
      <Link to={`/login`}>
        <button>Sign In / Log In</button>
      </Link>
      <button
        // disabled={}
        onClick={() => props.logOutFunc()}
      >
        {/* , => props.logOutFunc().navigate(`/`) */}
        log out
      </button>
    </nav>
  );
};

export default Nav;
