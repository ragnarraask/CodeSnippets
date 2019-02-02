import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'


import Snippet from './Snippet'
import Footer from './Footer'
import Header from './Header'


class App extends Component {
  render(props) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        
        <main className="main">
          <Snippet />
        </main>

        <Footer />
      </React.Fragment>
    )
  }
}

export default App
