import React, {useState} from 'react';
import '../../index.scss';

const ContactTable = ({children, ...props}) =>{

  return (
    <div className="table-modal">
      <div className="testimonial-item-content2">
                  {/* {bookingList.length === 0 ? (
                      <p>No bookings available</p>
                      ) : (<p>You have total {bookingList.length} bookings</p>)} */}
                    <table>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone No.</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  {children}
                
                  </table>
                  </div>
        
          
    </div>
  );
};

export default ContactTable;