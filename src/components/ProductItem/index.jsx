import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  StyledProductItemContainer,
  StyledProductImage
} from './style'

export const ProductItem = ({ product }) => {
  const { image, price, title} = product;
  const {cart, setCart} = useContext(CartContext)

  const addProduct = () => {
    setCart([...cart, product])
  };

  return (
    <StyledProductItemContainer>
      <StyledProductImage alt={title} src={image} />
      <p>{title}</p>
      <p>${price}</p>
      <button onClick={addProduct}>Add product</button>
    </StyledProductItemContainer>
  );
};
