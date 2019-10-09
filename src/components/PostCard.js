import React from "react";

function PostCard({ title, author }) {
  //Como parametro recibo props
  return (
    <>
      <div class="post-preview">
        <a href="post.html">
          <h2 class="post-title">
           {title}
          </h2>
        </a>
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