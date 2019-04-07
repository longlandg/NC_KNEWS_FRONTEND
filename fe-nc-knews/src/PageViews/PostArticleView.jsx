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
      title: this.state.title,
      body: this.state.body,
      topic: this.state.topic,
      username: this.props.userName
    };

    if (
      this.state.AllTopics.filter(slug => slug.slug === this.state.topic)
        .length === 0
    ) {
      this.setState({ TopicDoesExist: false });
      console.log("need a topic");
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
      <div className="articleinform">
        <form
          onSubmit={this.handleSubmit}
          class="text-center border border-light p-5"
        >
          <input
            type="text"
            id="defaultContactFormName"
            class="form-control mb-4"
            placeholder="Article title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            required
          />
          {this.props.newTopic ? (
            <p>Topic: {this.props.newTopic}</p>
          ) : (
            <input
              type="text"
              id="defaultContactFormEmail"
              class="form-control mb-4"
              placeholder="Article topic"
              value={this.state.newTopic}
              onChange={this.handleTopicChange}
              required
            />
          )}

          <div class="form-group">
            <textarea
              class="form-control rounded-0"
              id="exampleFormControlTextarea2"
              rows="10"
              placeholder="Write your article here"
              value={this.state.value}
              onChange={this.handleBodyChange}
              required
            />
          </div>
          <button class="btn btn-info btn-block" type="submit">
            Send
          </button>
          {!this.state.TopicDoesExist && (
            <p>
              This topic doesnot exist you need to{" "}
              <Link to={`/topics/createtopic`}>
                <hp className="articledetails">create new topic</hp>
              </Link>
            </p>
          )}
        </form>
      </div>

      /* <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
              required
            />
          </label>

          {this.props.newTopic ? (
            <p>Topic: {this.props.newTopic}</p>
          ) : (
            <label>
              Topic:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleTopicChange}
                required
              />
            </label>
          )}

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
        </form> */
    );
  }
}

export default PostArticleView;
