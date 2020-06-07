import styled from "styled-components";

export const FilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 20px;
`;

export const FilterSectionList = styled.div`
  display: flex;
  text-transform: capitalize;
  flex-direction: column;
`;

export const FilterSectionTitle = styled.h2`
  display: flex;
  text-transform: capitalize;
`;

export const FilterSectionListItem = styled.div`
  display: flex;
  & label {
    text-align: left;
  }
`;
