import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { postTopic } from "../Components/apis";

const QueryWriteNewArticle = props => {
  return (
    <div>
      <h4>Congratulations you have created a topic</h4>
      {/* <h4>{console.log(this.state.slug)}</h4> */}
      <Link to={`/articles/postarticle`}>
        <h4>Would you like to write a new article for this topic?</h4>
      </Link>
      <Link to={`/topics/createtopic`}>
        <h4>or would you like to return to your home page</h4>
      </Link>
    </div>
  );
};

export default QueryWriteNewArticle;
