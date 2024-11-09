import Card from "components/Card";
import Text from "components/Text";
import { Link } from "react-router-dom";
import styles from './Catalog.module.scss'
import { observer } from "mobx-react-lite";

interface Card {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}

interface CatalogProps {
    cards: Card[] | any;
    start_point: number;
    lenght_info: boolean;
    count_items: number;
}


const Catalog: React.FC<CatalogProps> = observer(({ cards, start_point, lenght_info, count_items }) => {
    return (
        <div>
            {lenght_info &&
                <div>
                    <Text className={styles.catalog__total} view='title' weight='bold'>Total Product <span className={styles.catalog__amount}>{cards?.length}</span></Text>
                </div>
            }
            <div className={styles.catalog}>
                {cards && cards?.slice(start_point, start_point + count_items).map((card?: { id: number; title: string; description: string; images: Array<string>; price: number; }) => (
                    <div key={card?.id}>
                        <Link to={`/detail/${card?.id}`}><Card title={card?.title} subtitle={card?.description} image={card?.images[0]} contentSlot={'$' + card?.price} actionSlot='Add to Cart'></Card></Link>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Catalog;