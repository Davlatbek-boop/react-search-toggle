import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
const SinglePosts = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white fw-bold fs-5">
          {post?.title?.toUpperCase()}
        </div>
        <div className="card-body">
          <p className="card-text text-secondary fs-6">
            {post?.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePosts;
