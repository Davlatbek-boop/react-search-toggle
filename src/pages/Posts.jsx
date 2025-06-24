import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  
  const moveSinglePost = (id) =>{
    navigate(`/posts/${id}`)
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Posts</h1>
        <PostCard posts={posts} moveSinglePost={moveSinglePost}/>
      </div>
    </div>
  );
};

export default Posts;
