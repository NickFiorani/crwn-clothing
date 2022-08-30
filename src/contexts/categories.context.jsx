import { createContext, useState, useEffect } from "react"; // per attivare l'use context devo andare a wrappareil tag ProductsProvider nell'index.js

import {
  addCollectionAndDocuments, // metodo per scrivere dentro il db i nostri oggetti 
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

// import PRODUCTS from '../shop-data.json'; //con react importando un file JSON associo una variabile al valore di quell'import (PRODUCTS)

/* import SHOP_DATA from "../shop-data"; */ // commentato una volta che ho aggiunto gli objects all'interno del db

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [ categoriesMap, setCategoriesMap ] = useState({});

  /*   useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);// passo al metodo il nome della collection che 
    //voglio creare nel db , e l'array di data con all'interno gli object da iterare e aggiungere
  }, []); */ // commentato una volta che ho aggiunto gli objects all'interno del db per non farlo ripetere

  useEffect(() => {
    // quando chiamo una funzione async dentro un useEffect devo crearne una nuova dentro il callback e assegnarli async invece
    // di mettere async direttamente nel useEffect poi chiamarla sempre dentro il callback alla fine
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>      
      {children}
    </CategoriesContext.Provider>
  );
};
