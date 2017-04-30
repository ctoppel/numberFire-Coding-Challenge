import { crossBrowserFetch } from './helperFunctions';

export const SET_ARTICLES = 'SET_ARTICLES';

export function setArticles(articles) {
  return {
    type: SET_ARTICLES,
    articles,
  };
}

export function fetchArticles() {
  return (dispatch) => {
    crossBrowserFetch('https://medcircle-coding-project.s3.amazonaws.com/api/articles.json')
      .then(res => dispatch(setArticles(res.data)));
  };
}
