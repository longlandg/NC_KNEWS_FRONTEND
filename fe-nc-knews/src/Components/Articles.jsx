import React, { Component } from 'react';
import Axios from 'axios';

class GetAllArticles extends Component {
  state = { 
    article_id: null,
    individualArticle: null,
   

  }
  // return <li onClick={() => console.log('hi)')}>    
  render () {

        return <ul>
      {this.props.allArticles.map(article => {
        const {title, topic, created_at, author,comment_count, votes, article_id} = article;
        return <li >     
           <h4 >Title: {title}  Topic: {topic}  Date Posted: {created_at}</h4>
      <h5>Author: {author} Number of Comments: {comment_count} Votes: {votes}</h5>
      <button onClick={clicker} value={article_id}>Read This Article</button>
          </li>
     })
    }
      </ul>
      }
      
      
    }
    const clicker = (e) => {
      e.preventDefault();
      console.log('The link was clicked.', e.target.value);
   
    

          Axios.get(`https://longlandncknews.herokuapp.com/api/articles/${e.target.value}`)
          .then(res => {
            let individualarticle = res.data
            console.log(individualarticle)
            // this.setState({blockList: res.data.blocks})
          })
        }
      

export default GetAllArticles;



// const clicker = (e) => {
//   e.preventDefault();
//   console.log('The link was clicked.', e.target.value);
//   fetchArticle(e.target.Value)
// }
//     const fetcharticle = (selectedId) => {
//       Axios.get(`https://longlandncknews.herokuapp.com/api/articles/${selectedId}`)
//       .then(res => {
//         let individualarticle = res.data
//         console.log(individualarticle)
//         // this.setState({blockList: res.data.blocks})
//       })
//     }