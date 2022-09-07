import {
  POSTS_LOADED_SUCCESS,
  POSTS_LOADED_FAIL,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  FIND_POST,
} from "../contexts/constants";

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
        post: [...state.post, payload],
      };

    case DELETE_POST:
      return {
        ...state,
        post: state.post.filter((post) => post._id !== payload),
      };

    case FIND_POST:
      return { ...state, post: payload };

    case UPDATE_POST:
      const newPosts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );

      return {
        ...state,
        post: newPosts,
      };
    default:
      return state;
  }
};

export default PostReducer;
