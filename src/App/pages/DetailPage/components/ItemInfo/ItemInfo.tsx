import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Text from 'components/Text';
import { routerUrls } from 'config/routerUrls';
import { useAuthStore } from '../../../Auth/context/AuthContext';
import { useCartStore } from '../../../CartPage/context/CartContext';
import styles from './ItemInfo.module.scss';

export type ItemInfoProps = {
  name: string;
  description: string;
  price: number;
  id: number;
  image: string;
};

const ItemInfo: React.FC<ItemInfoProps> = observer(({ name, description, price, id, image }) => {
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  const { user } = authStore;
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (user) {
      cartStore.addToCart({ id, name, price, image, quantity: 1 });
      setIsInCart(true);
    } else {
      navigate(routerUrls.login.mask);
    }
  };

  return (
    <div>
      <Text view="title" weight="bold">
        {name}
      </Text>
      <Text className={styles.item__description} view="p-20" color="secondary">
        {description}
      </Text>
      <Text className={styles.item__price} view="title" weight="bold">
        {'$' + price}
      </Text>
      <div className={styles.buttons}>
        <Link to={routerUrls.payment.mask}>
          <Button>Buy Now</Button>
        </Link>
        <Button
          onClick={handleAddToCart}
          className={classNames(styles.buttons__cart, {
            [styles.buttons__cart_active]: isInCart,
          })}
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
});

export default ItemInfo;
