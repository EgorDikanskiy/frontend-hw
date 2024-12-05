import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader';

import { CatalogStoreProvider, useCatalogStore } from './CatalogStoreContext';
import Catalog from './components/Catalog';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Title from './components/Title';
import styles from './СatalogPage.module.scss';

const CatalogPageContent = observer(() => {
  const catalogStore = useCatalogStore();
  const [searchParams] = useSearchParams();

  const fetchData = useCallback(() => {
    catalogStore.queryModel.setQueryParams(searchParams);
    catalogStore.fetchData();
  }, [searchParams, catalogStore]);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [fetchData]);

  return (
    <div className="container">
      <Title />
      <Filter />
      <div>
        {!catalogStore.loading && (
          <Catalog cards={catalogStore.products} count_all_items={catalogStore.totalItemsCount} lenght_info={true} />
        )}
        {catalogStore.loading && <Loader />}
        {catalogStore.error && <p>{catalogStore.error}</p>}
      </div>
      <div className={styles.footer}>{catalogStore.totalItemsCount > 9 && <Pagination />}</div>
    </div>
  );
});

// Главный компонент страницы, оборачивающий контент в CatalogStoreProvider
const CatalogPage = () => {
  return (
    <CatalogStoreProvider>
      <CatalogPageContent />
    </CatalogStoreProvider>
  );
};

export default CatalogPage;
