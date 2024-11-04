import Text from "components/Text";
import Button from "components/Button";
import styles from "./ItemInfo.module.scss"

export type ItemInfoProps = {
    title: string;
    description: string;
    price: string;
};

const ItemInfo: React.FC<ItemInfoProps> = ({title, description, price}) => {
    return (
        <div>
            <Text view='title' weight='bold'>{title}</Text>
            <Text className={styles.item__description} view='p-20' color='secondary'>{description}</Text>
            <Text className={styles.item__price} view='title' weight='bold'>{'$' + price}</Text>
            <div className={styles.buttons}>
                <Button>Buy Now</Button>
                <Button className={styles.buttons__cart}>Add to Cart</Button>
            </div>
        </div>
    );
};

export default ItemInfo;