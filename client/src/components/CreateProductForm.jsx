import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const navigate = useNavigate();

  const [name, setNameInput] = useState("");
  const [image, setImgInput] = useState("");
  const [price, setPriceInput] = useState("");
  const [description, setDescriptionInput] = useState("");

  async function createPost() {
    await axios.post("http://localhost:4001/products", {
      name: name,
      image: image,
      price: price,
      description: description,
    });
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
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
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
