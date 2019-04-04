import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { promises } from "fs";

class PostArticleView extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    username: this.props.userName
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
    console.log(this.state.title);
  };

  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
    console.log(this.state.topic);
  };

  handleBodyChange = event => {
    this.setState({ body: event.target.value });
    console.log(this.state.body);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("this is the state", this.state);
    const newArticle = this.state;
    axios
      .post(`https://longlandncknews.herokuapp.com/api/articles`, newArticle)
      .then(res => {
        navigate(`/users/${this.props.userName}`);
        console.log("this.is the res", res);
        console.log("this is the res.data", res.data);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleTitleChange}
          />
        </label>
        <label>
          Topic:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleTopicChange}
          />
        </label>
        <label>
          Body:
          <input
            type="textarea"
            value={this.state.value}
            onChange={this.handleBodyChange}
          />
        </label>
        <input type="submit" value="post article" />
      </form>
    );
  }
}
export default PostArticleView;
