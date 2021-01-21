import axios from 'axios';
import { logError } from '../catch.service';
import { formatAllNewsletter } from '../../helpers/formatNewsletter';

export async function retrieveAllNewsletter() {
  try {
    const res = await axios.get(`${process.env.API_URL}/newsletter`, {
      headers: {
        accept: 'application/json',
      },
    });
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve all Newsletter data');
    }
    return formatAllNewsletter(res.data);
  } catch (err) {
    return logError(err);
  }
}
