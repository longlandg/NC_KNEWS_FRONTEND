import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GetAllArticles from './Components/Articles';
import { Router } from '@reach/router';
import { timingSafeEqual } from 'crypto';

class App extends Component {
  state = { allArticles : null,
    sortBy : '',
    
  

  }

 
  render() {
    return (
      <div className="App">
      <h1>NC Knews...</h1>
      <label>sort by</label>
      <select className="selector" onClick={this.changeSorting}>
  <option value="sort_by=created_at&&order=desc" >date descending</option>
  <option value="sort_by=created_at&&order=asc">date ascending</option>
  <option value="sort_by=comment_count&&order=desc" >comment count descending</option>
  <option value="sort_by=comment_count&&order=asc">comment count ascending</option>
  <option value="sort_by=votes&&order=desc" >number of votes descending</option>
  <option value="sort_by=votes&&order=asc">number of votes ascending</option>
  </select>
      {this.state.allArticles && <div>
                <GetAllArticles allArticles={this.state.allArticles}/>
      </div>}
      </div>
    )
  }
    

  changeSorting = (event) => {
    event.preventDefault()
    if (event.target.value !== this.state.sortBy){
      this.setState({sortBy: event.target.value})
    }
  }

  componentDidMount = () => {
    this.fetchAllArticles();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.sortBy !== prevState.sortBy) {
      this.fetchAllArticles();
     
    }
    }
  

 

  fetchAllArticles = () => {
    Axios.get(`https://longlandncknews.herokuapp.com/api/articles?${this.state.sortBy}`)
    .then(res => {
      this.setState({allArticles: res.data.articles})
       })

  }
 
}



export default App;
