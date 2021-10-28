// import logo from './logo.svg';
import React from "react";
import './App.css';
import Login from './Login';
import Classes from './Classes';
// import ListOfLessons from './ListOfLessons';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import { Provider} from 'redux';
// import { from } from "webpack-sources/lib/CompatSource";

function App() {
  return (

    <Router>
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/" component={Login} />
        {/* <Route path="/ListOfLessons" component={ListOfLessons} /> */}
        <Route path="/Classes" component={Classes} />
        {/* <Route  component={Notfound} /> */}

      </Switch>
    </Router>

  );
}

export default App;

