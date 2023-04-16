import { createContext, useReducer, useEffect, ReactElement } from 'react';
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
};

const initPostContextState: PostContextType = {
  posts: initialState.posts,
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
      };
    case 'CREATE':
      if (!action.payload) {
        throw new Error('action.payload missing in CREATE action');
      }

      return {
        posts: [action.payload, ...state.posts],
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
    }
  }, []);

  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
