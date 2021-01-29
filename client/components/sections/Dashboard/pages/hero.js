import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../../utils/SectionProps';
import '../index.scss';
import {useGetBooking} from '../../../../hooks';
import Button from '../../../elements/Button';
import TableModal from './TableModal';
import Users from './users';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

function Hero  ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  username,
  userData,
  role,
  ...props
}) {

  const outerClasses = classNames(
    'testimonial section',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap2',
    pushLeft && 'push-left'
  );


 
  const {bookingList} = useGetBooking('all');
 
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);

  };

  const hideModal = () => {
    setShow(false);
    
  };
  const onSubmit = () => {

  }
  var count= 0;
  const dateNow = Date.now();

  let data =  !(userData.booking === 0) && !(bookingList.length ===0) ?
  bookingList.map((b)=>
    userData.booking.map((p, index) =>
       (b._id === p) && ( Date.parse(b.date) >= dateNow) && ( 
         count++
        )
      )) : <tr><td>No Bookings</td></tr>;
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item2 reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content2">
                <h5 className="testimonial-item-name2 text-color-high">{role !="Admin"? <>Your Bookings</>: <>Bookings</>}</h5>
                {role != "Admin" ? (
                  userData.booking.length === 0 ? (
                    <p>No booking available</p>
                    ) : (<p>You have total {userData.booking.length}{(role ==="Admin")? (<>sessions</>): (<>bookings</>)} </p>)
                ) : (bookingList.length === 0 ? (
                  <p>No booking available</p>
                  ) : (<p>There are total {bookingList.length} bookings</p>)

                  )
                }
                {/* {userData.booking.length === 0 ? (
                    <p>No booking available</p>
                    ) : (<p>You have {userData.booking.length} upcoming bookings</p>)}

                {bookingList.length === 0 ? (
                    <p>No bookings available</p>
                    ) : (<p>You have total {bookingList.length} bookings</p>)} */}
                </div>
                
              </div>
            </div>

            <div className="tiles-item2 reveal-from-bottom">
            <div className="tiles-item-inner">
                <div className="testimonial-item-content2">
                <h5 className="testimonial-item-name2 text-color-high">Upcoming Sessions</h5>
                {userData.booking.length === 0 ? (
                    <p>No sessions available</p>
                    ) : (<p>You have {count} upcoming sessions</p>)}

                  
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