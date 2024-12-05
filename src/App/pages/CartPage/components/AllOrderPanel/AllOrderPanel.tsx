import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { routerUrls } from 'config/routerUrls';
import { useRootStore } from 'stores/RootStore';
import styles from './AllOrderPanel.module.scss';

const AllOrderPanel = observer(() => {
  const { cartStore } = useRootStore();
  const { clearCart, totalPrice, totalItems } = cartStore;

  return (
    <div className={styles.summary}>
      <h2 className={styles.totalItems}>Общее количество: {totalItems}</h2>
      <h2 className={styles.totalPrice}>Итого: {totalPrice} ₽</h2>
      <div className={styles.sum_buttons}>
        <Link to={routerUrls.payment.mask}>
          <Button>Перейти к оплате</Button>
        </Link>
        <Button className={styles.removeButton} onClick={clearCart}>
          Очистить корзину
        </Button>
      </div>
    </div>
  );
});

export default AllOrderPanel;
