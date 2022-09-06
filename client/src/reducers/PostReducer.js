import { POSTS_LOADED_SUCCESS } from "../contexts/constants";
import { POSTS_LOADED_FAIL } from "../contexts/constants";

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
    default:
      return state;
  }
};

export default PostReducer;
