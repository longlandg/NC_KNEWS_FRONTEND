import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { postTopic } from "../Components/apis";

class CreateTopicView extends Component {
  state = {
    slug: "",
    description: ""
  };

  handleTopicChange = event => {
    this.setState({ slug: event.target.value });
  };

  handleTitleChange = event => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newTopic = this.state;

    postTopic(newTopic).then(res => {
      console.log("hello", newTopic);
      console.log(this.props);
      navigate(`/article/createquery/${this.state.slug}`);
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

        <input type="submit" value="create topic" />
      </form>
    );
  }
}
export default CreateTopicView;
