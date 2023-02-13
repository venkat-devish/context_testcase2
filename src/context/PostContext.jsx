import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currIndex, setCurrIndex] = useState(1);
  const [maxPosts, setMaxPosts] = useState(10);

  const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = async () => {
    const response = await axios.get(POSTS_URL);
    setPosts(response.data);
  };

  const updateCurrentIndex = (idx = 1) => setCurrIndex(idx);
  const updateMaxPosts = (maxi = 10) => {
    if (maxi === "") {
      updateMaxPosts(10);
    } else {
      setMaxPosts(maxi);
    }
  };

  const curentPageLastIndex = maxPosts * currIndex;
  const currentPageStartIndex = curentPageLastIndex - maxPosts;
  const currentPosts = posts.slice(currentPageStartIndex, curentPageLastIndex);
  const totalPosts = posts.length;

  const postsValue = {
    currentPosts,
    maxPosts,
    currIndex,
    updateCurrentIndex,
    updateMaxPosts,
    totalPosts,
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={postsValue}>{children}</PostContext.Provider>
  );
};

const PostsState = () => {
  const postCtx = useContext(PostContext);
  return postCtx;
};

export default PostsState;
