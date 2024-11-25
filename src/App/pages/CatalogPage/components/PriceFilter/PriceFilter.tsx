import classNames from 'classnames';
// import { observer } from 'mobx-react-lite';
import Slider from 'rc-slider';
import React, { useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Button from 'components/Button';
import styles from './PriceFilter.module.scss';

const PriceFilter = ({ onApplyFilter, initialPriceRange, className }) => {
  const [tempPriceRange, setTempPriceRange] = useState(initialPriceRange);

  // Синхронизация состояния с initialPriceRange при изменении props
  useEffect(() => {
    setTempPriceRange(initialPriceRange);
  }, [initialPriceRange]);

  const handleSliderChange = (value) => {
    setTempPriceRange(value); // Обновляем локальное состояние
  };

  const handleApplyClick = () => {
    onApplyFilter(tempPriceRange[0], tempPriceRange[1]); // Применяем фильтры
  };

  return (
    <div className={classNames(className, styles.filter)}>
      <h3 className={styles.title}>Filter by Price</h3>
      <div className={styles.rc_slider__container}>
        <Slider
          trackStyle={{ backgroundColor: '#518581' }}
          railStyle={{ backgroundColor: '#AD7E5C' }}
          handleStyle={{
            borderColor: 'black',
            backgroundColor: '#518581',
            boxShadow: '0 0 0 3px #518581',
          }}
          range
          min={1}
          max={1000}
          value={tempPriceRange}
          onChange={handleSliderChange}
          step={1}
          marks={{
            1: '1',
            1000: '1000',
          }}
        />
      </div>
      <div className={styles.priceRange}>
        <span>Price: ${tempPriceRange[0]}</span> - <span>${tempPriceRange[1]}</span>
      </div>
      <Button onClick={handleApplyClick}>Apply Filter</Button>
    </div>
  );
};

export default PriceFilter;
