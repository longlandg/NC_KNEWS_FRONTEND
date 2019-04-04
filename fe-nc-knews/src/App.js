import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import Nav from "./Components/Nav";

import HomeView from "./PageViews/HomeView";
import SingleArticleView from "./PageViews/SingleArticleView";
import PostCommentView from "./PageViews/PostCommentView";
import UserPageView from "./PageViews/UserPageView";
import PostArticleView from "./PageViews/PostArticleView";

class App extends Component {
  state = {
    userLoggedIn: true,
    userName: "weegembump"
  };

  render = () => {
    return (
      <div className="App">
        <h1 className="title">NC KNEWS</h1>
        <Nav userName={this.state.userName} />
        <Router>
          <HomeView path="/" />

          {/* <SignInPage userName={this.state.userName} path="/user" /> */}
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
          <PostArticleView
            userName={this.state.userName}
            path="/articles/postarticle"
          />
        </Router>
      </div>
    );
  };
}

export default App;
