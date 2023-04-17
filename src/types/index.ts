import { ReactElement } from 'react';

export type ChildrenType = { children?: ReactElement | ReactElement[] };

// AuthContext
export type UserType = {
  id: string;
  email: string;
  username: string;
};

export type AuthStateType = {
  user: UserType | null;
  isLoading: boolean;
};

export type AuthContextType = {
  user: UserType | null;
  isLoading: boolean;
  dispatch: React.Dispatch<AuthReducerAction>;
};

export type AuthReducerAction =
  | { type: 'LOGIN'; payload: UserType }
  | { type: 'LOGOUT' };

// PostContext
export type PostUserType = {
  _id: string;
  username: string;
};

export type PostType = {
  _id: string;
  title: string;
  content: string;
  image: string;
  cloudinaryId: string;
  tag: string;
  user: PostUserType;
  createdAt: string;
};

export type PostStateType = {
  posts: PostType[];
  isLoading: boolean;
};

export type PostContextType = {
  posts: PostType[];
  isLoading: boolean;
  dispatch: React.Dispatch<PostReducerAction>;
};

export type PostReducerAction =
  | { type: 'SET'; payload: PostType[] }
  | { type: 'CREATE'; payload: PostType }
  | { type: 'UPDATE'; payload: PostType }
  | { type: 'DELETE'; payload: PostType };
