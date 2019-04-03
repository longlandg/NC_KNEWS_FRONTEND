import React, { Component } from "react";
import Axios from "axios";
import { Link, navigate } from "@reach/router";
import { promises } from "fs";

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
            <h1>Username: {this.state.userInfo.username}</h1>
            <h1>Name: {this.state.userInfo.name}</h1>
            <img src={this.state.userInfo.avatar_url} />
          </div>
        )}
        {this.state.userArticles && (
          <div>
            <ul>
              {this.state.userArticles.articles.map(article => {
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
                        Axios.delete(
                          `https://longlandncknews.herokuapp.com/api/articles/${article_id}`
                        ).then(res => {
                          this.setState({ articleDeleted: true });
                          console.log(res.data);
                          this.userArticles();
                        });
                        console.log("this is the click", article_id);
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
    Promise.all([this.userInfo(), this.userArticles()]).then(
      ([userInfo, userArticles]) => {
        this.setState({ userInfo, userArticles });
        console.log("hi therestate", this.state);
      }
    );
  };

  componentDidUpdate = (_, prevState) => {
    if (this.state.articleDeleted === true) {
      return ([articleDeleted, userArticles]) => {
        this.setState({ articleDeleted, userArticles });
      };

      console.log("i updated");
    }
  };

  userInfo = () => {
    return Axios.get(
      `https://longlandncknews.herokuapp.com/api/users/${this.props.userName}`
    ).then(res => {
      return res.data.user;
    });
  };
  userArticles = () => {
    return Axios.get(
      `https://longlandncknews.herokuapp.com/api/articles?author=${
        this.props.userName
      }`
    ).then(res => {
      console.log(res.data);
      return res.data;
    });
  };
}

export default userPageView;
