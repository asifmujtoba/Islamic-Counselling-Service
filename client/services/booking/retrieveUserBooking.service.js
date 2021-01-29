import axios from 'axios';
import { logError } from '../catch.service';
import { formatUserBooking } from '../../helpers/formatBooking';

export async function retrieveUserBooking() {
  const { username, token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${process.env.API_URL}/booking/${username}`,
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
    });
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve publications');
    }
    return formatUserBooking(res.data);
  } catch (err) {
    return logError(err);
  }

}
