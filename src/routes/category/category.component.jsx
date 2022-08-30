import { CategoryContainer, CategoryTitle} from "./category.style";

import ProductCard from "../../components/product-card/product-card.component";

import { useParams } from "react-router-dom"; // metodo per accedere al routing dal child  usando : nel relativo path del parent component
import { useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    //<> shorthand per il tag Fragment di react e lo chiudo con </>
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
