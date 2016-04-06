'use strict'

import React, { PropTypes } from 'react'
import marked from 'marked'

/**
  Comment
  A simple stateless component representing a single comment
**/
const Comment = (props) => {
  const rawMarkup = marked(props.children.toString())
  return (
    <div className='comment'>
      <h3 className='comment-author'>{props.author}</h3>
      <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    </div>
  )
}

// expects an Author as String and a Comment (children)
Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string
}

export default Comment
