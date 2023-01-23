import axios from "axios";
import React, { useEffect, useState } from "react";

const Like = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Other posts you may like</h4>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            {post.img && <img className="img-fluid" src={`../upload/${post?.img}`} alt="" />}
            <h6>{post.title}</h6>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
