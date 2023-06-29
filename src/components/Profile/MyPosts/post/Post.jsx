import React from "react";
import st from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={st.item}>
      <img src="https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D1%84%D0%BE%D1%82%D0%BE-026.jpg" alt="" />
      {props.message}
      <div>{`likes: ${props.likesCount}`}</div>
    </div>
  );
};

export default Post;
