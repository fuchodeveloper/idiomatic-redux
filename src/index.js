import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import { fetchTodos } from './api';

fetchTodos('all').then(todos => {
  console.group('TODOS');
  console.log('%c', 'color: blue', todos);
  console.groupEnd('TODOS');
}
);

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
