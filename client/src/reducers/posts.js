import posts from "../consts/posts";

const reducer = (state = [], action) => {
  switch (action.type) {
    case posts.FETCH_ALL:
      return action.payload;
    case posts.CREATE:
      return state;
    default:
      return state;
  }
};

export default reducer;
