import axios from 'axios';
import { logError } from './catch.service';
import { formatAllUsers } from '../helpers/formatUser';

export async function retrieveAllUsers() {
  try {
    const res = await axios.get(`${process.env.API_URL}/users`, {
      headers: {
        accept: 'application/json',
      },
    });
    console.log("res: ", res);
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve all users');
    }
    return formatAllUsers(res.data);
  } catch (err) {
    return logError(err);
  }
}
