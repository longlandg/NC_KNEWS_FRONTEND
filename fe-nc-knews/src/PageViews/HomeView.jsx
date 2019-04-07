import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";
import AllArticles from "../Components/AllArticles";
import { fetchAllArticles } from "../Components/apis";

class HomeView extends Component {
  state = {
    allArticles: null,
    sortBy: "",
    filterBy: "",
    topic: ""
  };

  render() {
    return (
      <div className="HomeView">
        <select
          className="sortBySelector"
          class="browser-default custom-select"
          onClick={this.changeSorting}
        >
          <option selected>Sort articles by</option>
          <option value="sort_by=created_at&&order=desc">
            date descending
          </option>
          <option value="sort_by=created_at&&order=asc">date ascending</option>
          <option value="sort_by=comment_count&&order=desc">
            comment count descending
          </option>
          <option value="sort_by=comment_count&&order=asc">
            comment count ascending
          </option>
          <option value="sort_by=votes&&order=desc">
            number of votes descending
          </option>
          <option value="sort_by=votes&&order=asc">
            number of votes ascending
          </option>
        </select>

        {this.state.allArticles && (
          <div className="articlecard">
            <AllArticles allArticles={this.state.allArticles} />
          </div>
        )}
      </div>
    );
  }
  componentDidMount = () => {
    console.log("this.props.path", this.props.path);
    let filterby = "";
    if (this.props.topic === undefined) {
      filterby = "";
    } else if (this.props.topic) {
      filterby = `topic=${this.props.topic}&&`;
    }
    // console.log("this.props.topic", this.props.topic);
    // if (this.props.topic !== this.state.filterBy) {
    //   filterby = `topic=${this.props.topic}&&`;
    // }
    // let filterby = "";
    // if (this.props.topic === undefined) {
    //   filterby = "";
    // } else {
    //   filterby = `topic=${this.props.topic}&&`;
    // }

    fetchAllArticles(filterby, this.state.sortBy).then(articles => {
      this.setState({ allArticles: articles });
      console.log(this.state.filterBy);
    });
  };

  changeSorting = event => {
    event.preventDefault();
    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

  homeFilterReset = event => {
    event.preventDefault();
    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (
      this.state.sortBy !== prevState.sortBy ||
      prevProps.path !== this.props.path
    ) {
      fetchAllArticles(this.props.topic, this.state.sortBy).then(articles => {
        this.setState({ allArticles: articles });
      });
    }
  };
}

export default HomeView;
