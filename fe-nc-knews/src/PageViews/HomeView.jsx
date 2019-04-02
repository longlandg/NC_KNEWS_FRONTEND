import React, { Component } from 'react';
import Axios from 'axios';

import GetAllArticles from '../Components/GetAllArticles';


class HomeView extends Component {
    state = { 
        allArticles : null,
        sortBy : '',
    }


render () {
  return(
    <div className="HomeView">
 
          
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



componentDidMount = () => {
    this.fetchAllArticles()
  }

  fetchAllArticles = () => {
    Axios.get(`https://longlandncknews.herokuapp.com/api/articles?${this.state.sortBy}`)
    .then(res => {
      this.setState({allArticles: res.data.articles})
       })

  }

  changeSorting = (event) => {
    event.preventDefault()
    console.log('hello')
    if (event.target.value !== this.state.sortBy){
      this.setState({sortBy: event.target.value})
    }
  }

  componentDidUpdate = (_, prevState) => {
    if (this.state.sortBy !== prevState.sortBy) {
      this.fetchAllArticles();
     
    }
    }
}

export default HomeView;