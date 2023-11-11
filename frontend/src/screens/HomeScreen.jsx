import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
//import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      const myData = await response.data;
      setProducts(myData);
    };
    fetchProducts();
  }, []);
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
