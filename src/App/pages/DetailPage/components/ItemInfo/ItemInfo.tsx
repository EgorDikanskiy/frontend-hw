import { observer } from 'mobx-react-lite';
import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import { cartStore } from '../../../CartPage/stores/CartStore';
import styles from './ItemInfo.module.scss';

export type ItemInfoProps = {
  name: string;
  description: string;
  price: number;
  id: number;
  image: string;
};

const ItemInfo: React.FC<ItemInfoProps> = observer(({ name, description, price, id, image }) => {
  const handleAddToCart = () => {
    cartStore.addToCart({ id, name, price, image, quantity: 1 });
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
        <Button>Buy Now</Button>
        <Button onClick={handleAddToCart} className={styles.buttons__cart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
});

export default ItemInfo;
