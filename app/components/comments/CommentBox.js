'use strict'

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as commentActions from 'actions/CommentActions'
import * as commentsAPI from 'drivers/CommentDriver';
import commentsReducer from 'reducers/CommentReducers'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

/**
  CommentBox
  Top level Component for our React based Comment Box Widget
**/
export default class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  // This will load comments from server using the CommentsDriver
  loadComments () {
    const { store } = this.context;

    commentsAPI.fetchComments(this.props.url)
      .then((comments) => {
        console.log(comments);
        store.dispatch( commentActions.receiveComments(comments) );
      }).catch((error) => {
        console.error(error);
      });
  }

  // This will submit a new comment to server using the CommentsDriver
  handleCommentSubmit (comment) {
    const { store } = this.context;

    store.dispatch( commentActions.submitComment(comment) );
    commentsAPI.saveComment(this.props.url, comment)
      .then((comment) => {
        console.log("comment saved");
      }).catch((error) => {
        console.error(error);
      });
  }

  // componentDidMount is called automatically by React on mount of the component
  // here we subscribe to redux store (to get updates) and we load comments from server
  componentDidMount() {
    console.log('subscribing to redux store');
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() );
    
    console.log('bootstrapping comment list');
    this.loadComments();
    setInterval(() => this.loadComments(), this.props.pollInterval);
  }
  
  // componentWillUnmount is called automatically by React on unmount of the component
  // here we cleanup by unsubscribing from the redux store
  componentWillUnmount() {
    console.log('unsubscribing from redux store');
    this.unsubscribe(); 
  }

  // render method is compulsory in all React Components and is called by React every time
  // the components needs to be rendered
  render () {
    const { store } = this.context;
    const { getState } = store;
    const { comments } = getState();

    return (

        <div className='comment-box'>
          <h2>Comments</h2>
          <CommentList comments={ comments } />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
    )
  }
}

// CommentBox expects a propTypes parameter (added automatically by React)
// which is an Object containing:
// - url as String (REQUIRED)
// - pollInterval as Number (REQUIRED)
CommentBox.propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired
}

// CommentBox expects a contextTypes parameter (added by the react-redux Provider) 
// which is an Object containing:
// - store as Object
CommentBox.contextTypes = {
  store: PropTypes.object
}