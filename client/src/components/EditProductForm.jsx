import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const results = await axios.get("http://localhost:4001/products/" + params.Id)
    const data = results.data.data
    setName(data.name);
    setImage(data.image);
    setPrice(data.price);
    setDescription(data.description);
  } 

  const editProduct = async () => {
    await axios.put("http://localhost:4001/products/" + params.Id,
     {
        name,
        image,
        price,
        description,
      }
    );
  };

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
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
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
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
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
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
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
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
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
