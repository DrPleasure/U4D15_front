import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productdetails.css';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-category">Category: {product.category}</div>
        <div className="product-description">{product.description}</div>
        <div className="Reviews">
          Reviews:
          {product.reviews_id.map((review) => (
            <div key={review.id}>
              <div>Comment: {review.comment}</div>
              <div>Rating: {review.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
