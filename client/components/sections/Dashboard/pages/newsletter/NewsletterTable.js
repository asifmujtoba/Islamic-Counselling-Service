import React from 'react';
import '../../index.scss';

const NewsletterTable = ({children, ...props}) =>{

  return (
    <div className="table-modal">
      <div className="testimonial-item-content2">
                  {/* {bookingList.length === 0 ? (
                      <p>No bookings available</p>
                      ) : (<p>You have total {bookingList.length} bookings</p>)} */}
                    <table>
                    <thead>
                    <tr>
                      <th>Email</th>
                    </tr>
                  </thead>
                  {children}
                
                  </table>
                  </div>
        
          
    </div>
  );
};

export default NewsletterTable;