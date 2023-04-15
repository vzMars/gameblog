import { PostReducerAction } from '../types';

export const getPosts = async (dispatch: React.Dispatch<PostReducerAction>) => {
  const response = await fetch('http://localhost:5000/api/posts', {
    method: 'GET',
    credentials: 'include',
  });

  const json = await response.json();

  if (response.ok) {
    dispatch({ type: 'SET', payload: json });
  }
};
