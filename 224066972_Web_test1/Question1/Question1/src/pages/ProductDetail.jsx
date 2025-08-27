import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", display: "block", margin: "0 auto" }}
      />
      <h2 style={{ marginTop: "1rem" }}>{product.title}</h2>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "green" }}>
        ${product.price}
      </p>
      <p style={{ marginTop: "1rem" }}>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
