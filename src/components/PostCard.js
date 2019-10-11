import React from "react";
import { Link } from 'react-router-dom'

function PostCard({ title, author, id }) {
  //Como parametro recibo props
  return (
    <>
      <div class="post-preview">
        <Link to={`/post/${id}`}>
          <h2 class="post-title">
           {title}
          </h2>
        </Link>
        <p class="post-meta">
          Posted by
          <a href="#"> {author} </a>
        </p>
      </div>
      <hr />
    </>
  );
}


export default PostCard;