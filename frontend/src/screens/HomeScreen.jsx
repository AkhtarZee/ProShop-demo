import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
//import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      };
      fetchProducts();
    } catch (error) {
      console.log(error.response.data);
    }
  }, [products]);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product key={product._id} product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
