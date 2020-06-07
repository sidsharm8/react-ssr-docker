import React from 'react';
import { connect } from "react-redux";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from "axios";
import fetchCurrentUser from "../../redux/user/user.actions";
import { SignInContainer } from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event){
    event.preventDefault();

    const { email, password } = this.state;
    const { fetchCurrentUser } = this.props;

    const axiosInstance = axios.create({
      withCredentials: true,
      baseURL: "/api"
    });
    try{
      const res = await axiosInstance.post("/auth/login", { email, password });
      fetchCurrentUser();
    }catch(err){
      if(err.response.status == 401){
        alert("Invalid email or password")
      }else{
        alert("Some internal error occurred");
      }
    }
  };

  handleChange(event){
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
          </div>
        </form>
      </SignInContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser : () => dispatch(fetchCurrentUser())
});
export default connect(null, mapDispatchToProps)(SignIn);
