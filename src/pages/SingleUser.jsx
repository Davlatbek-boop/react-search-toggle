import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleUser = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, []); 
  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">
            {user?.name} (@{user?.username})
          </h5>
        </div>
        <div className="card-body">
          <h6 className="text-primary mb-2">📧 {user?.email}</h6>
          <p className="mb-2">
            <strong>📞 Phone:</strong> {user?.phone} <br />
            <strong>🌐 Website:</strong>{" "}
            <a
              href={`http://${user?.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {user?.website}
            </a>
          </p>

          <div className="mb-3">
            <h6 className="fw-bold">🏠 Address:</h6>
            <p className="mb-1">
              {user?.address.suite}, {user?.address.street}, <br />
              {user?.address.city} - {user?.address.zipcode}
            </p>
            <small className="text-muted">
              Geo: ({user?.address.geo.lat}, {user?.address.geo.lng})
            </small>
          </div>

          <div>
            <h6 className="fw-bold">🏢 Company:</h6>
            <p className="mb-0">{user?.company.name}</p>
            <small className="text-muted fst-italic">
              "{user?.company.catchPhrase}" — {user?.company.bs}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
