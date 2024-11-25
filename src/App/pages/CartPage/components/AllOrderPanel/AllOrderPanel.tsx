import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { useCartStore } from '../../context/CartContext';
import styles from './AllOrderPanel.module.scss';

const AllOrderPanel = () => {
  const cartStore = useCartStore();
  const { clearCart, totalPrice, totalItems } = cartStore;

  return (
    <div className={styles.summary}>
      <h2 className={styles.totalItems}>Общее количество: {totalItems}</h2>
      <h2 className={styles.totalPrice}>Итого: {totalPrice} $</h2>
      <div className={styles.sum_buttons}>
        <Link to={'/payment'}>
          <Button>Перейти к оплате</Button>
        </Link>
        <Button className={styles.removeButton} onClick={clearCart}>
          Очистить корзину
        </Button>
      </div>
    </div>
  );
};

export default AllOrderPanel;
