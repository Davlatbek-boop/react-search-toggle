import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./Card";
import MyModal from "./Modal";
function App() {
  const [open, setOpen] = useState(false)
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

  return (
    <div className="container">
      <MyModal products={products} setProducts={setProducts}/>
      <div className="row mt-3">
        {products.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
