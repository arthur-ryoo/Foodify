import React, { Component } from 'react';

import userService from '../../utils/userService';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      email: '',
      password: '',
      error: ''
    };
  }

  isFormValid = () => {
    return this.state.email && this.state.password;
  };

  handleChange = event => {
    this.setState({
      error: '',
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { email, password } = this.state;
      await userService.login({ email, password });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push('/restaurants');
      });
    } catch (error) {
      this.setState({
        email: '',
        password: '',
        error: error.message
      });
    }
  };

  render() {
    return (
      <section className={styles.section}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Login Form</legend>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button disabled={!this.isFormValid()} type="submit">
              Login
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default LoginForm;
