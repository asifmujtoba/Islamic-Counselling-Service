import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../SideBar';
import {useGetBooking} from '../../../../../hooks';
import BookingContent from './BookingContent';

const Bookings = () => {

  const username = useSelector(state => state.userInfo.username);
  const role = useSelector(state => state.userInfo.type);


  return (
    <>
    <SideBar role={role}/>
    <BookingContent username={username} />
    </>
  );
}

export default Bookings;