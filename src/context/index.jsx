import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PaginationContext = createContext();

export const PaginationContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(10);

  const indexHandler = (idx) => {
    setStartIndex(idx);
    console.log(idx);
  };

  const tabHandler = (action) => {
    action === "prev"
      ? setStartIndex(startIndex - 1)
      : setStartIndex(startIndex + 1);
  };

  const lastPostIndex = endIndex * startIndex;
  const firstPostIndex = lastPostIndex - endIndex;
  const filteredposts = posts.slice(firstPostIndex, lastPostIndex);

  const postValue = {
    posts: filteredposts,
    totalPostsLength: posts.length,
    indexHandler,
    tabHandler,
  };

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    data();
  }, []);

  return (
    <PaginationContext.Provider value={postValue}>
      {children}
    </PaginationContext.Provider>
  );
};

const PostState = () => {
  const postCtx = useContext(PaginationContext);
  return postCtx;
};

export default PostState;
