import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import './App.css'

import Snippet from './Snippet'
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';


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
  },
})

class App extends Component {
  render(props) {
    const { classes } = this.props
    console.log(props)
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Hero />
        <main className="main">
          <Snippet classes={classes} />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)
