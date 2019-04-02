import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Link } from '@reach/router';




import HomeView from './PageViews/HomeView';
import SingleArticleView from './PageViews/SingleArticleView';
import PostCommentView from './PageViews/PostCommentView';

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
                <PostCommentView article_id={this.state.article_id} userName={this.state.userName} path='/articles/:article_id/postcomment'/>
                </Router>
           </div>
    )
  }
}

const Nav = () => {
  return <nav>
    <Link to='/'><button>Home</button></Link>
    <Link to='/articles/:article_id/postcomment'><button>posty</button></Link>
   
   
  </nav>
}

export default App;
