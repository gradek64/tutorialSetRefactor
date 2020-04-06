import React from 'react';

    const ChapterOutline = ({order, title}) => 
      React.createElement('div', null, [
        React.createElement('p', {key: order}, "Chapter: " + order),
        React.createElement('p', {key: title}, "Title: " + title)
      ]);

export default ChapterOutline;
