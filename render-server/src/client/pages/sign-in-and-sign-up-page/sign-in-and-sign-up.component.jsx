import React from 'react';
import { connect } from "react-redux";
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import { Redirect } from 'react-router-dom';

const SignInAndSignUpPage = ({ auth }) => {
  return auth.current_user ? <Redirect to="/characters" /> : (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}
const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(SignInAndSignUpPage);
