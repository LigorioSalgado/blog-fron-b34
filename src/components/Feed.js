import React from "react";
import PostCard from "./PostCard";

function Feed() {
  return (
    <div className="container">
      <div className="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <PostCard title="Post de prueba" author="Edwin Salgado" />
          <PostCard title="Post de prueba 1" author="Edwin Salgado" />
          <PostCard title="Post de prueba 2" author="Edwin Salgado" />
          <PostCard title="Post de prueba 3" author="Edwin Salgado" />
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">
              Older Posts &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
