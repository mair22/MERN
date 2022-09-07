import { POSTS_LOADED_SUCCESS, POSTS_LOADED_FAIL, ADD_POST } from "../contexts/constants";

const PostReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOADED_SUCCESS:
      return {
        ...state,
        post: payload,
        postsLoading: false,
      };

    case POSTS_LOADED_FAIL:
      return {
        ...state,
        post: [],
        postsLoading: false,
      };

    case ADD_POST:
      return {
        ...state,
        post: [...state.post, payload]
      }
    default:
      return state;
  }
};

export default PostReducer;
