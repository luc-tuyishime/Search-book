import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => <Route
            key={route.name}
            exact
            path={route.path}
            protected={route.protected}
            render={
              props => {
                document.title = route.name
                return (
                  <route.component
                    location={props.location}
                    history={props.history}
                    match={props.match}
                  />
                )
              }
            }
          />
          )
        }
      </Switch>
    </Router>
  );
}

export default App;
