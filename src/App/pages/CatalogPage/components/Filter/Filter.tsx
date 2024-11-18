import Search from '../Search';
import MultiDropdown, { Option } from '../MultiDropdown';
import { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCatalogStore } from '../../CatalogStoreContext';

const Filter = observer(() => {
    const itemsStore = useCatalogStore();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        itemsStore.initializeFilter(new URLSearchParams(location.search), navigate);
    }, [location.search, itemsStore, navigate]);

    const handleCategoryChange = useCallback((selectedOptions: Option[]) => {
        const selectedCategoryId = selectedOptions.length > 0 ? Number(selectedOptions[0].id) : null;
        itemsStore.setSelectedCategory(selectedCategoryId, navigate);
    }, [itemsStore]);

    const getTitle = useCallback((values: Option[]) => {
        return values.length === 0 ? 'Filter' : values.map(({ value }) => value).join(', ');
    }, []);

    return (
        <div>
            <Search />
            <MultiDropdown
                options={itemsStore.categoryOptions}
                value={itemsStore.selectedCategory ? [itemsStore.selectedCategory] : []}
                onChange={handleCategoryChange}
                getTitle={getTitle}
            />
        </div>
    );
});

export default Filter;