import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'components/Card';
import Text from 'components/Text';
import { routerUrls } from 'config/routerUrls';
import { filterUrlImage } from 'utils/filterUrlImage';
import styles from './Catalog.module.scss';

interface Card {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

interface CatalogProps {
  cards: Card[];
  lenght_info: boolean;
  count_all_items: number;
}

const Catalog: React.FC<CatalogProps> = observer(({ cards, lenght_info, count_all_items }) => {
  return (
    <div>
      {lenght_info && (
        <div>
          <Text className={styles.catalog__total} view="title" weight="bold">
            Всего товаров <span className={styles.catalog__amount}>{count_all_items}</span>
          </Text>
        </div>
      )}
      <div className={styles.catalog}>
        {!count_all_items && <p>There are no products</p>}
        {cards &&
          cards.map(
            (card: { id: number; title: string; description: string; images: Array<string>; price: number }) => (
              <div key={card.id}>
                <Link to={routerUrls.productDetail.create(card.id)}>
                  <Card
                    title={card?.title}
                    subtitle={card?.description}
                    image={filterUrlImage(card.images[0])}
                    contentSlot={card.price + ' ₽'}
                    actionSlot="Подробнее"
                  ></Card>
                </Link>
              </div>
            ),
          )}
      </div>
    </div>
  );
});

export default Catalog;
