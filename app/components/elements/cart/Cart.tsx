import React from 'react';
import styles from "./cart.module.scss"

function Cart() {
    return (
        <div className={styles.cart}>
        <div className={styles.cartLogo}></div>
        <div className={styles.cartQty}>
          <span>10</span>
        </div>
      </div>
    )
}

export default Cart
