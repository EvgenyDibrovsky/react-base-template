import React from 'react';

const INITIAL_STATE = {
  email: '',
};

class RessetForm extends React.Component {
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
    const { email } = this.state;

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

        <button type="submit" className="btn-sign-up-form">
          Resset Password
        </button>
      </form>
    );
  }
}

export default RessetForm;
