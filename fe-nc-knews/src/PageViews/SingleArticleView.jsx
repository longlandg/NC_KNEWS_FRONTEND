import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";
import { updateArticleVotes, fetchSingleArticle } from "../Components/apis";
class SingleArticleView extends Component {
  state = {
    individualArticle: null,
    allComments: null,
    voteChange: 0
  };

  render() {
    return (
      <div>
        {this.state.individualArticle && (
          <div>
            <h1>{this.state.individualArticle.title}</h1>
            <p>Author:{this.state.individualArticle.author}</p>
            <p>Posted:{this.state.individualArticle.created_at}</p>
            <p>Topic:{this.state.individualArticle.topic}</p>
            <p>{this.state.individualArticle.body}</p>
            <Link
              to={`/articles/${
                this.state.individualArticle.article_id
              }/postcomment`}
            >
              <button>post comment</button>
            </Link>

            <Link to={`/articles`}>
              <button>read more articles like this</button>
            </Link>

            <button onClick={() => this.handleVoteClick(1)}>vote up</button>
            <span>
              {" "}
              total votes:{" "}
              {this.state.individualArticle.votes + this.state.voteChange}
            </span>
            <button onClick={() => this.handleVoteClick(-1)}>vote down</button>
            {/* <Link to={`/api/articles/${this.state.individualArticle.article_id}/postcomment`} ><button>post comment</button></Link> */}
          </div>
        )}

        {this.state.allComments && (
          <div>
            <ul>
              {this.state.allComments.map(comment => {
                const {
                  votes,
                  comments_id,
                  created_at,
                  author,
                  body
                } = comment;
                return (
                  <li key={comments_id}>
                    <h4>Author: {author}</h4>
                    <p> Date Posted: {created_at}</p>
                    <p> Comment Id: {comments_id}</p>
                    <p>{body}</p>
                    <p>Votes: {votes}</p>

                    <button
                      disabled={comment.author !== this.props.userName}
                      onClick={() => {
                        Axios.delete(
                          `https://longlandncknews.herokuapp.com/api/comments/${comments_id}`
                        ).then(res => {
                          this.fetchAllCommentsByArticleId();
                        });
                      }}
                    >
                      delete comment
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

  handleVoteClick = numberOfVotes => {
    updateArticleVotes(numberOfVotes, this.props.article_id);
    this.setState(state => {
      return { voteChange: state.voteChange + numberOfVotes };
    });
  };
  // componentDidMount = () => {
  //   Promise.resolve(
  //     fetchAllArticles(this.state.sortBy).then(articles => {
  //       this.setState({ allArticles: articles });
  //     })
  //   );
  // };

  componentDidMount = () => {
    this.fetchSingleArticle();
    // this.fetchAllCommentsByArticleId();
  };

  // componentDidUpdate = (_, prevState) => {
  //   if (this.state.allComments !== prevState.allComments) {
  //     console.log("hello");
  //     this.fetchSingleArticle();
  //     this.fetchAllCommentsByArticleId();
  //   }
  // };

  fetchSingleArticle = () => {
    Axios.get(
      `https://longlandncknews.herokuapp.com/api/articles/${
        this.props.article_id
      }`
    ).then(res => this.setState({ individualArticle: res.data.article }));
  };

  fetchAllCommentsByArticleId = () => {
    Axios.get(
      `https://longlandncknews.herokuapp.com/api/articles/${
        this.props.article_id
      }/comments`
    ).then(res => this.setState({ allComments: res.data.comments }));
  };
}

export default SingleArticleView;
