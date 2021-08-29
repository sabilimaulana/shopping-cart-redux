import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import styles from "./SingleItem.module.css";

const SingleItem = ({ products, addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const productData = products.filter((item) => {
      return item.id === +id;
    })[0];

    setProduct(productData);
  }, [products, id]);

  return (
    <div className={styles.singleItem}>
      {product && (
        <>
          <img
            className={styles.singleItem__image}
            src={product.image}
            alt={product.title}
          />
          <div className={styles.singleItem__details}>
            <p className={styles.details__title}>{product.title}</p>
            <p className={styles.details__description}>{product.description}</p>
            <p className={styles.details__price}>$ {product.price}</p>

            <button
              className={styles.details__addBtn}
              onClick={() => addToCart(product.id)}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
