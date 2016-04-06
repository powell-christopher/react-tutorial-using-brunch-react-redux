/**
  Initialize
  Application entry-point. Provides top React JSX layer.
**/

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WelcomeMessage from 'components/WelcomeMessage';
import CommentBox from 'components/comments/CommentBox';
import commentsReducer from 'reducers/CommentReducers'

// init redux store and pass the relevant reducer
const store = createStore(commentsReducer);

// on DOM load, render our React application
// we also leverage react-redux Provider to serve the state tree from Redux to React
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  	<div>
  	  <WelcomeMessage />
        <Provider store={ store }>
		  <CommentBox url="/api/comments" pollInterval={2000} />
      	</Provider>
    </div>,
    document.querySelector('#content')
  );
});
