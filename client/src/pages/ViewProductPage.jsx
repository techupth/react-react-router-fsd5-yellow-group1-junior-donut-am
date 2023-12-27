import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const [product, setProduct] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const results = await axios.get("http://localhost:4001/products/" + params.Id)
    setProduct(results.data.data)
  }

  return (
    <div>
      <h1>View Product Page</h1>
        <div className="view-product-container">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
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
