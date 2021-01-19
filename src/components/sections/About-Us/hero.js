import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import "react-datepicker/dist/react-datepicker.css";
import Select from '../../elements/Select';
import FormLabel from '../../elements/FormLabel';
import DatePicker from 'react-datepicker';
import { useStateForm } from '../../../hooks';

import './index.scss';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const initialFormState = {
  name: '',
  email: '',
  message: '',
};




const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState([]);

  const { formState, onChange, resetForm } = useStateForm(initialFormState);

  const outerClasses = classNames(
    'features-split section mt-32 pt-32',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const onSubmit =() => {

  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
         
        
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" >
                
                <h3 className="mt-0 mb-12 tt-u ta-c">
                  About US
                  </h3>
                <p className="m-0">
                Islamic Counselling service is a online counselling system that provides Psychological consultation service through online platform. Islamic Counselling Service(ICS) is developed to enhance counselling process for students who go through Mental illness in IIUM and give them solution through Islamic Perspective.This service is mainly for the the students of IIUM who suffers from mental illness and needs consultation to improve their mental condition. </p>
                
              </div>
              <hr className="h-100"/>
              <div className={
                classNames(
                  'mt-12 mb-12 ml-24 center-content-mobile center-content '
                )}>
                    <h3 className="mt-0 mb-12 tt-u ta-c">
                      Our Mission
                    </h3>
                    <address>
                    Our main goal is to Ensure Proper Islamic Counselling for all ther IIUM Students who is in need of psycological consultation. We are privileged to walk alongside our clients as they navigate the uncertainities and challenges of life. In the midst of their present cicurmstances and challenges, we provide support to our clients with care and compassion.
                    </address>
              </div>
            </div>      
                 
           
            <div className="container-sm">
              <form className="form-style-7">
                <ul>
                  <li>
                      <label for="name">Name</label>
                      <input type="text" name="name" maxlength="100"/>
                      <span>Enter your full name here</span>
                  </li>
                  <li>
                      <label for="email">Email</label>
                      <input type="email" name="email" maxlength="100"/>
                      <span>Enter a valid email address</span>
                  </li>
                  <li>
                      <label for="phone">Phone</label>
                      <input type="number" name="phone" maxlength="100"/>
                      <span>Enter a valid phone no.</span>
                  </li>
                  
                  <li>
                      <label for="bio">Message</label>
                      <textarea name="bio" onkeyup="adjust_textarea(this)"></textarea>
                      <span>Say something about yourself</span>
                  </li>
                  <li>
                      <input type="submit" value="Send This" />
                  </li>
                </ul>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;