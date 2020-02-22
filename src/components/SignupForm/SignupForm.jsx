import React, { Component } from 'react';
import styles from './SignupForm.module.css';

class SignupForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  //빈 칸에 적을 때 바로 변경되도록
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //제출 후 다시 폼 안에 있는 텍스트를 빈 칸으로 변경
  handleSubmit = event => {
    event.preventDefault();
    this.setState(this.getInitialState());
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <fieldset>
          <legend>Signup Form</legend>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <label htmlFor="passwordConf">Password Confirmation</label>
          <input
            id="passwordConf"
            name="passwordConf"
            type="password"
            value={this.state.passwordConf}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default SignupForm;
