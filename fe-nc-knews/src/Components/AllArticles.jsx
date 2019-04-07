import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";

class AllArticles extends Component {
  state = {
    article_id: null,
    individualArticle: null
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
            <li key={article_id} className="individualArticleCards">
              {" "}
              <Link to={`/articles/${article_id}`}>
                <h4 className="articletitle">{title} </h4>
                <p className="articledetails">{topic} </p>
                <p className="articledetails">Date Posted: {created_at}</p>
                <p className="articledetails">Author: {author} </p>
                <p className="articledetails">
                  Number of Comments: {comment_count}{" "}
                </p>
                <p className="articledetails">Votes: {votes}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  // clicker = e => {
  //   e.preventDefault();

  //   Axios.get(
  //     `https://longlandncknews.herokuapp.com/api/articles/${e.target.value}`
  //   ).then(res => {
  //     let individualarticle = res.data;
  //     this.setState({ individualArticle: res.data.article }, () =>
  //       console.log(this.state)
  //     );
  //   });
  // };
}

export default AllArticles;
