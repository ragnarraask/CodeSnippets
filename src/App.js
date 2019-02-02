import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'

import './App.css'

import Snippet from './Snippet'
import Footer from './Footer'
import Header from './Header'
import fuzzySearch from  'fuzzysearch'


const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
})

class App extends Component {
  constructor() {
    super()

    this.state = {
      snippets: [],
      filteredSnippets: [],
      isLoading: true
    }

    this.filterSnippets = event => {
      const q = event.target.value.toLowerCase()

      const filteredSnippets = this.state.snippets.filter(snippet => fuzzySearch(q, snippet.name.toLowerCase())

      )
      console.log(filteredSnippets)
      this.setState({ filteredSnippets })
    }
  }
  componentDidMount() {
    fetch(
      'http://192.168.1.124:8080/api/collections/get/snippets?token=84588594ba67fc351bd6d464bb6b3a'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ snippets: data.entries,  filteredSnippets: data.entries.reverse(), isLoading: false })

      })
  }

  render(props) {
    const { filteredSnippets, isLoading } = this.state
    return (
      <React.Fragment>
        <CssBaseline />
        <Header filterSnippets={this.filterSnippets} />
        <main className="main">
          <Snippet filteredSnippets={filteredSnippets} isLoading={isLoading} />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)
