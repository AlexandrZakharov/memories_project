import * as api from "../api";
import posts from "../consts/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: posts.FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
