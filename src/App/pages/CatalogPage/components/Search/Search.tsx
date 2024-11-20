import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Input from 'components/Input';
import { useCatalogStore } from '../../CatalogStoreContext';
import styles from './Search.module.scss';

const Search = observer(() => {
  const itemsStore = useCatalogStore();
  const navigate = useNavigate();
  const [query, setQuery] = useState(itemsStore.queryModel.searchQuery);

  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const handleSearchClick = useCallback(() => {
    itemsStore.setSearchQuery(query, navigate);
  }, [itemsStore, query, navigate]);

  const updateQuery = useCallback(() => {
    setQuery(itemsStore.queryModel.searchQuery);
  }, [itemsStore.queryModel.searchQuery]);

  useEffect(() => {
    action(updateQuery);
  }, [updateQuery]);

  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <Input value={query} onChange={handleSearchChange} placeholder="Search product" />
      </div>
      <Button onClick={handleSearchClick}>Find now</Button>
    </div>
  );
});

export default Search;
