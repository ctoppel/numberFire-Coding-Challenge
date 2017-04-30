import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions';
import ArticlesList from '../articles-list/ArticlesList';

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  // displayed on page
  render() {
    return (
      <div id="articles">
        <h1>Articles Lists</h1>

        <ArticlesList articles={this.props.articles} />
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

export default connect(mapStateToProps, { fetchArticles })(Articles);
