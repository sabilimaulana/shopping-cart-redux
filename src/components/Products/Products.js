import React from "react";
import styles from "./Products.module.css";

import Product from "./Product/Product";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => {
        return <Product key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default connect(mapStateToProps, null)(Products);
