import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

class PostArticleView extends Component {
  state = {
    title: "",
    body: "",
    topic: ""
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };

  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("this is the state", this.state);
    const newArticle = this.state;
    newArticle.username = this.props.userName;
    console.log(newArticle);
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
          {" "}
          Body:
          <textarea value={this.state.value} onChange={this.handleBodyChange} />
        </label>
        <input type="submit" value="post article" />
      </form>
    );
  }
}
export default PostArticleView;
