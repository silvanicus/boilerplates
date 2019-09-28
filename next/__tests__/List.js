import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/ui/List';

test('Testing the first div', () => {
  const container = document.createElement('div');
  ReactDOM.render(<List items={[]} />, container);
  expect(container.innerHTML).toBe('no items');
});
