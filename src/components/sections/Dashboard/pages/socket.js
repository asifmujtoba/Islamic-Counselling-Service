import io from 'socket.io-client';
import { useSelector } from 'react-redux';

const socket = io({ 
        path: '/bridge',
              
    });

export default socket;
