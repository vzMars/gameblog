import { createContext, useReducer, useEffect, ReactElement } from 'react';
import Loader from '../components/Loader';
import { useAuthContext } from '../hooks/useAuthContext';
import { getPosts } from '../services/getPosts';
import {
  PostStateType,
  PostContextType,
  PostReducerAction,
  ChildrenType,
} from '../types';

const initialState: PostStateType = {
  posts: [],
  isLoading: true,
};

const initPostContextState: PostContextType = {
  posts: initialState.posts,
  isLoading: initialState.isLoading,
  dispatch: () => {},
};

export const PostContext = createContext<PostContextType>(initPostContextState);

export const postReducer = (
  state: PostStateType,
  action: PostReducerAction
): PostStateType => {
  switch (action.type) {
    case 'SET':
      if (!action.payload) {
        throw new Error('action.payload missing in SET action');
      }

      return {
        posts: action.payload,
        isLoading: false,
      };
    case 'CREATE':
      if (!action.payload) {
        throw new Error('action.payload missing in CREATE action');
      }

      return {
        posts: [action.payload, ...state.posts],
        isLoading: false,
      };
    case 'UPDATE':
      if (!action.payload) {
        throw new Error('action.payload missing in UPDATE action');
      }

      return {
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        isLoading: false,
      };
    case 'DELETE':
      if (!action.payload) {
        throw new Error('action.payload missing in DELETE action');
      }

      return {
        posts: state.posts.filter((post) => post._id !== action.payload._id),
        isLoading: false,
      };
    default:
      return state;
  }
};

export const PostProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getPosts(dispatch);
    } else {
      dispatch({ type: 'SET', payload: [] });
    }
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : (
        <PostContext.Provider value={{ ...state, dispatch }}>
          {children}
        </PostContext.Provider>
      )}
    </>
  );
};
