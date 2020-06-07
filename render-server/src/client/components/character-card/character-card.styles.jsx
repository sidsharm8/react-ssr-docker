import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    background-color: #25252e;
    width: 44%;
    @media (min-width:1024px){
      width:22%;
    }
`;

export const CardProfile = styled.div`
    position: relative;
    height: 200px;
`;

export const CardProfileImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const CardProfileName = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0px;
    width: 100%;
    color: white;
    background-color: black;
    opacity: 0.6;
    height: auto;
`;

export const CardProfileNameText = styled.div`
  font-size: large;
  padding: 5px;
  align-self: flex-start;
`;

export const CardProfileMeta = styled.div`
  align-self: flex-start;
  padding: 0 5px;
  font-size: 12px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  background-color: #353030;
`;

export const CardInfoRow = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  height: 15px;
  border-bottom: 1px solid rgb(68, 68, 68);
`;

export const CardInfoColumn1 = styled.div`
  color: lightgray;
  text-transform: uppercase;
  font-size: 10px;
  text-align: left;
`;

export const CardInfoColumn2 = styled.div`
  color: orange;
  font-size: 10px;
  text-align: right;
`;
