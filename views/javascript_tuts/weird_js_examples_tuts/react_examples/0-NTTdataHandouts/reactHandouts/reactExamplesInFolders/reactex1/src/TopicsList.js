import React from 'react';
import Topics from './Topics';

    const TopicsList = ({topics}) => 
      React.createElement('ul', null, topics.map((topics, i) => {
        return React.createElement('li', {key: i}, [
          React.createElement(Topics, topics)
        ])
      }));

export default TopicsList;
