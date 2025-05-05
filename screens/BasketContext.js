import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product, quantity) => {
    setBasket((prevBasket) => {
      const existingProduct = prevBasket.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevBasket, { ...product, quantity }];
      }
    });
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);