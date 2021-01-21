import axios from 'axios';
import { logError } from './catch.service';
import { formatAllContact } from '../helpers/formatContact';

export async function retrieveAllContact() {
  try {
    const res = await axios.get(`${process.env.API_URL}/contact`, {
      headers: {
        accept: 'application/json',
      },
    });
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve all contact data');
    }
    return formatAllContact(res.data);
  } catch (err) {
    return logError(err);
  }
}
