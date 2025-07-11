import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
      .then((res) => {
        setUsers(res.data);
        if(res.data.length < 3){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
      });
  }, [page]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const moveSingleUser = (id) =>{
    navigate(`/users/${id}`)
}
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-10">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
                <th>Company</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item) => (
                <tr key={item.id}  onClick={()=>moveSingleUser(item.id)}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
                  <td>{item.address.city}</td>
                  <td>
                    <Link to={`/users/${item.id}`} className="btn btn-info">visit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-4 text-center">
            <div className="d-flex gap-5">
              <button className="btn btn-secondary" onClick={prevPage}>
                prev
              </button>
              <span>{page}</span>
              <button
                className="btn btn-secondary"
                disabled={disabled}
                onClick={nextPage}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
