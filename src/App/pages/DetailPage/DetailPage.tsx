import styles from './DetailPage.module.scss'
import Text from 'components/Text'
import DemoCarousel from './components/Slider'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from 'components/Loader';
import React, { useEffect } from 'react'
import ItemInfo from './components/ItemInfo'
import Catalog from '../CatalogPage/components/Catalog'
import itemsStore from '../../../stores/items-store'
import { observer } from 'mobx-react-lite';



const DetailPage = observer(() => {
    const { id } = useParams();

    const {getItemAction, item} = itemsStore;
    const {getItemsAction, items} = itemsStore;

    useEffect(() => {
        getItemAction(id);
        getItemsAction();
    }, [])

    const navigate = useNavigate();

    if (item?.state == 'pending') {
        return <Loader/>
    }

    if (item?.state == 'rejected') {
        return <p>Error</p>
    }

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
                    {item?.value.images && <DemoCarousel images={item?.value.images}/>}
                </div>
                <ItemInfo title={item?.value.title} description={item?.value.description} price={item?.value.price}/>
            </div>
            <Text className={styles.subtitle} view='title' weight='bold'>Related Items</Text>
            <Catalog cards={items?.value} start_point={0} count_items={3} lenght_info={false}/>
        </div>
        </>
    )
})
;

export default DetailPage