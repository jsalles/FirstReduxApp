import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';

import { reducer } from './src/redux/ListRedux';
const store = createStore(reducer);

import App from './src/App';
const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('TestingRedux', () => AppWithStore);