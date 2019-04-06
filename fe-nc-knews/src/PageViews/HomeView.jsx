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
        <label>sort by</label>
        <select className="selector" onClick={this.changeSorting}>
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
          <div>
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
    if (prevProps === this.props) {
      console.log("this is the prevprops", prevProps);
      console.log("this is the this.props", this.props);
    } //need to compare the chanege here then re implements it here

    // if (this.props.topic !== '') {
    //   this.setState({ filterBy: this.props.topic });
    // }
    //   console.log(this.props.topic);
    //   const filterby = `topic=${this.props.topic}&&`;
    if (this.state.sortBy !== prevState.sortBy) {
      fetchAllArticles(this.props.topic, this.state.sortBy).then(articles => {
        this.setState({ allArticles: articles });
      });
    }
  };
}

export default HomeView;
