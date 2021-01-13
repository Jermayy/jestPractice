import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Todo from './todo';

test('Todo List', () => {
  const root = document.createElement('div');

  ReactDOM.render(<Todo />, root);

  expect(root.querySelector('h1').textContent).toBe('TODOs');
  expect(root.querySelector('label').textContent).toBe(
    'What needs to be done?',
  );
  expect(root.querySelector('button').textContent).toBe('Add #1');
});
