import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import './index.scss';

// custom hooks
import {
  useStateForm,
  useSnackbar,
  useValidateUsername,
  useRegistration,
} from '../../../hooks';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Select from '../../elements/Select';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const initialFormState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  type: ''
};

const Registration = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const history = useHistory(); // hook for manage react router

  // hook for manage form state
  const { formState, onChange, resetForm } = useStateForm(initialFormState);

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  
  // display func parameters: type snackbar and label
  const { displaySnackbar, hideSnackbar } = useSnackbar();

  // hook paramaters: handleUsernameAvailable, handleUsernameTaken
  const {
    handleValidateUsername, // func to trigger the validation
    statusUsernameAvailable, // return current status of validation
  } = useValidateUsername(hideSnackbar, () => {
    displaySnackbar('error', 'User name already taken!');
  });

  // formState, handleSuccess, handleRailure
  const { onSubmit } = useRegistration(
    formState, // this is a reference type
    () => {
      resetForm();
      displaySnackbar('success', 'User registered successfully!');
      history.push('/'); // move to main page
    },
    () => {
      displaySnackbar('error', 'Error in registration :(');
    }
  );

  return (
    <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <div className={outerClasses, "registration-section"}>
        <div className="container-sm">
            <div className={innerClasses}>
      <div className="card-login">
        <header>
          <p>Registration</p>
        </header>

        <form onSubmit={onSubmit}>
          <div className="body">
            <Input type="hidden" value="password" />
            <p>First name:</p>
            <Input
              name="firstName"
              placeholder="first name ..."
              value={formState.firstName}
              onChange={onChange}
            />
            <p>Last name:</p>
            <Input
              name="lastName"
              placeholder="last name ..."
              value={formState.lastName}
              onChange={onChange}
            />

            <p>Username</p>
            <Input
              name="username"
              placeholder="user name ..."
              className={`${
                statusUsernameAvailable === false
                  ? 'usernameTaken'
                  : statusUsernameAvailable === true && 'usernameAvailable'
              }`}
              value={formState.username}
              onChange={onChange}
              onBlur={handleValidateUsername}
              autoComplete="new-password"
            />

            <p>Password</p>
            <Input
              name="password"
              type="password"
              placeholder="password ..."
              value={formState.password}
              onChange={onChange}
              autoComplete="new-password"
            />

            <Select name="type" placeholder="Select Role: " color="black" className="form-select-sm" value={formState.type} onChange={onChange} >
                  <option value="User" >User</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Admin">Admin</option>
              </Select>
          </div>
          <div className="footer">
            <Button color="primary" lbl="Register" type="submit">Sign Up</Button> 
            <a onClick={() => history.push('/login')}>
              Already have an account?
            </a>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
    </>
  );
};
Registration.propTypes = propTypes;
Registration.defaultProps = defaultProps;

export default Registration;
