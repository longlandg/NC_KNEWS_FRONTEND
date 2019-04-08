import React, { Component } from "react";
import Axios from "axios";
import { Link } from "@reach/router";
import SortBySelector from "../Components/SortBySelector";
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
        <SortBySelector
          allArticles={this.state.allArticles}
          changeSorting={this.changeSorting}
        />

        {this.state.allArticles && (
          <div className="articlecard">
            <AllArticles allArticles={this.state.allArticles} />
          </div>
        )}
      </div>
    );
  }
  componentDidMount = () => {
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
