import React from 'react';
import { getProducts } from 'api/getProducts';

const handleButtonClick = () => {
  console.log(getProducts({}));
};

const Test = () => {
  return <button onClick={handleButtonClick}>Тест</button>;
};

export default Test;
