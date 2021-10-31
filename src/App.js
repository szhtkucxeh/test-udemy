import React from "react";
import './App.css';
import Login from './Login';
import Classes from './Classes';
import detailsOfTheLesson from './detailsOfTheLesson';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import { Provider} from 'redux';


function App() {
  return (

    <Router>
      <Switch>
        
        <Route exact path="/" component={Login} />
         <Route path="/detailsOfTheLesson" component={detailsOfTheLesson} /> 
        <Route path="/Classes" component={Classes} />
   

      </Switch>
    </Router>

  );
}

export default App;

