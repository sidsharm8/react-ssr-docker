import styled from "styled-components";

export const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 15px;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;
