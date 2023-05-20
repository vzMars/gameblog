import { useAuthContext } from './useAuthContext';
import { usePostContext } from './usePostContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: postDispatch } = usePostContext();

  const logout = async () => {
    const response = await fetch(
      'https://api.gameblog.vzmars.com/api/auth/logout',
      {
        method: 'GET',
        credentials: 'include',
      }
    );

    if (response.ok) {
      dispatch({ type: 'LOGOUT' });
      postDispatch({ type: 'SET', payload: [] });
    }
  };

  return { logout };
};
