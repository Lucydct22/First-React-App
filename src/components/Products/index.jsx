import { ProductItem } from "../ProductItem";
import {
  StyledProductsContainer
} from './style';

export const Products = ({products}) => {
  return (
      <StyledProductsContainer>
        {
          products.map((product) => (
              <ProductItem key={product.id} product={product}/>
            ))
        }
      </StyledProductsContainer>
  );
};