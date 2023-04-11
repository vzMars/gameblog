import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { UserType } from '../context/AuthContext';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, username, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      const user: UserType = json.user;
      dispatch({ type: 'LOGIN', payload: { user: user, isLoading: false } });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
