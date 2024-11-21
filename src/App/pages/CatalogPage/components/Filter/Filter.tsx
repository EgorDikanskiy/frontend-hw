import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { updateQueryParams } from 'config/updateQueryParams';
import { useCatalogStore } from '../../CatalogStoreContext';

import MultiDropdown, { Option } from '../MultiDropdown';
// import PriceFilter from '../PriceFilter';
import Search from '../Search';
import styles from './Files.module.scss';

const Filter = observer(() => {
  const itemsStore = useCatalogStore();
  const navigate = useNavigate();
  const location = useLocation();
  // const [searchParams] = useSearchParams();

  useEffect(() => {
    itemsStore.initializeFilter(new URLSearchParams(location.search), navigate);
  }, [location.search, itemsStore, navigate]);

  const handleCategoryChange = useCallback(
    (selectedOptions: Option[]) => {
      const selectedCategoryId = selectedOptions.length > 0 ? Number(selectedOptions[0].id) : null;
      itemsStore.setSelectedCategory(selectedCategoryId, navigate);
    },
    [itemsStore, navigate],
  );

  const getTitle = useCallback((values: Option[]) => {
    return values.length === 0 ? 'Filter by categories' : values.map(({ value }) => value).join(', ');
  }, []);

  // const handleApplyPriceFilter = (minPrice, maxPrice) => {
  //   itemsStore.setPriceRange(minPrice, maxPrice); // Обновляем диапазон цен в сторе
  //   updateQueryParams(navigate, { price_min: minPrice, price_max: maxPrice, page: 1 });
  //   itemsStore.fetchData(); // Перезагружаем данные
  // };

  return (
    <div>
      <Search />
      <div className={styles.filter}>
        <MultiDropdown
          className={styles.filter__category}
          options={itemsStore.categoryOptions}
          value={itemsStore.selectedCategory ? [itemsStore.selectedCategory] : []}
          onChange={handleCategoryChange}
          getTitle={getTitle}
        />
        {/* <PriceFilter
          className={styles.filter__price}
          onApplyFilter={handleApplyPriceFilter}
          initialPriceRange={[itemsStore.queryModel.priceMin, itemsStore.queryModel.priceMax]}
        /> */}
      </div>
    </div>
  );
});

export default Filter;
