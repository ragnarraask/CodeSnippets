import React from 'react';
import { Route,Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddSnippet from './AddSnippet'
import Tag from './Tag';
import * as serviceWorker from './serviceWorker';



const routing = (
    <Router>
       <Switch>
        <Route path="/addsnippet" component={AddSnippet} />
        <Route path="/tag" component={Tag} />
        <Route path="/" component={App} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
