import React from 'react';
import { filterUrlImage } from 'utils/filterUrlImage';
import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  image: string;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div className={styles.category_card}>
      <img src={filterUrlImage(image)} alt={name} className={styles.category_card__image} />
      <h3 className={styles.category_card__title}>{name}</h3>
    </div>
  );
};

export default CategoryCard;
