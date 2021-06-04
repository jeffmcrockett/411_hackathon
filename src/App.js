import { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfStories: []
    }
  }

  componentDidMount() {
    axios.get(`http://hn.algolia.com/api/v1/search?`)
      .then(res => {
        const arrayOfStories = res.data.hits
        this.setState({ arrayOfStories });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <form>
            <input type="text" id="searchTerm"></input>
            <input type="submit" value="submit"></input>
          </form> 
          <ol>
            {this.state.arrayOfStories.map((story, index) => {
              return(
              <li key={index}>{story.title}</li>
                )
            })}
          </ol>
        </header>
      </div>
    )
  };
}

export default App;
