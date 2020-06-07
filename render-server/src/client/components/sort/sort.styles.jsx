import styled from "styled-components";

export const SortContainer = styled.div`
  display: flex;
  margin-top: 15px;
  padding: 0 15px;
  @media (min-width: 1024px) {
    width: 25%;
    align-self: flex-end;
  }
`;

export const SortLabel = styled.label`
  width: 100%;
  & select {
    width: 100%;
  }
`;
