import { useState } from "react";
import Card from "../components/Card";
import MyModal from "../Modals/Modal";
function Products() {
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(null);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 2,
      img: "/src/assets/acer.jpg",
    },
    {
      id: 2,
      name: "product-2",
      price: 1200,
      sale: 13,
      quantity: 2,
      img: "/src/assets/acer.jpg",
    },
    {
      id: 3,
      name: "product-3",
      price: 1200,
      sale: 13,
      quantity: 2,
      img: "/src/assets/acer.jpg",
    },
    {
      id: 4,
      name: "product-4",
      price: 1200,
      sale: 13,
      quantity: 2,
      img: "/src/assets/acer.jpg",
    },
  ]);

  const toggle = () => {
    setModal(!modal);
    setUpdate(null)
  }; // ochish/yopish

  const deleteProduct = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    console.log(id);
    setProducts([...newProducts]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <MyModal
            products={products}
            setProducts={setProducts}
            modal={modal}
            toggle={toggle}
            update={update}
          />
        </div>
        <div className="col-md-6 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        {products
          .filter((item) => {
            if (search.length === 0) {
              return item;
            } else if (item.name.includes(search)) {
              return item;
            }
          })
          .map((item) => (
            <div className="col-md-4" key={item.id}>
              <Card item={item} deleteProduct={deleteProduct} toggle={toggle} setUpdate={setUpdate}/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
