import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://20.244.56.144/test/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product', error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="h6">{product.company}</Typography>
      <Typography variant="body1">Price: {product.price}</Typography>
      <Typography variant="body1">Category: {product.category}</Typography>
      <Typography variant="body1">Rating: {product.rating}</Typography>
      <Typography variant="body1">Discount: {product.discount}</Typography>
      <Typography variant="body1">Availability: {product.availability}</Typography>
    </Container>
  );
};

export default ProductDetail;
