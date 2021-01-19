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

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

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

  const outerClasses = classNames(
    'features-split section mt-32 pt-32',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    hasBgColor && 'has-bg-color',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Consultants',
    paragraph: ''
  };

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
        <div className={innerClasses}  >
          <SectionHeader data={sectionHeader} className="center-content" />
         
        
          <div className={splitClasses}>

            <div className="split-item">
                
              <div className="split-item-content center-content-mobile center reveal-from-left" >
                
                <h3 className="content-center">
                  Mizanur Rahman Azhari
                  </h3>
                <p className="content-center ">
                Mizanur Rahman Azhari  is a Bangladeshi speaker, scholar and preacher of Islam.He is also a reknown motivational speaker in bangladesh. He has contributed to Islam by calling people to Allah.Currently he is completing his PostGradute studies in IIUM.</p>
                <div className="mt-12 mb-12 center-content-mobile center-content ">
                </div>
                  
              </div>
              <div className="center">
                    <Image
                  src={require('../../../assets/images/azhari.jpg')}
                  alt="Consultant 1"
                  width={300}
                  height={250} />
              </div>
            </div>
            </div>
            <div className={innerClasses+  ' has-top-divider'} >
            <div className={splitClasses}>
            <div className="split-item">
                
              <div className="split-item-content center-content-mobile center reveal-from-left" >
                
                <h3 className="content-center">
                  Idris Ali
                  </h3>
                <p className="content-center ">
                Idris Ali is an reknown islamic motivational speaker in bangladesh.He has been an motivational speaker for almost 3 years now.He helps people to overcome mental illness through his speeches.</p>
                <div className="mt-12 mb-12 center-content-mobile center-content ">
                </div>
                  
              </div>
              <div className="center">
                    <Image
                  src={require('../../../assets/images/idris.jpeg')}
                  alt="Consultant 2"
                  width="300px"
                  height="250px" />
              </div>
            </div>
          
          
            </div>

          </div>
          <div className={innerClasses+  ' has-top-divider'} >
            <div className={splitClasses}>
            <div className="split-item">
                
              <div className="split-item-content center-content-mobile center reveal-from-left" >
                
                <h3 className="content-center">
                  Sharif Ahmed
                  </h3>
                <p className="content-center ">
                Sharif Ahmed is an  islamic scholar who has completed his postgraduate degree on Islamic studies.He is known for his  speeches that motivates and enlightens people about life in Islamic perspective. </p>
                <div className="mt-12 mb-12 center-content-mobile center-content ">
                </div>
                  
              </div>
              <div className="center">
                    <Image
                  src={require('../../../assets/images/sharif.jpeg')}
                  alt="Consultant 2"
                  width="300px"
                  height="250px" />
              </div>
            </div>
          
          
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