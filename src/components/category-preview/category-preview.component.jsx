import { CategoryPreviewContainer, Preview, Title} from "./category-preview.style";

import ProductCard from "../product-card/product-card.component";

import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
      
        <Title to={title}>{title.toUpperCase()}</Title>
        
      </h2>
      <Preview>
        {
          /* con filer() ogni value false viene escluso e vengono presi solo quelli  true in questo caso gli elementi dell'array che hanno idx minore di 4 */ // l ' _ significa che ignoro l'elemto products
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
