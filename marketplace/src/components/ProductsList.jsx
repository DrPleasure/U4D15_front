import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch("http://localhost:3001/products")
        .then((response) => response.json())
        .then((data) => {
          if(data.hasOwnProperty('products')) {
            setProducts(data.products);
            setLoading(false);
          } else {
            setError("data not in correct format");
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    return (
        <div className="d-flex products">
          
          {products.map((product) => (
            <Card className="card" key={product._id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body className="body">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Link to={`/details/${product._id}`}>             
                   <Button variant="primary">View Product</Button>
                </Link>
                <Button className="m-2" variant="success">Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )
  }
