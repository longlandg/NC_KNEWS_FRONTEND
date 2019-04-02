import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Link } from '@reach/router';




import HomeView from './PageViews/HomeView';
import SingleArticleView from './PageViews/SingleArticleView';

class App extends Component {
  state = {
    userLoggedIn: true,
    userName: 'jessjelly'
   }

 
  render() {
    return (
      <div className="App">
      <h1>NC Knews...</h1>  
      <Nav/>    
        <Router>
                <HomeView path='/'/>
                <SingleArticleView path='/articles/:article_id'/>
                </Router>
           </div>
    )
  }
}

const Nav = () => {
  return <nav>
    <Link to='/'><button>Home</button></Link>
   
   
  </nav>
}

export default App;
