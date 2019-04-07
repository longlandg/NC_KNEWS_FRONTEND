import React, { Component } from "react";
import Axios from "axios";
import { Link, navigate } from "@reach/router";
import { promises } from "fs";
import Button from "react-bootstrap/Button";

import { fetchUserArticles } from "../Components/apis";

const ArticleDeletedView = props => {
  console.log("hello", props);
  return (
    <div>
      <h4 className="topicquery">
        Congratulations you have deleted an article
      </h4>
      <Link to="/users/:username">
        <button
          className="homebutton"
          type="button"
          class="btn btn-secondary btn-sm"
        >
          ok
        </button>
      </Link>
    </div>
  );
};

export default ArticleDeletedView;
