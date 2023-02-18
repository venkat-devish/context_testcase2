import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const PaginationContext = createContext();

export const PaginationContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(10);

  const indexHandler = (idx) => {
    setStartIndex(idx);
  };

  const tabHandler = (action) => {
    if (startIndex % endIndex === 0) {
      setStartIndex(1);
      return;
    } else if (startIndex <= 0) {
      setStartIndex(10);
      return;
    } else {
      action === "prev"
        ? setStartIndex(startIndex - 1)
        : setStartIndex(startIndex + 1);
    }
  };
  console.log(startIndex, endIndex);
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
