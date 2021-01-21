import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from './../elements/Input';
import {useSaveNewsletter} from '../../hooks/useSaveNewsletter';
import {useStateForm, useSnackbar } from '../../hooks';
import '../../index.scss';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}
const initialFormState = {
  email: '',
};


const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const { formState, onChange, resetForm } = useStateForm(initialFormState);
  const {displaySnackbar} = useSnackbar();
  const { saveNewsletter }  =
  useSaveNewsletter(
    formState,
    () => {
      resetForm();
      displaySnackbar('success', "You've successfully subscribed to our Newsletter");
    },
    () => {
      displaySnackbar('error', " Unsuccesful");       
    }
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Subscribe to our newsletter
              </h3>
          </div>
          <div className="cta-action">
            <form className="newsletter">
            <Input id="newsletter" name="email" type="email" label="Subscribe" labelHidden hasIcon="right" onChange={onChange}  value={formState.email}  placeholder="Your email">
             
            </Input>
            <button type="submit" onClick={saveNewsletter}><svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;