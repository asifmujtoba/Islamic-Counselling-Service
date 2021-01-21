import React, {useState} from 'react';


const TableModal = ({children, ...props}) =>{

  return (
    <div className="table-modal">
      <div className="testimonial-item-content2">
                  {/* {bookingList.length === 0 ? (
                      <p>No bookings available</p>
                      ) : (<p>You have total {bookingList.length} bookings</p>)} */}
                    <table>
                    <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      {props.role ==="User" ? 
                      (<th>Consultant Name</th>
                      ): (<th>Student Name</th>)
                      }
                      
                      <th>Subject</th>
                      {props.from ==="booking" ? 
                      (<><th>Message</th>
                      <th>User</th></>): (<></>)
                      }
                      <th></th>
                    </tr>
                  </thead>
                  {children}
        
                  </table>
                  </div>
        
          
    </div>
  );
};

export default TableModal;