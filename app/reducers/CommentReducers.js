/**
  CommentReducers
  A Redux Reducer that can handle Comment Actions.
  Given an existing State Tree and an Action, it will respond with a new State Tree.
**/

import * as commentActions from 'actions/CommentActions';

export default function commentsReducer(state={comments : []}, action) {
  switch(action.type){
    case commentActions.SUBMIT_COMMENT:
      let comments = state.comments.concat([action.comment]);
      return {comments : comments};
    case commentActions.RECEIVE_COMMENTS:
     return {comments : action.comments};
    default:
      return state;
  }
}
