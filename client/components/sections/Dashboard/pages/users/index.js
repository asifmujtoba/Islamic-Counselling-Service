import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../SideBar';
import UserContent from './UserContent';
import {retrieveAllUsers} from '../../../../../services/getAllUser.service';


function Users  () {

  const role = useSelector(state => state.userInfo.type);
  const [userData, setUserData] = useState([]);
  
  const dataUser = async () => {
    const data = await retrieveAllUsers();
    setUserData(data);
  }
  
  useEffect(()=>{
    if(userData.length==0){
      dataUser();
    }
  }),[userData];
  
  

  return (
    <>
      <SideBar role={role}/>
      <UserContent userData={userData} />
    </>
  );
}

export default Users;