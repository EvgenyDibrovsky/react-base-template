import React from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class LoginForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const currentState = { ...this.state };

    this.props.onSubmit(currentState);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="w-full h-10 bg-white border border-borderLabelForm px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="w-full h-10 bg-white border border-borderLabelForm px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>

        <button type="submit" className="btn-sign-up-form">
          Login
        </button>

        <button
          type="button"
          onClick={() => this.props.setSelectedForm('Reset')}
          className="text-textSecondary my-4 text-center block transition-all duration-200 hover:underline"
        >
          Forgot your password?
        </button>
      </form>
    );
  }
}

export default LoginForm;
