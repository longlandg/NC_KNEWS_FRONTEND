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
import SignInPageView from "./PageViews/SignInPageView";
import CreateTopicView from "./PageViews/CreateTopicView";
import QueryWriteNewArticle from "./PageViews/QueryWriteNewArticle";

class App extends Component {
  state = {
    // userLoggedIn: true,
    userName: ""
  };

  render = () => {
    return (
      <div className="App">
        <h1 className="title">NC KNEWS</h1>
        <Nav userName={this.state.userName} logOutFunc={this.logOutFunc} />
        <Router>
          <HomeView path="/" />
          <HomeView path="/:topic" />

          <SignInPageView
            userLoginFunc={this.userLoginFunc}
            userName={this.state.userName}
            path="/login"
          />
          <SingleArticleView
            userName={this.state.userName}
            path="/articles/:article_id"
          />
          <UserPageView
            userName={this.state.userName}
            path="/users/:username"
          />
          <CreateTopicView
            article_id={this.state.article_id}
            userName={this.state.userName}
            path="/topics/createtopic"
          />
          <QueryWriteNewArticle
            slug={this.state.slug}
            userName={this.state.userName}
            path="/article/createquery/:newTopic"
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

  userLoginFunc = loggedUserName => {
    this.setState({ userName: loggedUserName });
  };
  logOutFunc = () => {
    this.setState({ userName: "" });
  };
}

export default App;
