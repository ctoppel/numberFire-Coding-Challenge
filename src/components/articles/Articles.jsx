import React, { Component } from 'react';
import ArticleCard from '../article-card/ArticleCard.jsx';
import {
  convertTimeToCardFormat,
  convertLikesToCardFormat,
  crossBrowserFetch,
} from '../../helperFunctions';

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articleCards: [],
    };
  }

  componentDidMount() {
    fetch('https://medcircle-coding-project.s3.amazonaws.com/api/articles.json')
      .then(res => res.json())
      .then(({ data }) => {
        const articleCards = [];
        const noPic = '/assets/img/img_not_available.png';
        data.forEach(article => articleCards.push(
          <ArticleCard
            key={article.id}
            title={article.title}
            summary={article.summary}
            createdAt={convertTimeToCardFormat(article.createdAt)}
            likesCount={convertLikesToCardFormat(article.likesCount)}
            displayName={article.attribution.displayName}
            mediaUrl={article.media.length ? article.media[0].url : noPic}
          />));
        this.setState({ articleCards });
      });
  }

  // displayed on page
  render() {
    return (
      <div id="articles">
        <main role="main" id="articles" title="MedCirle Articles">
          <div className="w3-row card-container">
            {this.state.articleCards}
          </div>
        </main>
      </div>
    );
  }
}

export default Articles;
