import React from 'react';
import { Input } from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onInputChange = (e) => {
    if (e.target && e.target.name) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username && !this.state.password) {
      this.props.onLogin({
        username: this.state.username,
        password: this.state.password,
      });
    }
  }

  render() {
    return (
      <form
        style={{
          display: 'block',
          margin: '0 auto',
        }}
        onSubmit={this.onSubmit}
      >
        <h1>
          Please login
        </h1>
        {this.props.error &&
          <p style={{ color: 'red' }}>
            {this.props.error}
          </p>
        }
        <Input
          label="Email"
          type="text"
          name="username"
          onChange={this.onInputChange}
        />
        <br />
        <br />
        <Input
          label="password"
          type="password"
          name="password"
          onChange={this.onInputChange}
        />
        <br />
        <br />
        <div>
          <Button
            type="submit"
            label="Login"
            disabled={this.props.loading}
          />
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
  onLogin: React.PropTypes.func.isRequired,
};

export default Login;
