import styles from './DetailPage.module.scss';
import Text from 'components/Text';
import DemoCarousel from './components/Slider';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import React, { useEffect } from 'react';
import ItemInfo from './components/ItemInfo';
import Catalog from '../CatalogPage/components/Catalog';
import DetailStore from './stores/DetailStore';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

const detailStore = new DetailStore();

const DetailPage = observer(() => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {fetchAllData, product} = detailStore;


    useEffect(action(() => {
        fetchAllData(id);
    }), [id]);

    return (
        <div>
            {detailStore.loading && <Loader />}
            {detailStore.error && <p>Error: {detailStore.error}</p>}
            {!detailStore.loading && !detailStore.error && (
                <div className="container">
                    <button className={styles.nav_detail} onClick={() => navigate(-1)}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <Text className={styles.nav_detail__text} view="p-20">
                            Назад
                        </Text>
                    </button>
                    <div className={styles.item}>
                        <div className={styles.item__images}>
                            {product.images && <DemoCarousel images={product.images} />}
                        </div>
                        <ItemInfo
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                    <Text className={styles.subtitle} view="title" weight="bold">
                        Related Items
                    </Text>
                    <Catalog
                        cards={detailStore.relatedItems}
                        lenght_info={false}
                        count_all_items={3}
                    />
                </div>
            )}
        </div>
    );
});

export default DetailPage;
