import Card from '../../../components/Card'
import styles from './DetailPage.module.scss'
import Header from '../../../components/Header'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import DemoCarousel from './components/Slider'
import { useParams, useNavigate, Link } from 'react-router-dom'
import useAxios from 'axios-hooks'
import Loader from '../../../components/Loader';
import React from 'react'
import LoaderStyles from '../../../styles/Styles.module.scss'



const DetailPage = () => {
    const { id } = useParams();

    const [{ data: item_info, loading, error }] = useAxios(
        `https://api.escuelajs.co/api/v1/products/${id}`
    );

    const [{ data: cards}] = useAxios(
        'https://api.escuelajs.co/api/v1/products'
    );

    const navigate = useNavigate();

    if (error) return <p>Error!</p>

    return (
        <>
        {loading && <div className={LoaderStyles.loader_container}><Loader/></div>}
        {!loading && <>
            <Header/>
        <div className='container'>
            <button className={styles.nav_detail} onClick={() => navigate(-1)}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Text className={styles.nav_detail__text} view='p-20'>Назад</Text>
            </button>
            <div className={styles.item__info}>
                <div className={styles.item__info__images}>
                    {item_info.images && <DemoCarousel images={item_info.images}/>}
                </div>
                <div>
                    <Text view='title' weight='bold'>{item_info.title}</Text>
                    <Text className={styles.item__info__description} view='p-20' color='secondary'>{item_info.description}</Text>
                    <Text className={styles.item__info__price} view='title' weight='bold'>{'$' + item_info.price}</Text>
                    <div className={styles.buttons}>
                        <Button>Buy Now</Button>
                        <Button className={styles.buttons__cart}>Add to Cart</Button>
                    </div>
                </div>
            </div>
            <Text className={styles.subtitle} view='title' weight='bold'>Related Items</Text>
            {cards && <div className={styles.related__items}>
                {cards.slice(0, 3).map((card: { id: any; title: string; description: string; images: Array<string>; price: string; }) => (
                    <div key={card.id}>
                    <Link to={`/detail/${card.id}`}><Card title={card.title} subtitle={card.description} image={card.images[0]} contentSlot={'$' + card.price} actionSlot='Add to Cart'></Card></Link>
                </div>
                ))}
            </div>}
        </div>
        </>
        }
        </>
    )
}

export default DetailPage