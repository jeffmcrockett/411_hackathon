import { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfUsers: []
    }
  }

  componentDidMount() {
    axios.get('http://hn.algolia.com/api/v1/items/:id')
      .then(res => {
        const arrayOfStories = res.data
        this.setState({ arrayOfStories });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <ol>
            {this.state.arrayOfStories.map((story, index) => {
              return(
              <li key={index}>{story.}</li>
                )
            })}
          </ol>
        </header>
      </div>
    )
  };
}

export default App;
