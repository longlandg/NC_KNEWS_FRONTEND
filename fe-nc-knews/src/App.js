import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Router } from "@reach/router";

import Nav from "./Components/Nav";

import HomeView from "./PageViews/HomeView";
import SingleArticleView from "./PageViews/SingleArticleView";
import PostCommentView from "./PageViews/PostCommentView";
import UserPageView from "./PageViews/UserPageView";
import PostArticleView from "./PageViews/PostArticleView";
import SignInPageView from "./PageViews/SignInPageView";
import CreateTopicView from "./PageViews/CreateTopicView";
import QueryWriteNewArticle from "./PageViews/QueryWriteNewArticle";
import ArticleDeletedView from "./PageViews/ArticleDeletedView";

class App extends Component {
  state = {
    userName: "weegembump",
    loggedIn: true
  };

  render = () => {
    return (
      <div className="App">
        <h1 className="title">NC KNEWS</h1>
        <Nav
          userName={this.state.userName}
          logOutFunc={this.logOutFunc}
          loggedIn={this.state.loggedIn}
        />
        <Router>
          <HomeView path="/" loggedIn={this.state.loggedIn} />
          <HomeView path="/:topic" loggedIn={this.state.loggedIn} />

          <SignInPageView
            loggedIn={this.state.loggedIn}
            userLoginFunc={this.userLoginFunc}
            userName={this.state.userName}
            path="/login"
          />
          <SingleArticleView
            loggedIn={this.state.loggedIn}
            userName={this.state.userName}
            path="/articles/:article_id"
          />
          <UserPageView
            loggedIn={this.state.loggedIn}
            userName={this.state.userName}
            path="/users/:username"
          />
          <CreateTopicView
            article_id={this.state.article_id}
            userName={this.state.userName}
            path="/topics/createtopic"
          />
          <QueryWriteNewArticle
            loggedIn={this.state.loggedIn}
            slug={this.state.slug}
            userName={this.state.userName}
            path="/article/createquery/:newTopic"
          />

          <PostCommentView
            loggedIn={this.state.loggedIn}
            article_id={this.state.article_id}
            userName={this.state.userName}
            path="/articles/:article_id/postcomment"
          />
          <PostArticleView
            loggedIn={this.state.loggedIn}
            userName={this.state.userName}
            path="/articles/postarticle/"
          />
          <ArticleDeletedView
            loggedIn={this.state.loggedIn}
            article_id={this.state.article_id}
            userName={this.state.userName}
            path="/articles/deletecomment"
          />
        </Router>
      </div>
    );
  };

  userLoginFunc = loggedUserName => {
    this.setState({ userName: loggedUserName, loggedIn: true });
  };
  logOutFunc = () => {
    this.setState({ userName: null, loggedIn: false });
  };
}

export default App;
