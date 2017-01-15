import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  postLogin(e) {
    return fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify({
        loginUsername: this.state.username,
        loginPassword: this.state.loginPassword
      })
    })
    .then(handleError)
    .then( (data) => {
      localStorage.setItem('token', data)
    })
    .then(() => {
      browserHistory.push('/home')
    })
  }

  trackLoginInput(e) {
    console.log(e)
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className={styles['']}>
        <div className="log-in">
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.trackLoginInput.bind(this)}
          />
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.trackLoginInput.bind(this)}
          />
        </div>
      <button><Link className="signup-button" to="/create"> Sign Up </Link></button>
      <button><Link className="login-button" to="/home"> Log In </Link></button>
      </div>
    );
  }
}

export default LogIn;
