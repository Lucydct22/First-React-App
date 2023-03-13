import styled from "styled-components";

// export const StyledHeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background-color: #008b8b;
// `;

// export const StyledIconContainer = styled.span`
//   font-size: 2rem;
// `;

// export const StyledSearchInput = styled.input`
//   width: 300px;
//   padding: 0.5rem;
// `;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #008b8b;

  & > * {
    margin: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 10rem;
  }
`;

export const StyledIconContainer = styled.span`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(90deg);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const StyledSearchInput = styled.input`
  width: 300px;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem rgba(0, 139, 139, 0.5);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
