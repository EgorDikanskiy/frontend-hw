import styles from './СatalogPage.module.scss'
import React from 'react';
import Pagination from './components/Pagination';
import useAxios from 'axios-hooks'
import Loader from '../../../components/Loader';
import { apiRoutes } from '../../../config/apiRoutes';
import Title from './components/Title';
import Filter from './components/Filter';
import Catalog from './components/Catalog';

const CatalogPage = () => {
    const [{ data: cards, loading, error }] = useAxios(apiRoutes.products);

    if (error) return <p>Error!</p>
    if (loading) return <Loader/>

    return (
    <>
        <div className='container'>
            <Title/>
            <Filter/>
            <Catalog cards={cards} count_items={9} lenght_info={true}/>
            <div className={styles.footer}>
                <Pagination/>
            </div>
        </div>
    </>)
};

export default CatalogPage;