import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { cartStore } from './stores/CartStore';
import styles from './CartPage.module.scss';

const CartPage: React.FC = observer(() => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = cartStore;

  return (
    <div className="container">
      <div className={styles.cartPage}>
        <h1 className={styles.title}>Корзина</h1>
        {cart.length === 0 ? (
          <p className={styles.emptyCart}>Корзина пуста</p>
        ) : (
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div className={styles.cartItem} key={item.id}>
                <img className={styles.itemImage} src={item.image} alt={item.name} />
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemPrice}>{item.price * item.quantity} $</p>
                  <input
                    className={styles.itemQuantity}
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    min="1"
                  />
                </div>
                <Button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                  Удалить
                </Button>
              </div>
            ))}
            <div className={styles.summary}>
              <h2 className={styles.totalItems}>Общее количество: {totalItems}</h2>
              <h2 className={styles.totalPrice}>Итого: {totalPrice} $</h2>
              <div className={styles.sum_buttons}>
                <Link to={'/payment'}>
                  <Button>Перейти к оплате</Button>
                </Link>
                <Button onClick={clearCart}>Очистить корзину</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default CartPage;
