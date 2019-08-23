import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Profile from './components/Profile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Profile>
        <App />
      </Profile>
      ,div);
  ReactDOM.unmountComponentAtNode(div);
});
