import React from "react";
import { connect } from "react-redux";
import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const WithSpinner = (WrappedComponent) => ( {isLoading, ...otherProps} ) => {
    if(isLoading){
      return (
        <SpinnerOverlay>
           <SpinnerContainer />
         </SpinnerOverlay>
      ) ;
    }else{
      return <WrappedComponent {...otherProps}/>
    }
}

export default WithSpinner;
