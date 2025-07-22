import {useDispatch, useSelector} from 'react-redux';
import {getUserStatus, postLoginUser, postLogoutUser} from './auth.action';

export const useAuthDetails = () => {
  const dispatch = useDispatch();
  // OPTION 1
  const authState = useSelector(state => state.auth);
  // OPTION 2
  // const isUserLoggedIn = useSelector(state => state.auth?.isUserLoggedIn);
  // const user = useSelector(state => state.auth?.user);
  return {
    getUserStatus: () => {
      console.log('getUserStatus: dispatching from hook');
      return dispatch(getUserStatus());
    },
    postLoginUser: payload => dispatch(postLoginUser(payload)),
    postLogoutUser: () => dispatch(postLogoutUser()),

    isUserLoggedIn: authState?.isUserLoggedIn,
    user: authState?.user,
    // FOR OPTION 2
    // user,
    // isUserLoggedIn,

  };
};
