import React from 'react';
import { withTranslation } from 'react-i18next';

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
    const { t } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="text-black dark:text-white">
          {t('login')}
          <input
            type="text"
            placeholder={t('enter-login')}
            name="login"
            value={login}
            onChange={this.handleChange}
            className="w-full h-10 bg-white border border-borderLabelForm dark:border-yellow-500 px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <label>
          {t('email')}
          <input
            type="email"
            placeholder={t('enter-email')}
            name="email"
            value={email}
            onChange={this.handleChange}
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-yellow-500 px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <label>
          {t('password')}
          <input
            type="password"
            placeholder={t('enter-password')}
            name="password"
            value={password}
            onChange={this.handleChange}
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-yellow-500 px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>

        <button type="submit" className="btn-sign-up-form">
          {t('registration')}
        </button>
      </form>
    );
  }
}

export default withTranslation()(RegisterForm); // Оборачиваем RegisterForm в HOC withTranslation
