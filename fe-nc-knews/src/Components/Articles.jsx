import React, { Component } from 'react';



 

 


const Articles = props => {
  
    return <ul>
  {props.allArticles.map(article => {
    const {title, topic, created_at, author,comment_count, votes} = article;
    return <li>
       <h4>Title: {title}  Topic: {topic}  Date Posted: {created_at}</h4>
  <h5>Author: {author} Number of Comments: {comment_count} Votes: {votes}</h5>
    </li>
 })
  }
  </ul>
  }

export default Articles;
