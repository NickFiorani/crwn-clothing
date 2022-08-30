import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";



const Shop = () => {
  
  return ( 
    <Routes>
    <Route index element={<CategoriesPreview />} />
    <Route path=":category"  /* per accedere al path da un component devo usare : e poi il nome del path */ element={<Category />} />
    </Routes> 

  );
};

export default Shop;
