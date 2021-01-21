import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../SideBar';
import NewsletterContent from './NewsletterContent';
import { retrieveAllNewsletter } from '../../../../../services/newsletter/retrieveAllNewsletter.service';

const Newsletter = () => {
    const role = useSelector(state => state.userInfo.type);
    const [newsData, setNewsData] = useState([]);

    const dataNews = async () => {
        const data = await retrieveAllNewsletter();
        setNewsData(data);
    }

    useEffect(()=>{
        if(newsData.length==0){
        dataNews();
        }
    }),[newsData];

    
  return (
    <>
    <SideBar role={role}/>
    <NewsletterContent newsletter = {newsData}/>
    </>
  );
}

export default Newsletter;