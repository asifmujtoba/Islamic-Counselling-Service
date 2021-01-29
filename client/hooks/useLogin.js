import { useDispatch } from 'react-redux';
// import { userLogin } from '../services';
import authenticationSvc from '../services/authentication';
import { setUserData } from '../actions';

export const useLogin = (formState, handleSuccess, handleFailure) => {
  const { userLogin } = authenticationSvc;
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const loginRes = await userLogin(formState);
    if (loginRes.status === 200) {
      const fullUser = {
        ...loginRes.data.user,
        token: loginRes.data.token,
      };
      console.log(fullUser);
      localStorage.setItem('user', JSON.stringify(fullUser));
      dispatch(setUserData(fullUser));
      handleSuccess();
    } else {
      handleFailure();
    }
  };

  return { onSubmit };
};
