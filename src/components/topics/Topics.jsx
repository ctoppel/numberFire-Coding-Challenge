import React, { Component } from 'react';
import ArticleCard from '../article-card/ArticleCard.jsx';
import {
  convertTimeToCardFormat,
  convertLikesToCardFormat,
  crossBrowserFetch,
} from '../../helperFunctions';

class Topics extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    // use redux action / thunk returns function instead of data
    fetch('https://medcircle-coding-project.s3.amazonaws.com/api/topics.json')
      .then(res => res.json())
      .then(({ data }) => {
        const topics = [];
        data.forEach(topic => topics.push(
          <div key={topic.id}>
            <input
              type="checkbox"
              name="topic"
              value={topic.name}
            />
            {topic.name}
          </div>,
        ));
        this.setState({ topics });
      });
  }

  // displayed on page
  render() {
    return (
      <div id="topics">
        <form>
          {this.state.topics}
        </form>
      </div>
    );
  }
}

export default Topics;
