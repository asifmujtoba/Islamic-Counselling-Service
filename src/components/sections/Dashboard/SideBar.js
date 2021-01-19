import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Svg from '../../../assets/images/svg';
import { useLogOff } from '../../../hooks';
import './index.scss';

const SideBar= (props) => {
  
  const { logOff } = useLogOff();


  return (
    <>
    <Svg/>
    <header className="collapsed page-header">
      
        <Link to="/">
          <img className="logo" src="../../../src/assets/images/logo.png"/>
        </Link>

        <ul className="admin-menu">
      
      <li>
        <Link to="/dashboard"> 
          <svg>
            <use href="#pages"></use>
          </svg>
          <span>Dashboard</span>
        </Link>
      </li>
      {props.role ==="Admin" && (
      <li>
        <Link to="/users">
          <svg>
            <use href="#users"></use>
          </svg>
          <span>Users</span>
        </Link>
      </li>)}
      {/* {props.role ==="Admin" && (
        <li>
        <Link to="/feedback">
          <svg>
            <use href="#collection"></use>
          </svg>
          <span>Feedback</span>
        </Link>
      </li>
      )} */}
      {props.role ==="Admin" && (
      <li> 
        <Link to="/bookings">
            <svg>
              <use href="#trends"></use>
            </svg>
            <span>Bookings</span>
        </Link>
      </li>
      )}
      

      <li>
        <a className=" logout button button-secondary button-wide-mobile button-sm" onClick={logOff}>
          Log off
        </a>
      </li>
      
      </ul>

    </header>
    </>
  );
}

export default SideBar;