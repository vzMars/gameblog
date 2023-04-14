import { createContext, useReducer, useEffect, ReactElement } from 'react';
import Loader from '../components/Loader';

export type UserType = {
  id: string;
  email: string;
  username: string;
};

export type AuthStateType = {
  user: UserType | null;
  isLoading: boolean;
};

const initialState: AuthStateType = {
  user: null,
  isLoading: true,
};

export type ReducerAction =
  | { type: 'LOGIN'; payload: UserType }
  | { type: 'LOGOUT' };

export type AuthContextType = {
  user: UserType | null;
  isLoading: boolean;
  dispatch: React.Dispatch<ReducerAction>;
};

const initAuthContextState: AuthContextType = {
  user: initialState.user,
  isLoading: initialState.isLoading,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthContextType>(initAuthContextState);

export const authReducer = (
  state: AuthStateType,
  action: ReducerAction
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

export type ChildrenType = { children?: ReactElement | ReactElement[] };

export const AuthProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const getAuthStatus = async () => {
      const response = await fetch('http://localhost:5000/api/auth', {
        method: 'GET',
        credentials: 'include',
      });

      const json = await response.json();

      if (!response.ok) {
        dispatch({ type: 'LOGOUT' });
      }

      if (response.ok) {
        const user: UserType = json.user;
        dispatch({ type: 'LOGIN', payload: user });
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
