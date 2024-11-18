import styles from './СatalogPage.module.scss';
import Pagination from './components/Pagination';
import Loader from 'components/Loader';
import Title from './components/Title';
import Filter from './components/Filter';
import Catalog from './components/Catalog';
import { observer } from 'mobx-react-lite';
import { CatalogStoreProvider, useCatalogStore } from './CatalogStoreContext';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { action } from 'mobx';
import React from 'react';

const CatalogPageContent = observer(() => {
    const catalogStore = useCatalogStore();
    const [searchParams] = useSearchParams();

    useEffect(action(() => {
        catalogStore.queryModel.setQueryParams(searchParams);
        catalogStore.fetchData();
    }), [searchParams, catalogStore]);

    return (
        <div className="container">
            <Title />
            <Filter />
            <div>
                {!catalogStore.loading && (
                    <Catalog
                        cards={catalogStore.products}
                        count_all_items={catalogStore.totalItemsCount}
                        lenght_info={true}
                    />
                )}
                {catalogStore.loading && <Loader />}
                {catalogStore.error && <p>{catalogStore.error}</p>}
            </div>
            <div className={styles.footer}>
                <Pagination />
            </div>
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