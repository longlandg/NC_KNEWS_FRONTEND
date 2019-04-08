import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";
import {
  deleteComment,
  updateArticleVotes,
  updateCommentsVotes,
  fetchSingleArticle,
  fetchAllCommentsByArticleId
} from "../Components/apis";

class SingleArticleView extends Component {
  state = {
    individualArticle: null,
    allComments: null,
    voteChange: 0,
    CommentVoteChange: 0
  };

  render() {
    return (
      <div>
        {this.state.individualArticle && (
          <div className="individualArticleCards">
            <h1>{this.state.individualArticle.title}</h1>
            <p className="articledetails">
              {this.state.individualArticle.author}
            </p>
            <p className="tinytext">
              {" "}
              Posted:{this.state.individualArticle.created_at}
            </p>

            <p className="tinytext">
              Topic:{this.state.individualArticle.topic}
            </p>
            <p className="articledetails">
              {this.state.individualArticle.body}
            </p>
            {/* <p className="articledetails">
              {this.state.individualArticle.article_id}
            </p> */}
            <p className="tinytextblack">
              {" "}
              total votes:{" "}
              {this.state.individualArticle.votes + this.state.voteChange}
            </p>
            <Link to={`/${this.state.individualArticle.topic}`}>
              <button
                className="articlesbutton"
                type="button"
                class="btn btn-info btn-sm"
              >
                read more articles like this
              </button>
            </Link>
            <div className="postbutton">
              <Link
                to={`/articles/${
                  this.state.individualArticle.article_id
                }/postcomment`}
              >
                <button
                  disabled={!this.props.loggedIn}
                  className="postbutton"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  post comment
                </button>
              </Link>
            </div>
            <div className="votebutton">
              <button
                disabled={!this.props.loggedIn}
                type="button"
                class="btn btn-success btn-sm"
                onClick={() => this.handleVoteClick(1)}
              >
                vote up
              </button>

              <button
                disabled={!this.props.loggedIn}
                type="button"
                class="btn btn-danger btn-sm"
                onClick={() => this.handleVoteClick(-1)}
              >
                vote down
              </button>
              {/* <Link to={`/api/articles/${this.state.individualArticle.article_id}/postcomment`} ><button>post comment</button></Link> */}
            </div>
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
                  <li key={comments_id} className="individualCommentsCards">
                    {/* <p className="tinytext">comment....</p> */}
                    <p className="articledetails">Comment: {body}</p>
                    <p className="tinytext">Date Posted: {created_at}</p>
                    <p className="tinytext">Author: {author}</p>
                    <p className="tinytext"> Comment Id: {comments_id}</p>

                    <p className="tinytextblack">
                      {" "}
                      total votes:
                      {comment.votes + this.state.CommentVoteChange}
                    </p>
                    {/* <p className="totalvotes"> total votes: {votes}</p> */}
                    <div className="deletebutton">
                      <button
                        className="deletebutton"
                        type="button"
                        class="btn btn-warning btn-sm"
                        disabled={this.props.userName !== author}
                        onClick={() => {
                          deleteComment(comments_id).then(res => {
                            let filteredcomments = this.state.allComments.filter(
                              comment => comment.comments_id !== comments_id
                            );

                            this.setState({ allComments: filteredcomments });
                            // fetchAllCommentsByArticleId(this.props.article_id);
                            // this.setState = state => {
                            //   return {
                            //     allComments: this.state.allComments.filter(
                            //       comment => comment.comments_id === comments_id
                            //     )
                            //   };
                            //   // return {
                            //   //   CommentVoteChange:
                            //   //     prevState.CommentVoteChange + numberOfVotes
                            //   // };
                            // };
                          });
                        }}
                      >
                        delete comment {console.log(this.props.userName)}
                      </button>
                    </div>
                    <div className="votebutton">
                      <button
                        disabled={!this.props.userName}
                        type="button"
                        class="btn btn-success btn-sm"
                        onClick={() =>
                          this.handleCommentsVoteClick(1, comment.comments_id)
                        }
                      >
                        {" "}
                        vote up
                      </button>

                      <button
                        disabled={!this.props.loggedIn}
                        type="button"
                        class="btn btn-danger btn-sm"
                        onClick={() =>
                          this.handleCommentsVoteClick(-1, comment.comments_id)
                        }
                      >
                        vote down
                      </button>
                    </div>
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
    this.setState(prevState => {
      return {
        voteChange: prevState.voteChange + numberOfVotes
      };
    });
  };

  handleCommentsVoteClick = (numberOfVotes, comments_id) => {
    updateCommentsVotes(numberOfVotes, comments_id);
    this.setState(state => {
      // return { voteChange: state.voteChange + numberOfVotes };
      let updatedCommentsState = state.allComments;
      updatedCommentsState.map(comment => {
        if (comment.comments_id === comments_id) {
          console.log("i found the comment");
          comment.votes = comment.votes + numberOfVotes;
        }
      });
      return { allComments: updatedCommentsState };
    });
  };

  componentDidMount = () => {
    Promise.all([
      fetchSingleArticle(this.props.article_id),
      fetchAllCommentsByArticleId(this.props.article_id)
    ]).then(([individualArticle, allComments]) => {
      this.setState({ individualArticle, allComments });
    });
  };
  componentDidUpdate() {}
}

export default SingleArticleView;

// handleVoteClick = numberOfVotes => {
//   updateArticleVotes(numberOfVotes, this.props.article_id);
//   this.setState(state => {
//     let updatedIndividualArticle = state.individualArticle;
//     updatedIndividualArticle.votes =
//       updatedIndividualArticle.votes + numberOfVotes;
//     return {
//       individualArticle: updatedIndividualArticle,
//       voteChange: numberOfVotes
//     };
//   });
// };

// handleCommentsVoteClick = (numberOfVotes, comments_id) => {
//   updateCommentsVotes(numberOfVotes, comments_id);
//   this.setState(prevState => {
//     return {
//       CommentVoteChange: prevState.CommentVoteChange + numberOfVotes
//     };
//   });
// };
