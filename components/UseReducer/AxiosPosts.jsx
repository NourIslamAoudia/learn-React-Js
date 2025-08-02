import { useEffect, useReducer, useCallback } from "react";
import { fetchPosts } from "../../API/posts";
import Skeleton from "../loader/Skeleton";
import style from "../Button.module.css";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, posts: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const AxiosPosts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: "FETCH_START" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const posts = await fetchPosts();
      dispatch({ type: "FETCH_SUCCESS", payload: posts });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }, []);

  useEffect(() => {
  }, [fetchData]);

  return (
    <>
      <button className={style.button} onClick={fetchData}>
        Load Posts
      </button>
      {state.loading && <Skeleton />}
      {state.error && <p>Error: {state.error}</p>}
      <ul>
        {state.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AxiosPosts;
