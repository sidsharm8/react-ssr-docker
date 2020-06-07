import styled from "styled-components";

export const SearchContainer = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  @media (min-width: 1024px) {
    width: 30%;
  }
  & input {
    height: 25px;
  }
`;

export const SearchLabel = styled.span`
  text-align: left;
  font-weight: 500;
  margin-bottom: 10px;
`;
