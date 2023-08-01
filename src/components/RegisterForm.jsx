import React from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

class RegisterForm extends React.Component {
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
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className="text-black dark:text-white">
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-yellow-500 px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-yellow-500 px-2 rounded-md focus:outline-none mt-2 mb-5"
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
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-yellow-500 px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>

        <button type="submit" className="btn-sign-up-form">
          Registration
        </button>
      </form>
    );
  }
}

export default RegisterForm;
