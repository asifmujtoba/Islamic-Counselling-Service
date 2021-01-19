import React from 'react'
import UserTable from './UserTable';

const UserContent = (props) => {
      let data =  !(props.userData === 0) ?
       props.userData.map((p, index) =>
            ( 
                  <tr>
                    <td key={index}>{p.firstName}</td>
                    <td key={index}>{p.lastName}</td>
                    <td key={index}>{p.username}</td>
                    <td key={index}>{p.type}</td>
                  </tr>
              
              )
            ) : <tr><td>No Bookings</td></tr>;


    return (
        <div className="page-content">
             <h4>ALL USER DATA</h4>

            <UserTable>
              {data}
            </UserTable>
        </div>

    )
}

export default UserContent;