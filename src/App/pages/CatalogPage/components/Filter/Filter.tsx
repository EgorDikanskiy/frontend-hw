import Search from '../Search';
import MultiDropdown, { Option } from '../MultiDropdown';
import { useCallback, useEffect, useState } from 'react';
import itemsStore from '../../../../../stores/items-store';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../../../../config/updateQueryParams';

const Filter = observer(() => {
    const [value, setValue] = useState<Option[]>([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        itemsStore.getCategoriesAction();

        const searchParams = new URLSearchParams(location.search);
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl) {
            itemsStore.setSelectedCategory(Number(categoryFromUrl));
            itemsStore.applyFilter();
        }
    }, [location.search]);

    const handleCategoryChange = (selectedOptions: Option[]) => {
        setValue(selectedOptions);

        if (selectedOptions.length > 0) {
            const selectedCategoryId = Number(selectedOptions[0].id);
            itemsStore.setSelectedCategory(selectedCategoryId);
            itemsStore.applyFilter();
            updateQueryParams(navigate, { category: selectedCategoryId });
        } else {
            itemsStore.setSelectedCategory(null);
            itemsStore.applyFilter();
            updateQueryParams(navigate, { category: null });
        }
    };

    const getTitle = useCallback((values: Option[]) => {
        return values.length === 0 ? 'Filter' : values.map(({ value }) => value).join(', ');
    }, []);

    const categoryOptions = itemsStore.categories?.state === "fulfilled"
        ? itemsStore.categories.value.map(category => ({
            id: category.id,
            value: category.name,
            key: String(category.id)
        }))
        : [];

    return (
        <div>
            <Search />
            <MultiDropdown
                options={categoryOptions}
                value={value}
                onChange={handleCategoryChange}
                getTitle={getTitle}
            />
        </div>
    );
});

export default Filter;