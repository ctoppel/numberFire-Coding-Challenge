import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../article-card/ArticleCard';
import {
  convertTimeToCardFormat,
  convertLikesToCardFormat,
} from '../../helperFunctions';

export default function ArticlesList({ articles }) {
  const emptyMessage = (
    <p>There are no articles matching the selected topics.</p>
  );
  const noPic = '/assets/img/img_not_available.png';
  const articlesList = (
    articles.map(article => (
      <ArticleCard
        key={article.id}
        title={article.title}
        summary={article.summary}
        createdAt={convertTimeToCardFormat(article.createdAt)}
        likesCount={convertLikesToCardFormat(article.likesCount)}
        displayName={article.attribution.displayName}
        mediaUrl={article.media.length ? article.media[0].url : noPic}
      />
    ))
  );

  return (
    <div>
      {articles.length === 0 ? emptyMessage : articlesList}
    </div>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
