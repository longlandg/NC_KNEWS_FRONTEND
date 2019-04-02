import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class GetSingleArticle extends Component {
  state = { 
    article_id: null,
    individualArticle: null,
   

  }
 
  render () {
      return(
          <div>
              <h1>{props.individualArticle.title}</h1>
          </div>
      )
      }
      
      
    //   clicker = (e) => {
    //     e.preventDefault();
    //     console.log('The link was clicked.', e.target.value);
        
        
        
        Axios.get(`https://longlandncknews.herokuapp.com/api/articles/${e.target.value}`)
        .then(res => {
          let individualarticle = res.data
          console.log(individualarticle)
          this.setState({individualArticle: res.data.article}, () => console.log(this.state))
        })
      }
    }
      

export default GetSingleArticle;
