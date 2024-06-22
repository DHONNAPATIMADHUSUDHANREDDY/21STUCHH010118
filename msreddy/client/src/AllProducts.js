import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('price');

  useEffect(() => {
    fetchProducts();
  }, [category, company, minPrice, maxPrice, sortOrder]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products`, {
        params: {
          top: 10, // adjust based on your requirement
          minPrice,
          maxPrice,
          sort: sortOrder,
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
             
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="Computer">Computer</MenuItem>
              
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Company</InputLabel>
            <Select value={company} onChange={(e) => setCompany(e.target.value)}>
            
              <MenuItem value="AMZ">AMZ</MenuItem>
              <MenuItem value="FLP">FLP</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField label="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          
          {products.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.company}</p>
              <p>{product.price}</p>
            
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllProducts;
