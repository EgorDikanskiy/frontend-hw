import { useEffect, useState, useCallback } from "react";
import Input from 'components/Input';
import Button from 'components/Button';
import styles from './Search.module.scss';
import { observer } from "mobx-react-lite";
import { useCatalogStore } from '../../CatalogStoreContext';
import { useNavigate } from "react-router-dom";
import { action } from "mobx";

const Search = observer(() => {
    const itemsStore = useCatalogStore();
    const navigate = useNavigate();
    const [query, setQuery] = useState(itemsStore.queryModel.searchQuery);

    const handleSearchChange = useCallback((value: string) => {
        setQuery(value);
    }, []);

    const handleSearchClick = useCallback(() => {
        itemsStore.setSearchQuery(query, navigate);
    }, [itemsStore, query]);

    useEffect(action(() => {
        setQuery(itemsStore.queryModel.searchQuery);
    }), [itemsStore.queryModel.searchQuery]);

    return (
        <div className={styles.search}>
            <div className={styles.search__input}>
                <Input
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search product"
                />
            </div>
            <Button onClick={handleSearchClick}>Find now</Button>
        </div>
    );
});

export default Search;