import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from '../../elements/Select';
import BookingModal from '../../layout/BookingModal';
import { useSaveBooking } from './useSaveBooking';
import { useStateForm, useSnackbar } from '../../../hooks';
import './index.scss';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Services = ({
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
  type,
  bookingData = { id: '', time: '', consultant: '', subject: '', message: ''},
  ...props
}) => {

  const initialFormState = {
    date: bookingData.date,
    time: bookingData.time,
    consultant: bookingData.consultant,
    subject: bookingData.subject,
    message: bookingData.message
  };
  
  const { formState, onChange, resetForm } = useStateForm({initialFormState });
  const { displaySnackbar } = useSnackbar();
  
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
    title: 'Our Services',
    paragraph: ''
  };

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);

  };

  const hideModal = () => {
    setShow(false);
    
  };

  const { saveBooking }  =
    useSaveBooking(
      type,
      formState,
      () => {
        resetForm();
        displaySnackbar('success', "You've successfully booked the consultant!");
        hideModal();
      },
      () => {
        displaySnackbar('fail', "Booking Unsuccesful");       
      },
      bookingData.id
    );
  



  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <BookingModal show={show} handleClose={hideModal} handleSubmit={saveBooking}>
            <form className="bookingForm">
              <fieldset>
                <h3>Book this consultant</h3>
                
                <div className="mb-8 form-group">
                  <label className="form-label">Select Date: </label> &nbsp; &nbsp;
                <DatePicker className="date-picker form-input form-input-sm invert-color" placeholderText="Select Date..." name="date" selected={formState.date}   onChange={date => formState.date= date} />
                <br/>
                </div>
                <div className="mb-8 form-group">
                  <label className="form-label">Select Time: </label> &nbsp; &nbsp;
                <Select placeholder="Select Time... " name="time" className="time form-select form-select-sm" value={formState.time} onChange={onChange} >
                  
                  <option value="10AM" >10 AM</option>
                  <option value="11AM">11 AM</option>
                  <option value="12PM">12 PM</option>
                </Select>
                </div>
                <div className="mb-8 form-group">
                  <label className="form-label">Select Consultant: </label> &nbsp; &nbsp;
                  <Select placeholder="Select Consultant..." name="consultant"  className="form-select form-select-sm" value= {formState.consultant} onChange={onChange } >
                  
                  <option value="azhari" >Mizanur Rahman </option>
                  <option value="idris">Idris Ali </option>
                  <option value="sharif">Sharif Ahmed </option>
                </Select>
                
                </div>
                <div className="mb-8 form-group">
                  <label className="form-label">Subject: </label> &nbsp; &nbsp;
                  <Select placeholder="Subject..." name="subject"  className="form-select form-select-sm" value= {formState.subject} onChange={onChange } >
                  
                  <option value="Stress Related Disorder" >Stress Related Disorder</option>
                  <option value="Depression Consultancy">Depression Consultancy</option>
                  <option value="Anxiety Disorder">Anxiety Disorder </option>
                  <option value="Panic Disorder">Panic Disorder </option>
                </Select>
                
                </div>
                <div className="mb-8 form-group">
                <label className="form-label">Message: </label> &nbsp; &nbsp;
                  <textarea
                    placeholder="Message ..."
                    name="message"
                    onChange={onChange}
                    value={formState.message}
                  />
                </div>
              </fieldset>
            </form>
          </BookingModal>
          
        
          <div className={splitClasses}>

            <div className="split-item has-bottom-divider">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Stress Related Disorder Consultation
                  </h3>
                <p className="m-0">
                Stress-related disorders can include mental health disorders that are a result of an atypical response to both short and long-term anxiety due to physical, mental, or emotional stress..Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
                  </p>
                <div className="mt-12 mb-12 center-content-mobile center-content ">
                  <Button onClick={showModal}>Book a Consultant</Button>
                </div>
                  
              </div>
              <div className="center">
                    <Image
                  src={require('../../../assets/images/stress.jpg')}
                  alt="Features split 02"
                  width={300}
                  height={250} />
              </div>
            </div>
            <div className="split-item has-bottom-divider">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Depression Consultancy
                  </h3>
                <p className="m-0">
                Depression is classified as a mood disorder. It may be described as feelings of sadness, loss, or anger that interfere with a person’s everyday activities.Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
                </p>
                <div className="mt-12 mb-12 center-content-mobile center-content ">
                  <Button onClick={showModal}>Book a Consultant</Button>
                </div>
              </div>
              <div className="center">
                <Image
                  src={require('../../../assets/images/depression.jpg')}
                  alt="Features split 02"
                  width={300}
                  height={250} />
              </div>
            </div>
            <div className="split-item has-bottom-divider">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
                  Anxiety Disorder Consultation
                  </h3>
                <p className="m-0">
                Anxiety disorder is a kind of mental illnesses that cause constant and overwhelming anxiety and fear. The excessive anxiety can make you avoid work, school, family get-togethers, and other social situations that might trigger or worsen your symptoms.Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
                  </p>
                  <div className="mt-12 mb-12 center-content-mobile center-content ">
                  <Button onClick={showModal}>Book a Consultant</Button>
                </div>
              </div>
              <div className="center">
                <Image
                  src={require('../../../assets/images/anxiety.png')}
                  alt="Features split 03"
                  width={300}
                  height={250} />
              </div>
            </div>

            <div className="split-item ">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
                  Panic Consultancy
                  </h3>
                <p className="m-0">
                Panic attack is the abrupt onset of intense fear or discomfort that reaches a peak within minutes and includes at least four of the following symptoms: Palpitations, pounding heart, or accelerated heart rate.Our experts from Islamic Counselling Service provides online counselling to students to get over this issue.
                </p>
                <div className="mt-12 mb-12 center-content-mobile center-content ">
                  <Button onClick={showModal}>Book a Consultant</Button>
                </div>
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

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;

export default Services;