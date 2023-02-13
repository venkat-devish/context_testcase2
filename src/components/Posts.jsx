import React from "react";
import PostsState from "../context/PostContext";

const Posts = () => {
  const { currentPosts, updateMaxPosts } = PostsState();

  return (
    <div>
      {currentPosts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
      <input type="number" onChange={(e) => updateMaxPosts(e.target.value)} />
    </div>
  );
};

export default Posts;
