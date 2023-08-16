import React, { useState } from "react";
import "./ProductDetails.css";
import { useEffect } from "react";
import { getProductID } from "../../apiServices/api";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getProductID(id);
      setProductDetails(data);
    };
    fetchDetails();
  }, [id]);

  return (
    <div className="product-details-container">
      <img
        src={productDetails.image}
        alt="product image"
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>
        <p className="product-description">{productDetails.description}</p>
        <p className="product-price">${productDetails.price}</p>
        <button className="buy-now-button">Buy now</button>
        <Link to="/">
          <button className="go-to-home" style={{ textDecaration: "none" }}>
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
