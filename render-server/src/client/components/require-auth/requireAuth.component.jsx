import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (WrappedComponent) => {
  const mapStateToProps = ({ auth }) => ({ auth });
  const RequireAuth = ({ auth, ...otherProps }) => {
      if(auth.current_user){
        return <WrappedComponent {...otherProps}/>
      }else{
        return <Redirect to="/signin" />;
      }
  }

  return connect(mapStateToProps)(RequireAuth);
}
