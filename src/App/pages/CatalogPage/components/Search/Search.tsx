import { useEffect, useState } from "react";
import Input from 'components/Input';
import Button from 'components/Button';
import styles from './Search.module.scss';
import { observer } from "mobx-react-lite";
import itemsStore from "../../../../../stores/items-store";
import { useLocation, useNavigate } from "react-router-dom";
import { updateQueryParams } from '../../../../../config/updateQueryParams';


const Search = observer(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState(itemsStore.searchQuery);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryFromUrl = searchParams.get('search') || '';
        setQuery(queryFromUrl);
        itemsStore.setSearchQuery(queryFromUrl);
        itemsStore.applyFilter();
    }, [location.search]);

    const handleSearchChange = (value: string) => {
        setQuery(value);
        itemsStore.setSearchQuery(value);
    };

    const handleSearchClick = () => {
        if (query !== '') {
            itemsStore.applyFilter();
            updateQueryParams(navigate, { search: query });
        } else {
            itemsStore.applyFilter();
            updateQueryParams(navigate, { search: null });
        }
    };
    

    return (
        <div className={styles.search}>
            <div className={styles.search__input}>
            <Input
                value={itemsStore.searchQuery}
                onChange={handleSearchChange}
                placeholder="Search product"/>
            </div>
            <Button onClick={handleSearchClick}>Find now</Button>
        </div>
    );
});

export default Search