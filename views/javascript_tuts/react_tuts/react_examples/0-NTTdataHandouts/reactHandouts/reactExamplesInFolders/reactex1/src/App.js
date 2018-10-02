import React from 'react';
import ChapterOutline from './ChapterOutline';
import TopicsList from './TopicsList';

    var chapter = {
      order: "5", 
      title: "React Properties (props)", 
      topics: [
        {title: "What are props"},
        {title: "Diferent syntax"},
        {title: "Immutable"},
        {title: "One way binding"},
        {title: "Type checking"}
      ]
    };

    const App = () => 
      React.createElement('div', null, [
        React.createElement('h1', null, 'React course'),
        React.createElement(ChapterOutline, chapter),
        React.createElement(TopicsList, chapter)
      ]);

export default App;
