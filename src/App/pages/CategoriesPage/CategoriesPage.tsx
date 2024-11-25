import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
import Text from 'components/Text';
import CategoryCard from './components/CategoryCard';
import CategoriesStore from './stores/CategoriesStore';
import styles from './CategoriesPage.module.scss';

const categoriesStore = new CategoriesStore();

const CategoriesPage = observer(() => {
  const { displayedCategories, loadAllCategories, displayNextBatch, hasMoreCategories } = categoriesStore;

  const fetchCategories = useCallback(() => {
    loadAllCategories();
  }, [loadAllCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="container">
      <Text className={styles.title} view="title">
        Categories
      </Text>
      <InfiniteScroll
        dataLength={displayedCategories.length}
        next={displayNextBatch}
        hasMore={hasMoreCategories}
        loader={<Loader className={styles.categories__loader} />}
        endMessage={<p>No more categories to show</p>}
      >
        <div className={styles.categories}>
          {displayedCategories.map((category: { id: React.Key | null | undefined; image: string; name: string }) => (
            <div key={category.id}>
              <Link to={`/catalog?categoryId=${category.id}&page=1`}>
                <CategoryCard image={category.image} name={category.name} />
              </Link>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
});

export default CategoriesPage;
