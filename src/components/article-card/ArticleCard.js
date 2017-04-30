import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticleCard = props => (
  <div
    id="article-card"
    className="w3-margin-top w3-left"
    title={props.title}
  >
    <div className="w3-card-2 w3-hover-shadow">
      <div id="card-thumbnail">
        <Link to="/">
          <img
            alt={props.title}
            src={props.mediaUrl}
            width="100%"
            height="120px"
          />
        </Link>
      </div>
      <div className="w3-container w3-padding-bottom">
        <div id="card-title-container">
          <div id="card-title">
            <h3>{props.title}</h3>
          </div>
          <div id="card-summary">
            <h4>{props.summary}</h4>
          </div>
        </div>
        <div id="card-stats">
          <h4>
            <div className="w3-left">{props.likesCount}</div>
            <div className="w3-right">
              {props.createdAt}</div>
          </h4>
        </div>
      </div>
    </div>
  </div>
);

ArticleCard.PropTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  mediaUrl: PropTypes.string,
  likesCount: PropTypes.string,
  createdAt: PropTypes.string,
};

export default ArticleCard;
