import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';

import App from './components/app';
import '../assets/stylesheets/application.scss';
import vehiclesReducer from './reducers/vehicles_reducer';

// prompt("What is your garage?") ||
const garageName = `garage${Math.floor(10 + (Math.random() * 90))}`;

const initialState = {
  garage: garageName,
  vehicles: []
};


const reducers = combineReducers({
  // key: reducer
  garage: (state = null, action) => state,
  vehicles: vehiclesReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:vehicles" component={App} />
        <Redirect from="/" to="/vehicles" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
