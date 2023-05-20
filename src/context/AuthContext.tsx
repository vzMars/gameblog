import { createContext, useReducer, useEffect, ReactElement } from 'react';
import Loader from '../components/Loader';
import {
  AuthStateType,
  AuthContextType,
  AuthReducerAction,
  ChildrenType,
} from '../types';

const initialState: AuthStateType = {
  user: null,
  isLoading: true,
};

const initAuthContextState: AuthContextType = {
  user: initialState.user,
  isLoading: initialState.isLoading,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthContextType>(initAuthContextState);

export const authReducer = (
  state: AuthStateType,
  action: AuthReducerAction
): AuthStateType => {
  switch (action.type) {
    case 'LOGIN':
      if (!action.payload) {
        throw new Error('action.payload missing in LOGIN action');
      }

      return {
        user: action.payload,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const getAuthStatus = async () => {
      const response = await fetch('https://api.gameblog.vzmars.com/api/auth', {
        method: 'GET',
        credentials: 'include',
      });

      const json = await response.json();

      if (!response.ok) {
        dispatch({ type: 'LOGOUT' });
      }

      if (response.ok) {
        dispatch({ type: 'LOGIN', payload: json.user });
      }
    };

    getAuthStatus();
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : (
        <AuthContext.Provider value={{ ...state, dispatch }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};
