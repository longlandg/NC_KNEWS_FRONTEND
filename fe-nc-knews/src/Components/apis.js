import Axios from "axios";

export const fetchAllArticles = async sortBy => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles?${sortBy}`
  );
  console.log("hello im in the function", data.articles);
  return data.articles;
};

export const fetchUserInfo = async username => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/users/${username}`
  );
  // console.log("hello im in the function", data.user);
  return data.user;
};

export const updateArticleVotes = (direction, article_id) => {
  return Axios.patch(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: direction }
  );
};

export const fetchSingleArticle = async article_id => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`
  );
  console.log("hello im in the fetchsinglearticle function", data);
  return data;
};

export const fetchAllCommentsByArticleId = async article_id => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}/comments`
  );
  console.log("hello im in the fetchAllCommentsByArticleId function", data);
  return data;
};

// fetchAllCommentsByArticleId = () => {
//   Axios.get(
//     `https://longlandncknews.herokuapp.com/api/articles/${
//       this.props.article_id
//     }/comments`
//   ).then(res => this.setState({ allComments: res.data.comments }));
// };
// export const postNewComment

// fetchAllArticles = () => {
//   Axios.get(
//     `https://longlandncknews.herokuapp.com/api/articles?${this.state.sortBy}`
//   ).then(res => {
//     this.setState({ allArticles: res.data.articles });
//   });
// };

// userInfo = () => {
//   return Axios.get(
//     `https://longlandncknews.herokuapp.com/api/users/${this.props.userName}`
//   ).then(res => {
//     return res.data.user;
//   });
// };
// userArticles = () => {
//   return Axios.get(
//     `https://longlandncknews.herokuapp.com/api/articles?author=${
//       this.props.userName
//     }`
//   ).then(res => {
//     console.log(res.data);
//     return res.data;
//   });
// };
// }

export default { fetchAllArticles, fetchUserInfo, fetchSingleArticle };
