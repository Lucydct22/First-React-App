import styled from "styled-components";

// export const StyledProductsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   width: 100%;
//   background-color: #808080;
// `;

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #fff5ee;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  & > * {
    margin: 1rem;
  }
`;
