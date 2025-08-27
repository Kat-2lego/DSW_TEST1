import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          width="100"
          style={{ marginBottom: "10px" }}
        />
        <h3 style={{ fontSize: "1rem", marginBottom: "5px" }}>{product.title}</h3>
        <p style={{ fontWeight: "bold", color: "green" }}>${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
