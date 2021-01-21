import axios from 'axios';
import { logError } from '../catch.service';

export async function createNewsletter(newPub) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${process.env.API_URL}/newsletter/create/`,
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
      data: newPub,
    });

    if (res.status === 400) {
      throw new Error('bad request: could not save new contact');
    }
    return {
      status: res.status,
    };
    
  } catch (error) {
    return logError(error);
  }
}
