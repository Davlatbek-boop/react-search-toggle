import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="d-flex gap-4">
          <Link to="/users" className="btn btn-success">
            Users
          </Link>
          <Link to="/products" className="btn btn-info">
            Products
          </Link>

          <Link to="/posts" className="btn btn-info">
            Posts
          </Link>
          <Link to="/stopwatch" className="btn btn-info">
            StopWatch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
