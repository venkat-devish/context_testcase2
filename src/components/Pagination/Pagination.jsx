import React from "react";
import PostState from "../../context";

const Pagination = () => {
  const { posts } = PostState();

  return (
    <div>
      <ul>
        {posts.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
