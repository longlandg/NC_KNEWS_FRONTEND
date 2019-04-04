import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { postArticle } from "../Components/apis";

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

    const newArticle = this.state;
    newArticle.username = this.props.userName;
    postArticle(newArticle).then(res => {
      navigate(`/users/${this.props.userName}`);
    });
  };

  //   axios
  //     .post(`https://longlandncknews.herokuapp.com/api/articles`, newArticle)
  //     .then(res => {
  //       navigate(`/users/${this.props.userName}`);
  //     });

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
