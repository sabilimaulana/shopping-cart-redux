import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";
import styles from "./CartItem.module.css";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={itemData.image}
        alt={itemData.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{itemData.title}</p>
        <p className={styles.details__desc}>{itemData.description}</p>
        <p className={styles.details__price}>{`$ ${itemData.price}`}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            onChange={(e) => onChangeHandler(e)}
            type="number"
            id="qty"
            name="qty"
            value={input}
          />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
          onClick={() => removeFromCart(itemData.id)}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt="Trash"
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
