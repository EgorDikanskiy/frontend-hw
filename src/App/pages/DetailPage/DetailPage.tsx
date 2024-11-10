import styles from './DetailPage.module.scss'
import Text from '../../../components/Text'
import DemoCarousel from './components/Slider'
import { useParams, useNavigate, Link } from 'react-router-dom'
import useAxios from 'axios-hooks'
import Loader from '../../../components/Loader';
import React from 'react'
import { apiRoutes } from '../../../config/apiRoutes';
import ItemInfo from './components/ItemInfo'
import Catalog from '../CatalogPage/components/Catalog'



const DetailPage = () => {
    const { id } = useParams();

    const [{ data: item_info, loading, error }] = useAxios(apiRoutes.productById(id));

    const [{ data: cards}] = useAxios(apiRoutes.products);

    const navigate = useNavigate();

    if (error) return <p>Error!</p>
    if (loading) return <Loader/>

    return (
        <>
        <div className='container'>
            <button className={styles.nav_detail} onClick={() => navigate(-1)}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Text className={styles.nav_detail__text} view='p-20'>Назад</Text>
            </button>
            <div className={styles.item}>
                <div className={styles.item__images}>
                    {item_info.images && <DemoCarousel images={item_info.images}/>}
                </div>
                <ItemInfo title={item_info.title} description={item_info.description} price={item_info.price}/>
            </div>
            <Text className={styles.subtitle} view='title' weight='bold'>Related Items</Text>
            {cards && <Catalog cards={cards} count_items={3} lenght_info={false}/>}
        </div>
        </>
    )
}

export default DetailPage