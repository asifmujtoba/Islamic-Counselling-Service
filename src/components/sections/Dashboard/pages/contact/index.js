import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../SideBar';
import ContactContent from './ContactContent';
import {retrieveAllContact} from '../../../../../services/getAllContact.service';


function Contact  () {

  const role = useSelector(state => state.userInfo.type);
  const [contactData, setContactData] = useState([]);
  
  const dataContact = async () => {
    const data = await retrieveAllContact();
    console.log(data)
    setContactData(data);
  }
  
  useEffect(()=>{
    if(contactData.length==0){
      dataContact();
    }
  }),[contactData];
  
  

  return (
    <>
      <SideBar role={role}/>
      <ContactContent contactData={contactData} />
    </>
  );
}

export default Contact;