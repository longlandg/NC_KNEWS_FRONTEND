import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";

class GetAllCommentsById extends Component {
  state = {
    Comments: []
  };

  render() {
    return (
      <ul>
        {this.props.allArticles.map(article => {
          const {
            title,
            topic,
            created_at,
            author,
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
                  Author: {author} Number of Comments: {comment_count} Votes:{" "}
                  {votes}
                </h5>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  clicker = e => {
    e.preventDefault();

    Axios.get(
      `https://longlandncknews.herokuapp.com/api/articles/${
        e.target.value
      }/comments`
    ).then(res => {
      this.setState({ individualArticle: res.data.article });
    });
  };
}

export default GetAllCommentsById;
