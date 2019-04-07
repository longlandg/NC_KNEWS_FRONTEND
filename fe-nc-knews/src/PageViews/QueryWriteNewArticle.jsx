import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { postTopic } from "../Components/apis";

const QueryWriteNewArticle = props => {
  return (
    <div>
      <h4 className="topicquery">
        Congratulations you have created the following topic: {props.newTopic}
      </h4>
      {/* <h4>{console.log(this.state.slug)}</h4> */}
      <Link to={`/articles/postarticle`}>
        <p className="topicquery">
          Would you like to write a new article for this topic?
        </p>
      </Link>
      <Link to={`/users/:username`}>
        <p className="topicquery">
          or would you like to return to your home page?
        </p>
      </Link>
    </div>
  );
};

export default QueryWriteNewArticle;
