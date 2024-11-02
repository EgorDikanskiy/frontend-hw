import { useState } from "react";
import Input from '../Input';
import Button from '../../../../../components/Button';
import styles from './Search.module.scss'


const Search = () => {
    const [search, setSearch] = useState('');
    

    return (
        <div className={styles.search}>
            <div className={styles.search__input}>
            <Input
                value={search}
                onChange={setSearch}
                placeholder="Search product"/>
            </div>
            <Button>Find now</Button>
        </div>
    );
}

export default Search