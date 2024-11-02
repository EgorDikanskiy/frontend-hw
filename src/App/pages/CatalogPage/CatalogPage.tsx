import Card from 'components/Card'
import { Link } from 'react-router-dom';
import styles from './СatalogPage.module.scss'
import LoaderStyles from '../../../styles/Styles.module.scss'
import MultiDropdown, { MultiDropdownProps, Option } from './components/MultiDropdown';
import Text from 'components/Text';
import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Header from 'components/Header';
import Pagination from './components/Pagination';
import useAxios from 'axios-hooks'
import Loader from '../../../components/Loader';

const CatalogPage = () => {
    const [{ data: cards, loading, error }] = useAxios(
        'https://api.escuelajs.co/api/v1/products'
    );
    if (error) return <p>Error!</p>
    const OPTIONS = [
        { key: 'asc', value: 'asс price' },
        { key: 'desc', value: 'desc price' },
        { key: 'pop', value: 'popularity' },
    ]
    const [value, setValue] = useState<Option[]>([]);

    return (
    <>
    {loading && <div className={LoaderStyles.loader_container}><Loader/></div>}
    {!loading && 
        <>
            <Header/>
        <div className='container'>
        <div className={styles.catalog__title}>
            <Text view='title' weight='bold'>Products</Text>
            <Text className={styles.catalog__sub} view='p-20' color='secondary' maxLines={2}>We display products based on the latest products we have, if you want<br/>
            to see our old products please enter the name of the item</Text>
        </div>
        <div>
        <Search/>
        <MultiDropdown
        options={OPTIONS}
        value={value}
        onChange={setValue}
        getTitle={(values: Option[]) => values.length === 0 ? 'Filter': values.map(({ value }) => value).join(', ')}
    />
        </div>
        <div>
            <Text className={styles.catalog__total} view='title' weight='bold'>Total Product <span className={styles.catalog__amount}>{cards.length}</span></Text>
        </div>
        <div className={styles.catalog}>
            {cards.slice(0, 9).map((card: { id: any; title: string; description: string; images: Array<string>; price: string; }) => (
                <div key={card.id}>
                <Link to={`/detail/${card.id}`}><Card title={card.title} subtitle={card.description} image={card.images[0]} contentSlot={'$' + card.price} actionSlot='Add to Cart'></Card></Link>
            </div>
            ))}
        </div>
        <div className={styles.catalog__footer}>
            <Pagination/>
        </div>
        </div>
        </>
    }
    
    </>)
};

export default CatalogPage