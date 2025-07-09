import { createContext, useState, useContext } from "react";

const CompareContext = createContext();

export const useCompare = () => useContext(CompareContext);

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (sneaker) => {
    setCompareList((prevList) => {
      const exists = prevList.find(
        (item) => item.id_sneaker === sneaker.id_sneaker
      );
      if (exists) {
        return prevList.filter(
          (item) => item.id_sneaker !== sneaker.id_sneaker
        );
      } else if (prevList.length < 3) {
        return [...prevList, sneaker];
      }
      return prevList;
    });
  };

  return (
    <CompareContext.Provider value={{ compareList, toggleCompare }}>
      {children}
    </CompareContext.Provider>
  );
};
