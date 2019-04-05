import React, { Component } from "react";
import Axios from "axios";
import { Link, navigate } from "@reach/router";
import { promises } from "fs";
import {
  fetchUserInfo,
  fetchUserArticles,
  deleteArticle
} from "../Components/apis";

class userPageView extends Component {
  state = {
    userInfo: "",
    userArticles: null,
    userComments: [],
    articleDeleted: false
  };

  render() {
    return (
      <div>
        {this.state.userInfo && (
          <div>
            <h1>user view</h1>
            <h1>Username: {this.state.userInfo.username}</h1>
            <h1>Name: {this.state.userInfo.name}</h1>
            <img src={this.state.userInfo.avatar_url} />
            <Link to={`/articles/postarticle`}>
              <h4>Write new article</h4>
            </Link>
          </div>
        )}
        {this.state.userArticles && (
          <div>
            <ul>
              {this.state.userArticles.map(article => {
                const {
                  title,
                  topic,
                  created_at,
                  comment_count,
                  votes,
                  article_id
                } = article;
                return (
                  <li key={article_id}>
                    {" "}
                    <Link to={`/articles/${article_id}`}>
                      <h4>
                        Title: {title} Topic: {topic} Date Posted: {created_at}
                      </h4>
                      <h5>
                        Number of Comments: {comment_count} Votes: {votes}
                      </h5>
                    </Link>
                    <button
                      disabled={article.author !== this.props.userName}
                      onClick={() => {
                        deleteArticle(article_id).then(res => {
                          fetchUserArticles(this.props.userName);
                        });
                      }}
                    >
                      delete article
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    Promise.all([
      fetchUserInfo(this.props.userName),
      fetchUserArticles(this.props.userName)
    ]).then(([userInfo, userArticles]) => {
      this.setState({ userInfo, userArticles });
      console.log(this.state);
    });
  };

  componentDidUpdate = (_, prevState) => {
    if (this.state !== prevState) {
      return ([articleDeleted, userArticles]) => {
        this.setState({ articleDeleted, userArticles });
      };
    }
  };
}

export default userPageView;
