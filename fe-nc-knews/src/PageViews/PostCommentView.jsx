import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

// class PostCommentView extends Component {
//     state = {  value: '',
class PostCommentView extends Component {
  state = {
    username: this.props.userName,
    body: ""
  };

  handleChange = event => {
    // this.setState({comment: event.target.value});
    this.setState({ body: event.target.value });
    console.log(this.state);
    console.log(this.props.userName);
    console.log(this.props.article_id);
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = this.state;
    console.log("this is the state", this.state);
    console.log("this is the newComment", newComment);
    console.log("this is the id", this.props.article_id);
    axios
      .post(
        `https://longlandncknews.herokuapp.com/api/articles/${
          this.props.article_id
        }/comments`,
        newComment
      )
      .then(
        res => {
          console.log("this.is the res", res);
          console.log("this is the res.data", res.data);
        }
        // console.log(res.body)
        // res.this.state
      );
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

// const postComment = () => {
// Axios.post(`https://longlandncknews.herokuapp.com/api/articles/${this.props.article_id}/comments`)
// .then(res =>
//   this.state
// )}

export default PostCommentView;
