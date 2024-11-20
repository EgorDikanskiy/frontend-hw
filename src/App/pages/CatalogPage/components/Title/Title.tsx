import React from 'react';
import Text from 'components/Text';
import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.title}>
      <Text view="title" weight="bold">
        Products
      </Text>
      <Text className={styles.sub} view="p-20" color="secondary" maxLines={2}>
        We display products based on the latest products we have, if you want
        <br />
        to see our old products please enter the name of the item
      </Text>
    </div>
  );
};

export default Title;
