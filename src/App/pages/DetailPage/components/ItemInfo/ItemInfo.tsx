import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Text from 'components/Text';
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
  const cartStore = useCartStore();
  const handleAddToCart = () => {
    cartStore.addToCart({ id, name, price, image, quantity: 1 });
    alert('The product has been added to the cart');
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
        <Link to={'/payment'}>
          <Button>Buy Now</Button>
        </Link>
        <Button onClick={handleAddToCart} className={styles.buttons__cart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
});

export default ItemInfo;
