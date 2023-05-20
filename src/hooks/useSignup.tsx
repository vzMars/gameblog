import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { usePostContext } from './usePostContext';
import { getPosts } from '../services/getPosts';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { dispatch: postDispatch } = usePostContext();

  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://api.gameblog.vzmars.com/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, username, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: 'LOGIN', payload: json.user });
      getPosts(postDispatch);
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
