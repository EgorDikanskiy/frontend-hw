import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { useCartStore } from '../../context/CartContext';
import styles from './Item.module.scss';

const ItemCard = observer(() => {
  const cartStore = useCartStore();
  const { cart, removeFromCart, updateQuantity } = cartStore;

  const handleAddQuantity = (item: { id: number; quantity: number }) => {
    updateQuantity(item.id, Math.max(1, item.quantity + 1));
  };

  const handleReduceQuantity = (item: { id: number; quantity: number }) => {
    updateQuantity(item.id, Math.max(1, item.quantity - 1));
  };

  return (
    <div className={styles.cartItems}>
      {cart.map((item) => (
        <div className={styles.cartItem} key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <img className={styles.itemImage} src={item.image} alt={item.name} />
          </Link>
          <div className={styles.itemEditButtons}>
            <div className={styles.itemDetails}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemPrice}>{item.price * item.quantity} $</p>
              <div className={styles.quantityControls}>
                <button className={styles.decreaseButton} onClick={() => handleReduceQuantity(item)}>
                  −
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button className={styles.increaseButton} onClick={() => handleAddQuantity(item)}>
                  +
                </button>
              </div>
            </div>
            <Button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
              Удалить
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ItemCard;
