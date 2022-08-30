
import { useContext, Fragment} from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";



const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext); // chiamo la costante categoriesMap grazie all'use context
  return (  
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products}  />)     
       
        })}
   </Fragment>
  );
};

export default CategoriesPreview;