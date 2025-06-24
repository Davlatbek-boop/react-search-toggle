// src/components/MyModal.jsx

import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function MyModal({ products, setProducts, modal, toggle, update }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
  });

  const createProduct = (e) => {
    if (update === null) {
      const newProducts = [
        ...products,
        { ...form, id: products.length + 1, img: "/src/assets/acer.jpg" },
      ];
      setProducts(newProducts);
    } else {
      products.forEach((item) => {
        if (item.id == update.id) {
          item.name = form.name ? form.name : update.name;
          item.price = form.price ? form.price : update.price;
          item.sale = form.sale ? form.sale : update.sale;
          item.quantity = form.quantity ? form.quantity : update.quantity;
        }
      });
      setProducts(products)
    }
    setForm({ name: "", price: "", sale: "", quantity: "" });
    toggle();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const cancelModal = () => toggle();

  return (
    <div>
      <Button color="primary" className="mt-5 " onClick={toggle}>
        Add Product
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {update === null ? <span>Add Product</span> : <span>Update</span>}
        </ModalHeader>
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
                defaultValue={update?.name}
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
                defaultValue={update?.price}
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
                defaultValue={update?.sale}
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
                defaultValue={update?.quantity}
              />
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            color="secondary"
            className="btn btn-danger"
            onClick={cancelModal}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            className="btn btn-success"
            onClick={createProduct}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyModal;
