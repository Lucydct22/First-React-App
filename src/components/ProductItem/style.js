import styled from "styled-components";

// export const StyledProductItemContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 350px;
//   height: 500px;
//   justify-content: space-between;
//   margin-bottom: 5rem;
//   background-color: #dcdcdc;
// `;

// export const StyledProductImage = styled.img`
//   width: 100%;
//   height: 70%;
// `;

export const StyledProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
  justify-content: space-between;
  margin-bottom: 5rem;
  padding: 2rem;
  border: 1px solid #a0a0a0;
  background-color: #008b8b;

  p {
    font-size: 1.2rem;
    color: #333333;
  }
`;

export const StyledProductImage = styled.img`
  width: 100%;
  height: 70%;

  :hover {
    filter: brightness(90%);
  }
`;
