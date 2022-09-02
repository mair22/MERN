export const PostReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'POSTS_LOADED_SUCCESS' :
    return {
        ...state,
        post: payload,
        postsLoading: false
    }
    default:
      return state;
  }
};
