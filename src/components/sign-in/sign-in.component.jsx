import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I Already Have An Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input value='Submit Form' type='submit' />
        </form>
      </div>
    );
  }
}

export default SignIn;
