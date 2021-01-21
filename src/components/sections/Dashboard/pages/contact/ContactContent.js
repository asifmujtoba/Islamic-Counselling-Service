import React from 'react'
import ContactTable from './ContactTable';

const ContactContent = (props) => {
      let data =  !(props.contactData === 0) ?
       props.contactData.map((p, index) =>
            ( 
                  <tr>
                    <td key={index}>{p.name}</td>
                    <td key={index}>{p.email}</td>
                    <td key={index}>{p.phone}</td>
                    <td key={index}>{p.message}</td>
                  </tr>
              
              )
            ) : <tr><td>No Bookings</td></tr>;

    return (
        <div className="page-content">
             <h4>ALL CONTACT DATA</h4>
             <br/>
             <br/> 

            <ContactTable>
              {data}
            </ContactTable>
        </div>

    )
}

export default ContactContent;