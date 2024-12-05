import React from 'react';
import Text from 'components/Text';
import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.title}>
      <Text view="title" weight="bold">
        Клевая лавка
      </Text>
      <Text className={styles.sub} view="p-20" color="secondary" maxLines={2}>
        Тут только самые клёвые товары для удачной рыбалки и отличного времяпрепровождения
        <br />
        по лучшим ценам и с самой быстрой доставкой
      </Text>
    </div>
  );
};

export default Title;
