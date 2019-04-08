import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  return (
    <nav className="navbar">
      <Link to="/">
        <button
          className="homebutton"
          type="button"
          class="btn btn-secondary btn-sm"
        >
          Home
        </button>
      </Link>
      <Link to={`/users/${props.userName}`}>
        <button
          disabled={!props.loggedIn}
          type="button"
          class="btn btn-secondary btn-sm"
        >
          User
        </button>
      </Link>
      <Link to={`/login`}>
        <button type="button" class="btn btn-secondary btn-sm">
          Sign In / Log In
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          class="btn btn-secondary btn-sm"
          onClick={() => props.logOutFunc()}
        >
          log out
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
