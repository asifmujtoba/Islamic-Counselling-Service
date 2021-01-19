import React, {useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import { useStateForm, useLogin, useSnackbar } from '../../../hooks';

import Button from '../../elements/Button';
import Input from '../../elements/Input';


const propTypes = {
    ...SectionProps.types
}
  
const defaultProps = {
    ...SectionProps.defaults
}



const initialFormState = {
    username: '',
    password: '',
  };

const Login =({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) =>{
    const history = useHistory();
    const { displaySnackbar } = useSnackbar();

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

      const { onSubmit } = useLogin(
        formState,
        () => {
          resetForm();
          displaySnackbar('success', 'Welcome!');
          <Redirect to="/dashboard"/>
        },
        () => {
          displaySnackbar('error', 'Please verify the credentials');
        }
      );

      return (
        <section
          {...props}
          className={outerClasses, "log-in-section"}
        >
          <div className="container-sm">
            <div className={innerClasses}>
              <div className="card-login">
              <header>
          <p>Log In</p>
        </header>

        <form onSubmit={onSubmit}>
          <div className="body">
           
            <Input
              name="username"
              placeholder="Username "
              value={formState.username}
              onChange={onChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formState.password}
              onChange={onChange}
            />
          </div>
          <div className="footer">
            <Button color="primary" type="submit">Log In</Button>
            <a onClick={() => history.push('/registration')}>
              Don't have an account? Create one
            </a>
          </div>
        </form>
               
              </div>
              
            </div>
          </div>
        </section>
      );
}

export default Login;