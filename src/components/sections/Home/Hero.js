import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Modal from '../../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
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

 
  const outerClasses = classNames(
    'center mt-32 mb-32 pt-32',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner ',
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <div className={splitClasses}>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <h1 className="mt-28 mb-16 reveal-from-bottom" data-reveal-delay="200">
                DONT DE PUSHED BY PROBLEMS<br/> <span className="text-color-primary">BE LED BY YOUR DREAMS</span>
              </h1>
              <div className="container-xs">
                <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  All phychological consultation through Islamic perspective.  
                  </h3>
                <div className="center-content reveal-from-bottom" data-reveal-delay="600">
                  
                    <Button tag="a" color="primary" wideMobile href="/#/services">
                      Book Now
                      </Button>
                </div>
              </div>
            </div>
          

       
          <div className={
            classNames(
              'split-item-image center-content-mobile reveal-from-bottom',
              imageFill && 'split-item-image-fill'
            )}
            data-reveal-container=".split-item">
            <Image
              src={require('../../../../src/assets/images/home-bg.png')}
              alt="Features split 02"
              width={528}
              height={396} />
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