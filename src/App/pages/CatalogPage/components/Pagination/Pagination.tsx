// src/components/CatalogPage/components/Pagination.tsx
import classNames from 'classnames';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NextIcon from 'components/icons/NextIcon';
import PreviosIcon from 'components/icons/PreviosIcon';
import { updateQueryParams } from '../../../../../config/updateQueryParams';
import { useCatalogStore } from '../../CatalogStoreContext';
import styles from './Pagination.module.scss';

const Pagination = observer(() => {
  const catalogStore = useCatalogStore();
  const { paginationModel } = catalogStore;
  const navigate = useNavigate();

  const handleNextPageChange = action(() => {
    if (paginationModel.currentPage < paginationModel.totalPage) {
      // Проверка крайней страницы
      paginationModel.setNextPage();
      catalogStore.queryModel.page = paginationModel.currentPage; // Синхронизация с queryModel
      updateQueryParams(navigate, { page: paginationModel.currentPage });
    }
  });

  const handlePrevPageChange = action(() => {
    if (paginationModel.currentPage > 1) {
      // Проверка крайней страницы
      paginationModel.setPrevPage();
      catalogStore.queryModel.page = paginationModel.currentPage; // Синхронизация с queryModel
      updateQueryParams(navigate, { page: paginationModel.currentPage });
    }
  });

  const handlePageClick = action((page: number) => {
    if (page !== paginationModel.currentPage) {
      // Проверка активной страницы
      paginationModel.setCurrentPage(page);
      catalogStore.queryModel.page = page; // Синхронизация с queryModel
      updateQueryParams(navigate, { page });
    }
  });

  const paginationItems = paginationModel.getPaginationItems();

  return (
    <ul className={styles.pagination}>
      <li className={classNames(styles.pagination__item)} onClick={handlePrevPageChange}>
        <PreviosIcon disabled={paginationModel.currentPage === 1} />
      </li>
      {paginationItems.map((page, index) =>
        typeof page === 'number' ? (
          <li
            key={index}
            className={classNames(styles.pagination__item, {
              [styles.pagination__item_active]: page === paginationModel.currentPage,
            })}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </li>
        ) : (
          <li key={index} className={classNames(styles.pagination__item, styles.disabled)}>
            {page}
          </li>
        ),
      )}
      <li className={classNames(styles.pagination__item)} onClick={handleNextPageChange}>
        <NextIcon disabled={paginationModel.currentPage === paginationModel.totalPage} />
      </li>
    </ul>
  );
});

export default Pagination;
