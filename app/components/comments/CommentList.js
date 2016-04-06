'use strict'

import React, { PropTypes } from 'react'
import Comment from './Comment'

/**
  CommentList
  A simple stateless component representing a List of comments
**/
const CommentList = (props) => {
  const commentNodes = props.comments.map((comment, i) => {
    return (
      <Comment author={comment.author} key={i}>
        {comment.text}
      </Comment>
    )
  })

  return (
    <div className='comment-list'>
      {commentNodes}
    </div>
  )
}

// expecting an array of comments
CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
