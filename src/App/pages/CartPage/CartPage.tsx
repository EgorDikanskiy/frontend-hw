import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuthStore } from '../Auth/context/AuthContext';
import { useRootStore } from 'stores/RootStore';
import AllOrderPanel from './components/AllOrderPanel';
import ItemCard from './components/ItemCard';
// import { useCartStore } from './context/CartContext';
import styles from './CartPage.module.scss';

const CartPage: React.FC = observer(() => {
  const { authStore, cartStore } = useRootStore();
  const { cart } = cartStore;
  const { user } = authStore;

  return (
    <div className="container">
      <div className={styles.cartPage}>
        {!user && (
          <Link to={'/login'}>
            <h2 className={styles.title}>Войдите в аккаунт</h2>
          </Link>
        )}
        {user && (
          <div>
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
        )}
      </div>
    </div>
  );
});

export default CartPage;
