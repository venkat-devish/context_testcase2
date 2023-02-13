import React from "react";
import PostsState from "../context/PostContext";

const Pagination = () => {
  const { totalPosts, maxPosts, updateCurrentIndex } = PostsState();
  let paginate = [];
  for (let i = 1; i <= Math.ceil(totalPosts / maxPosts); i++) {
    paginate.push(i);
  }

  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "10px" }}>
          {paginate.map((el) => (
            <h2
              key={el}
              style={{ cursor: "pointer" }}
              onClick={() => updateCurrentIndex(el)}
            >
              {el}
            </h2>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
