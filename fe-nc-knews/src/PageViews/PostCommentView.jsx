import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class PostCommentView extends Component {
    state = { 
     
    }


    render() {
        console.log(this.state.userName)
        return (<div>
            <p>hello there</p>
            <p>hello there</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Comment:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit comment" />
          </form>
          </div> );
      }
    
      componentDidMount = () => {

      }

// componentDidMount = () => {
//     this.fetchSingleArticle();
//     this.fetchAllCommentsByArticleId();
 
  
//     }
    

  postComment = () => {
    Axios.post(`https://longlandncknews.herokuapp.com/api/articles/${this.props.article_id}/comments`)
    .then(res => 
      this.setState({individualArticle: res.data.article})
    )}


    }


export default PostCommentView;