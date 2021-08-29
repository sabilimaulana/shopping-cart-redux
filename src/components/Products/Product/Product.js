import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/Shopping/shopping-actions";
import styles from "./Product.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

const Product = ({ productData, addToCart }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={productData.image}
        alt={productData.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{productData.title}</p>
        <p className={styles.details__desc}>{productData.description}</p>
        <p className={styles.details__price}>{`$ ${productData.price}`}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${productData.id}`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`}>
            View Item
          </button>
        </Link>
        <button
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
          onClick={() => addToCart(productData.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Product);
