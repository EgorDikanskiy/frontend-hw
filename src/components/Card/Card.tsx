import React from 'react';
import styles from './Card.module.scss';
import Text from '../Text';
import Button from '../Button';
import classNames from 'classnames';

export type CardProps = {
    /** Дополнительный classname */
    className?: string,
    /** URL изображения */
    image: string;
    /** Слот над заголовком */
    captionSlot?: React.ReactNode;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Описание карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    contentSlot?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
    /** Слот для действия */
    actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ 
    className = '', 
    image, 
    captionSlot, 
    title, 
    subtitle, 
    contentSlot, 
    onClick, 
    actionSlot,
}) => {

    return (
        <div className={classNames(className, styles.card)}  onClick={onClick}>
            <img src={image} alt="Card" className={styles.card__image} />
            <div className={styles.card__content}>
                {captionSlot && <Text view='p-14' color='secondary' weight='medium' className={styles.card_caption} children={captionSlot}></Text>}
                <Text view='p-20' weight='normal' maxLines={2} children={title} className={styles.card__title}></Text>
                <Text view='p-16' weight={'normal'} maxLines={3} children={subtitle} color='secondary' className={styles.card__subtitle}></Text>
                <div className={styles.card__footer}>
                    {contentSlot && <Text view='p-18' children={contentSlot} weight='bold'></Text>}
                    {actionSlot &&  <Button children={actionSlot}></Button>}
                </div>
            </div>
        </div>
    );
};

export default Card;
