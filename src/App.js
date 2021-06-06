import { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListArticles from './component/ListArticles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfStories: [],
      searchTerm: "",
      url: ""
    }
  }
  
  componentDidUpdate() {
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.url}`)
    .then(res => {
      const arrayOfStories = res.data.hits
      this.setState({ arrayOfStories });
    })
  }
  
  handleChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <form>
            <input
              name="url"
              type="text"
              value={this.state.url}
              onChange={ (e) => {this.handleChange(e)} }
              placeholder="Search by Title or Author"
            ></input>
          </form>
        </header>
        <body>
          <ListArticles article={this.state.arrayOfStories}/>
        </body>
      </div>
    )
  };
}

export default App;
