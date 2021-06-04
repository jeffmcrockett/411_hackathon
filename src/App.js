import { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListArticles from './component/ListArticles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfStories: []
    }
  }

  componentDidMount() {
    axios.get('http://hn.algolia.com/api/v1/search?query=javascript&tags=story')
      .then(res => {
        const arrayOfStories = res.data.hits
        this.setState({ arrayOfStories });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <ListArticles article={this.state.arrayOfStories}/>
        </header>
      </div>
    )
  };
}

export default App;
