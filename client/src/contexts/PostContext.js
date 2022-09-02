import { createContext, useReducer } from "react";
import PostReducer from "../reducers/PostReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  //State
  const [postState, dispatch] = useReducer(PostReducer, {
    posts: [],
    postsLoading: true,
  });

  //Get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/post`);
      if (response.data.success) {
        dispatch({
          type: "POSTS_LOADED_SUCCESS",
          payload: response.data.posts,
        });
      }
    } catch (error) {
        return error.response.data ? error.response.data : {success: false, message: 'Server error'}
    }
  };

//   return (
//     <PostContextProvider value={postContextData}>
//         {children}
//     </PostContextProvider>
//   )
};
