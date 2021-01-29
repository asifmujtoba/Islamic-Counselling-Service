import React from 'react'
import NewsletterTable from './NewsletterTable';


const NewsletterContent = (props) => {

    let data = !(props.newsletter.length ===0) ?
                props.newsletter.map((b, index)=>
                    (
                        <tr>
                            <td key={index}>{b.email}</td>
                        </tr>
                    
                    )
                    ) : <tr><td>No Bookings</td></tr>;
        
    return (
        <div className="page-content">
            <h4 className="mb-32"> All Newsletter Subscribers</h4>
            <br/>
            <br/>
            <NewsletterTable >
                  <tbody>
                  {data}
                  </tbody>
            </NewsletterTable>
             
        </div>
    )
}

export default NewsletterContent;