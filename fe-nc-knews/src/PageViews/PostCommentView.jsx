import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { postComment } from "../Components/apis";

class PostCommentView extends Component {
  state = {
    // username: this.props.userName,
    body: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = this.state;
    console.log("this is the rops", this.props);
    newComment.username = this.props.userName;
    console.log("this is the new comment", newComment);
    postComment(newComment, this.props.article_id).then(res => {
      navigate(`/articles/${this.props.article_id}`);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostCommentView;
