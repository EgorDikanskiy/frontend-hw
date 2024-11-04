import { OPTIONS } from '../../../../../config/filterOptions';
import Search from '../Search';
import MultiDropdown, { Option } from '../MultiDropdown';
import { useCallback, useState } from 'react';

const Filter = () => {
    const [value, setValue] = useState<Option[]>([]);

    const getTitle = useCallback((values: Option[]) => {
        return values.length === 0 ? 'Filter' : values.map(({ value }) => value).join(', ');
    }, []);

    return (
        <div>
            <Search />
            <MultiDropdown
                options={OPTIONS}
                value={value}
                onChange={setValue}
                getTitle={getTitle}
            />
        </div>
    );
}

export default Filter;