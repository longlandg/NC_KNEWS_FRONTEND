import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Articles from './Components/Articles';
import { Router } from '@reach/router';

class App extends Component {
  state = { allArticles : null,
  }

  render() {
    return (
      <div className="App">
      <h1>NC Knews...</h1>

      {this.state.allArticles && <div>
        <Articles allArticles={this.state.allArticles}/>
      </div>}
      </div>
    )
  }
    
  componentDidMount = () => {
    this.fetchArticles();
  }

  fetchArticles = () => {
    Axios.get('https://longlandncknews.herokuapp.com/api/articles')
    .then(res => [
      this.setState({allArticles: res.data.articles})
    ])
    console.log(this.state)
  }
}



export default App;
