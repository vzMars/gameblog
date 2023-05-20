import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { usePostContext } from './usePostContext';
import { getPosts } from '../services/getPosts';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { dispatch: postDispatch } = usePostContext();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://api.gameblog.vzmars.com/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
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

  return { login, isLoading, error };
};
