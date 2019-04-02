import React, { Component } from 'react';
import Axios from 'axios';


class SingleArticleView extends Component {
    state = { 
    individualArticle: null,
    }


render () {
  return (<div>
      <p>this is a new page</p>
           {this.state.individualArticle && <div>
            <h1>{this.state.individualArticle.title}</h1>
            <p>Posted:{this.state.individualArticle.created_at}</p>
            <p>Topic:{this.state.individualArticle.topic}  Votes:{this.state.individualArticle.votes}</p>
            <p>{this.state.individualArticle.body}</p>
             <h4>hi there there is a state, {console.log(this.state.individualArticle)}</h4>


      </div>}
      <p>{console.log('im a prop, prop prop prop', this.props.article_id)}</p>
</div>
    )
}




componentDidMount = () => {
    this.fetchSingleArticle()
    console.log('hello george')
  }

  fetchSingleArticle = () => {
    Axios.get(`https://longlandncknews.herokuapp.com/api/articles/${this.props.article_id}`)
    .then(res => 
      this.setState({individualArticle: res.data.article})
    )}

  }


export default SingleArticleView;