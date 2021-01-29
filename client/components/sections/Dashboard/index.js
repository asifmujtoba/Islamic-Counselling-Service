import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from './SideBar';
import {useGetBooking, useGetUpcomingBooking} from '../../../hooks';
import DashContent from './pages/dashboard';

function Dashboard ({}) {

  const dispatch = useDispatch();
  const username = useSelector(state => state.userInfo.username);
  const role = useSelector(state => state.userInfo.type);


  
  const {bookingList} = useGetBooking('all');

  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <>

    <SideBar role={role}/>
    <DashContent username={username} userData={userData} bookingList={bookingList} role={role}/>

    </> 
  );
}

export default Dashboard;