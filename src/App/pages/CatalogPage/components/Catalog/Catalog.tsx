import Card from "components/Card";
import Text from "components/Text";
import { Link } from "react-router-dom";
import styles from './Catalog.module.scss'

interface Card {
    id: any;
    title: string;
    description: string;
    images: string[];
    price: string;
}

interface CatalogProps {
    cards: Card[];
    count_items: number;
    lenght_info: boolean;
}


const Catalog: React.FC<CatalogProps> = ({ cards, count_items, lenght_info }) => {
    return (
        <div>
            {lenght_info &&
                <div>
                    <Text className={styles.catalog__total} view='title' weight='bold'>Total Product <span className={styles.catalog__amount}>{cards.length}</span></Text>
                </div>
            }
            <div className={styles.catalog}>
                {cards.slice(0, count_items).map((card: { id: any; title: string; description: string; images: Array<string>; price: string; }) => (
                    <div key={card.id}>
                        <Link to={`/detail/${card.id}`}><Card title={card.title} subtitle={card.description} image={card.images[0]} contentSlot={'$' + card.price} actionSlot='Add to Cart'></Card></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;