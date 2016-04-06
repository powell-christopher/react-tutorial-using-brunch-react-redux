// redux actions defined as const of type Symbol
export const SUBMIT_COMMENT   = Symbol('SUBMIT_COMMENT');
export const RECEIVE_COMMENTS = Symbol('RECEIVE_COMMENTS');

/**
  submitComment
  Defines payload for events of type SUBMIT_COMMENT
**/
export function submitComment(comment) {
  return {
    type: SUBMIT_COMMENT,
    comment
  };
}

/**
	receiveComments
	Defines payload for events of type RECEIVE_COMMENTS
**/
export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}
