// src/components/MyModal.jsx

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function MyModal({products, setProducts}) {
  const [modal, setModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
  });



  const toggle = () => setModal(!modal); // ochish/yopish

  const createProduct = (e) =>{
    const newProducts = [...products, {...form, id: products.length + 1, img: "/src/assets/acer.jpg"}]
    setProducts(newProducts)
    toggle()
  }


  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

  return (
    <div>
      <Button color="primary" className="mt-5 " onClick={toggle}>
        Add Product
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sarlavha</ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name..."
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                id="price"
                className="form-control"
                placeholder="Price..."
                name="price"
                onChange={handleChange}
                
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sale" className="form-label">
                Sale
              </label>
              <input
                type="text"
                id="sale"
                className="form-control"
                placeholder="Sale..."
                name="sale"
                onChange={handleChange}

              />
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className="form-control"
                placeholder="Quantity..."
                name="quantity"
                onChange={handleChange}

              />
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            color="secondary"
            className="btn btn-success"
            onClick={createProduct}
          >
            Yopish
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyModal;
