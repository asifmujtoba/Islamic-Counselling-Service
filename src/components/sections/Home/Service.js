import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const propTypes = {
  ...SectionSplitProps.types
};

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Service = ({
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

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Services'};

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

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
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Stress Related Disorder Consultation
                  </h3>
                <p className="m-0">
                Stress-related disorders can include mental health disorders that are a result of an atypical response to both short and long-term anxiety due to physical, mental, or emotional stress..Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
                 </p>
                
                  
              </div>
              <div className="center">
                    <Image
                  src={require('../../../assets/images/stress.jpg')}
                  alt="Features split 02"
                  width={300}
                  height={250} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Depression Consultancy
                  </h3>
                <p className="m-0">
                Depression is classified as a mood disorder. It may be described as feelings of sadness, loss, or anger that interfere with a person’s everyday activities.Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
               </p>
               
              </div>
              <div className="center">
                <Image
                  src={require('../../../assets/images/depression.jpg')}
                  alt="Features split 02"
                  width={300}
                  height={250} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
                  Anxiety Disorder Consultation
                  </h3>
                <p className="m-0">
                Anxiety disorder is a kind of mental illnesses that cause constant and overwhelming anxiety and fear. The excessive anxiety can make you avoid work, school, family get-togethers, and other social situations that might trigger or worsen your symptoms.Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
                   </p>
                  
              </div>
              <div className="center">
                <Image
                  src={require('../../../assets/images/anxiety.png')}
                  alt="Features split 03"
                  width={300}
                  height={250} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
                  Panic Consultancy
                  </h3>
                <p className="m-0">
                Panic attack is the abrupt onset of intense fear or discomfort that reaches a peak within minutes and includes at least four of the following symptoms: Palpitations, pounding heart, or accelerated heart rate.Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
                </p>
               
              </div>
              <div className="center">
                <Image
                  src={require('../../../assets/images/panic.jpg')}
                  alt="Features split 03"
                  width={300}
                  height={250} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Service.propTypes = propTypes;
Service.defaultProps = defaultProps;

export default Service;