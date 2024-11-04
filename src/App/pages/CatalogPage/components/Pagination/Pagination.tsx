import styles from './Pagination.module.scss'
import classNames from 'classnames'
import PreviosIcon from 'components/icons/PreviosIcon'

const Pagination = () => {
    return (
        <ul className={styles.pagination}>
            <li className={classNames(styles.pagination__item, styles.disabled)}>
                <PreviosIcon/>
            </li>
            <li className={classNames(styles.pagination__item, styles.pagination__item_active)}>
                1
            </li>
            <li className={classNames(styles.pagination__item)}>
                2
            </li>
            <li className={classNames(styles.pagination__item)}>
                3
            </li>
            <li className={classNames(styles.pagination__item, styles.disabled)}>
                ...
            </li>
            <li className={classNames(styles.pagination__item)}>
                10
            </li>
            <li className={classNames(styles.pagination__item)}>
                <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.88 31.5599L23.5733 22.8666C24.6 21.8399 24.6 20.1599 23.5733 19.1333L14.88 10.4399" stroke="#151411" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </li>
        </ul>
    )
}

export default Pagination