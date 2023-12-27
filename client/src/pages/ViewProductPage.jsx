import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const navigate = useNavigate();
  const param = useParams("");

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const getContent = async () => {
    try {
      const results = await axios.get(
        `http://localhost:4001/products/${param.id}`
      );
      setName(results.data.data.name);
      setImg(results.data.data.image);
      setPrice(results.data.data.price);
      setDescription(results.data.data.description);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{name}</h2>
        <img src={img} alt="some product" width="350" height="350" />
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <p>{description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
