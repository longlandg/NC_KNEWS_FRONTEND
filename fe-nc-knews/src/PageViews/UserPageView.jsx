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
          <div className="userpagehead">
            <h1 className="articledetails">{this.state.userInfo.username}</h1>
            <p className="articledetails">{this.state.userInfo.name}</p>
            <img src={this.state.userInfo.avatar_url} />
            <Link to={`/topics/createtopic`}>
              <p className="articledetails">create new topic</p>
            </Link>
            <Link to={`/articles/postarticle`}>
              <p className="articledetails">write new article</p>
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
                  <li key={article_id} className="individualArticleCards">
                    <Link to={`/articles/${article_id}`}>
                      <h4 className="articletitle">{title} </h4>
                      <p className="articledetails">{topic} </p>
                      <p className="articledetails">
                        Date Posted: {created_at}
                      </p>
                      <p className="articledetails">
                        Number of Comments: {comment_count}{" "}
                      </p>
                      <p className="articledetails">Votes: {votes}</p>
                    </Link>
                    <button
                      className="deletebutton"
                      type="button"
                      class="btn btn-warning btn-sm"
                      disabled={article.author !== this.props.userName}
                      onClick={() => {
                        deleteArticle(article_id).then(res => {
                          fetchUserArticles(this.props.userName);
                          console.log(article_id);
                          navigate(`/articles/deletecomment`);
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
