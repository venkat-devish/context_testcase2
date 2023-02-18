import React from "react";
import PostState from "../../context";

const NumOptions = () => {
  const { totalPostsLength, indexHandler, tabHandler } = PostState();

  let paginationBase = [];
  for (let i = 1; i <= totalPostsLength / 10; i++) {
    paginationBase.push(i);
  }
  console.log(paginationBase);

  return (
    <div className="numOptions">
      <button onClick={() => tabHandler("prev")}>Prev</button>
      {paginationBase.map((el) => (
        <div className="numOptions__click" onClick={() => indexHandler(el)}>
          {el}
        </div>
      ))}
      <button onClick={() => tabHandler("next")}>Next</button>
    </div>
  );
};

export default NumOptions;
