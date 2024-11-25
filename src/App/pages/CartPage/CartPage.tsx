import { observer } from 'mobx-react-lite';
import React from 'react';
import AllOrderPanel from './components/AllOrderPanel';
import ItemCard from './components/ItemCard';
import { useCartStore } from './context/CartContext';
import styles from './CartPage.module.scss';

const CartPage: React.FC = observer(() => {
  const cartStore = useCartStore();
  const { cart } = cartStore;

  return (
    <div className="container">
      <div className={styles.cartPage}>
        <h1 className={styles.title}>Корзина</h1>
        {cart.length === 0 ? (
          <p className={styles.emptyCart}>Корзина пуста</p>
        ) : (
          <div>
            <ItemCard />
            <AllOrderPanel />
          </div>
        )}
      </div>
    </div>
  );
});

export default CartPage;
