import React from 'react'
import {useGetBooking} from '../../../../../hooks';
import TableModal from '../TableModal';


const UserContent = ({
    username,
}) => {
    const {bookingList} = useGetBooking('all');
    let date;

    let data = !(bookingList.length ===0) ?
                bookingList.map((b, index)=>
                    ( date = new Date(b.date)) && ( 
                    
                        <tr>
                            <td key={index}>{date.toDateString() }</td>
                            <td key={index}>{b.time}</td>
                            <td key={index}>{b.consultant}</td>
                            <td key={index}>{b.subject}</td>
                            <td key={index}>{b.message}</td>
                            <td key={index}>{b.user}</td>
                        </tr>
                    
                    )
                    ) : <tr><td>No Bookings</td></tr>;
        
    return (
        <div className="page-content">
            <h4 className="mb-32">Hi {username.toUpperCase()}, All Bookings Information</h4>
            <TableModal from={"booking"}>
                  <tbody>
                  {data}
                  </tbody>
            </TableModal>
             
        </div>
    )
}

export default UserContent;