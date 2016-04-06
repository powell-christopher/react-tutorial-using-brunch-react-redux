import React from 'react';

/**
  WelcomeMessage
  Static React Component providing a welcome message
**/
export default class WelcomeMessage extends React.Component {
  render() {
    return (
      <div className="welcomeMessage">
        <h2>Welcome!</h2>
        <div>Main technologies used:</div>
        <ul>
          <li><a href="http://brunch.io/">Brunch</a></li>
          <li><a href="https://facebook.github.io/react/">React</a></li>
          <li><a href="http://redux.js.org">Redux</a></li>
        </ul>
      </div>
    );
  }
};