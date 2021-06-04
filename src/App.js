import { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListArticles from './component/ListArticles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfStories: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    axios.get('http://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=400')
      .then(res => {
        const arrayOfStories = res.data.hits
        this.setState({ arrayOfStories });
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  filterSearch(term) {
    return (item) => {
      return(
        item.title.toLowerCase().includes(term.toLowerCase())
        ||
        item.author.toLowerCase().includes(term.toLowerCase())
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <form>
            <input
              name="searchTerm"
              type="text"
              value={this.state.searchTerm}
              onChange={ (e) => {this.handleChange(e)} }
              placeholder="Search by Title or Author"
            ></input>
          </form>
        </header>
        <body>
          { this.state.searchTerm ?
            <ListArticles
              article={this.state.arrayOfStories.filter(this.filterSearch(this.state.searchTerm))}
            /> :
            <ListArticles article={this.state.arrayOfStories}/>
          }

        </body>
      </div>
    )
  };
}

export default App;
