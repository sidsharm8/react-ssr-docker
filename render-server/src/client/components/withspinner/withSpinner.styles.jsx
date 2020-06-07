import styled from "styled-components";
export const SpinnerOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 10em;
  height: 10em;
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  margin: 60px auto;
  font-size: 10px;

  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.2);
  border-right: 1.1em solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
