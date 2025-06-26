import React from "react";

const Card = ({ item, deleteProduct, toggle, setUpdate}) => {
  const openUpdate = (item) =>{
    toggle()
    setUpdate(item)

  }
  return (
    <div className="card mb-5">
      <div className="card-body">
        <img src={item.img} alt="" className="w-100 rounded-1" />
      </div>
      <div className="card-footer">
        <h3 className="text-center">{item.name}</h3>
        <div className="d-flex justify-content-between">
          <p>{item.price} $</p>
          <p>{item.quantity}</p>
          <button className="btn btn-info" onClick={()=>openUpdate(item)}>Update</button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProduct(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
