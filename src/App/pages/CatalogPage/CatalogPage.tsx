import styles from './СatalogPage.module.scss'
import React, { useEffect } from 'react';
import Pagination from './components/Pagination';
import Loader from 'components/Loader';
import Title from './components/Title';
import Filter from './components/Filter';
import Catalog from './components/Catalog';
import itemsStore from '../../../stores/items-store';
import { observer } from 'mobx-react-lite';
import PaginationModel from '../../../stores/pagination-model';

const CatalogPage = observer(() => {
    const {getItemsAction, items} = itemsStore;
    const currentPage = PaginationModel.currentPage;

    const searchParams = new URLSearchParams(location.search);
    const page = Number(searchParams.get('page')) || 1;
    PaginationModel.setCurrentPage(page);
    PaginationModel.setTotalPage(Math.ceil(itemsStore.filteredItems.length / 9))

    useEffect(() => {
        getItemsAction();
    }, []);
    

    if (items?.state == 'pending') {
        return <Loader/>
    }

    if (items?.state == 'rejected') {
        return <p>Error</p>
    }

    return (
    <>
        <div className='container'>
            <Title/>
            <Filter/>
            <Catalog cards={itemsStore.filteredItems} start_point={(currentPage - 1) * 9} count_items={9} lenght_info={true}/>
            <div className={styles.footer}>
                <Pagination/>
            </div>
        </div>
    </>)
}
);

export default CatalogPage;