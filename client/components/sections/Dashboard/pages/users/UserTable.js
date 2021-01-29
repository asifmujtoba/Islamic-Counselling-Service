import React, {useState} from 'react';
import '../../index.scss';

const UserTable = ({children, ...props}) =>{

  return (
    <div className="table-modal">
      <div className="testimonial-item-content2">
                  {/* {bookingList.length === 0 ? (
                      <p>No bookings available</p>
                      ) : (<p>You have total {bookingList.length} bookings</p>)} */}
                    <table>
                    <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  {children}
                
                  </table>
                  </div>
        
          
    </div>
  );
};

export default UserTable;