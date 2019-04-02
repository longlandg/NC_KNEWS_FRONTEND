import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';




import HomeView from './PageViews/HomeView';
import SingleArticleView from './PageViews/SingleArticleView';

class App extends Component {
  state = { }

 
  render() {
    return (
      <div className="App">
      <h1>NC Knews...</h1>      
        <Router>
                <HomeView path='/'/>
                <SingleArticleView path='/articles/:article_id'/>
                </Router>
           </div>
    )
  }
}
export default App;
