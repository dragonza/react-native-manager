/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/login-form';

export default class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyA-iWk4yOenqIP9fX9CRGmL8enaTgw0pnY',
            authDomain: 'managers-79225.firebaseapp.com',
            databaseURL: 'https://managers-79225.firebaseio.com',
            projectId: 'managers-79225',
            storageBucket: '',
            messagingSenderId: '186023741731'
        };

        firebase.initializeApp(config);
    }


    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
    }
}
