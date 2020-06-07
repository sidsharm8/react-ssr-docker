import styled from "styled-components";

export const SelectedFilterContainer = styled.label`
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SelectedFilterTitle = styled.h2`
  align-self: flex-start;
`;

export const SelectedFiltersChild = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SelectedFilterLabel = styled.div`
  height: 30px;
  border-radius: 10%;
  padding: 5px;
  background-color: #9e9999;
  color: white;
  margin-right: 7px;
`;

export const RemoveFilter = styled.span`
  &::before {
    content: "x";
    margin-left: 5px;
    cursor: pointer;
  }
`;
