import React, { Component } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { postArticle, fetchAllTopics } from "../Components/apis";

class PostArticleView extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    AllTopics: "",
    TopicDoesExist: true
  };
  componentDidMount = () => {
    fetchAllTopics().then(topics => {
      this.setState({ AllTopics: topics });
      console.log("hello im the topics", topics);
    });
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

    const newArticle = {
      title: this.props.userName,
      body: this.state.body,
      topic: this.state.topic
    };

    if (
      this.state.AllTopics.filter(slug => slug.slug === this.state.topic)
        .length === 0
    ) {
      this.setState({ TopicDoesExist: false });
      console.log("need a topic bro");
    } else {
      postArticle(newArticle).then(res => {
        this.setState({ TopicDoesExist: true });
        navigate(`/users/${this.props.userName}`);
      });
    }
  };
  isThereTopic = () => {
    if (this.state.TopicDoesExist === true) return "you need a new topic";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleTitleChange}
              required
            />
          </label>
          <label>
            Topic:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleTopicChange}
              required
            />
          </label>

          <label>
            {" "}
            Body:
            <textarea
              value={this.state.value}
              onChange={this.handleBodyChange}
              required
            />
          </label>
          <input type="submit" value="post article" />
        </form>
        {/* <p> {isThereTopic}</p> */}
      </div>
    );
  }
}

export default PostArticleView;
