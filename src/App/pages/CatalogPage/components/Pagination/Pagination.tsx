import styles from './Pagination.module.scss';
import classNames from 'classnames';
import PreviosIcon from 'components/icons/PreviosIcon';
import NextIcon from 'components/icons/NextIcon';
import { observer } from 'mobx-react-lite';
import paginationModel from '../../../../../stores/pagination-model';
import { updateQueryParams } from '../../../../../config/updateQueryParams';
import { useNavigate } from 'react-router-dom';

const Pagination = observer(() => {
    const navigate = useNavigate();

    const handleNextPageChange = () => {
        paginationModel.nextPage();
        updateQueryParams(navigate, { page: paginationModel.currentPage });
    };

    const handlePrevPageChange = () => {
        paginationModel.prevPage();
        updateQueryParams(navigate, { page: paginationModel.currentPage });
    };

    const getPaginationItems = () => {
        const { currentPage, totalPage } = paginationModel;
        const pages = [];

        if (totalPage <= 5) {
            // Если страниц 5 или меньше, отображаем их все
            for (let i = 1; i <= totalPage; i++) {
                pages.push(i);
            }
        } else {
            // Первая страница
            pages.push(1);

            // Добавляем "..." перед текущей страницей, если нужно
            if (currentPage > 3) {
                pages.push("...");
            }

            // Добавляем текущую страницу и две соседние
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPage - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Добавляем "..." после текущей страницы, если нужно
            if (currentPage < totalPage - 2) {
                pages.push("...");
            }

            // Последняя страница
            pages.push(totalPage);
        }

        return pages;
    };

    const paginationItems = getPaginationItems();

    return (
        <ul className={styles.pagination}>
            <li className={classNames(styles.pagination__item)} onClick={() => handlePrevPageChange()}>
                <PreviosIcon disabled={paginationModel.currentPage === 1}/>
            </li>
            {paginationItems.map((page, index) =>
                typeof page === 'number' ? (
                    <li
                        key={index}
                        className={classNames(styles.pagination__item, {
                            [styles.pagination__item_active]: page === paginationModel.currentPage,
                        })}
                        onClick={() => {
                            paginationModel.setCurrentPage(page);
                            updateQueryParams(navigate, { page });
                        }}
                    >
                        {page}
                    </li>
                ) : (
                    <li key={index} className={classNames(styles.pagination__item, styles.disabled)}>
                        {page}
                    </li>
                )
            )}
            <li className={classNames(styles.pagination__item)} onClick={() => handleNextPageChange()}>
                <NextIcon disabled={paginationModel.currentPage === paginationModel.totalPage}/>
            </li>
        </ul>
    )
});

export default Pagination;