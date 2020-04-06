import React, { Component } from 'react';
import $ from 'jquery';

var myArray;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json&tags=trees`,
      (json) => {
           myArray = json.items;
           this.setState({isLoaded:true, data:myArray});
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {myArray.map(item => (
            <li key={item.title}>
              {item.title}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
