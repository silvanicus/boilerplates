import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';

test('Testing the first div', () => {
  const container = document.createElement('div');
  ReactDOM.render(<List items={[]} />, container);
  console.log(container.innerHTML);
  expect(container.innerHTML).toBe('no items');
});
