import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import Nav from "./Components/Nav";

import HomeView from "./PageViews/HomeView";
import SingleArticleView from "./PageViews/SingleArticleView";
import PostCommentView from "./PageViews/PostCommentView";
import UserPageView from "./PageViews/UserPageView";

class App extends Component {
  state = {
    userLoggedIn: true,
    userName: "tickle122"
  };

  render = () => {
    return (
      <div className="App">
        <h1 className="title">NC KNEWS</h1>
        <Nav userName={this.state.userName} />
        <Router>
          <HomeView path="/" />
          <SingleArticleView
            userName={this.state.userName}
            path="/articles/:article_id"
          />
          <UserPageView
            userName={this.state.userName}
            path="/users/:username"
          />
          <PostCommentView
            article_id={this.state.article_id}
            userName={this.state.userName}
            path="/articles/:article_id/postcomment"
          />
        </Router>
      </div>
    );
  };
}

export default App;
