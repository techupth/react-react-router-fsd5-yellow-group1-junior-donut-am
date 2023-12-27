import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function EditProductForm() {
  const [name, setNameInput] = useState("");
  const [image, setImgInput] = useState("");
  const [price, setPriceInput] = useState("");
  const [description, setDescriptionInput] = useState("");

  const param = useParams();
  const navigate = useNavigate();

  const editProduct = async () => {
    await axios.put(`http://localhost:4001/products/${param.id}`, {
      name: name,
      image: image,
      price: price,
      description: description,
    });
    navigate("/");
  };

  const getEditProduct = async () => {
    const results = await axios.get(
      `http://localhost:4001/products/${param.id}`
    );
    setNameInput(results.data.data.name);
    setImgInput(results.data.data.image);
    setPriceInput(results.data.data.price);
    setDescriptionInput(results.data.data.description);
  };

  useEffect(() => {
    getEditProduct();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    editProduct();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setNameInput(event.target.value);
            }}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImgInput(event.target.value);
            }}
            value={image}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPriceInput(event.target.value);
            }}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescriptionInput(event.target.value);
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
