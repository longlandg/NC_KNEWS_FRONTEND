import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

// class PostCommentView extends Component {
//     state = {  value: '',
class PostCommentView extends Component {
  state = {
    username: this.props.userName,
    body: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = this.state;
    axios
      .post(
        `https://longlandncknews.herokuapp.com/api/articles/${
          this.props.article_id
        }/comments`,
        newComment
      )
      .then(res => {
        navigate(`/articles/${this.props.article_id}`);
        console.log("this.is the res", res);
        console.log("this is the res.data", res.data);
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
