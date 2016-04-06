'use strict'

import React, { Component, PropTypes } from 'react'

/**
  CommentForm
  Renders a form, does validation on it and returns the content to its parent on submit
**/
export default class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // do validation and on success, call parent and reset form
  handleSubmit (e) {
    e.preventDefault()
    const author = this.refs.author.value.trim()
    const text = this.refs.text.value.trim()

    if (!text || !author) {
      return
    }

    this.props.onCommentSubmit({ author: author, text: text })
    this.refs.author.value = ''
    this.refs.text.value = ''
    return
  }

  render () {
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your name' ref='author' />
        <input type='text' placeholder='Say something...' ref='text' />
        <input type='submit' value='Post' />
      </form>
    )
  }
}

// propTypes is expected to contain an onCommitSubmit function which is the callback to the parent
CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired
}
