import { PostType } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';
import { FaTrash, FaEdit } from 'react-icons/fa';

type PropsType = {
  post: PostType;
};

const PostDetailsCard = ({ post }: PropsType) => {
  const { user } = useAuthContext();
  const { dispatch } = usePostContext();
  const navigate = useNavigate();

  const deletePost = async (id: string) => {
    const response = await fetch(
      `https://api.gameblog.vzmars.com/api/posts/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE', payload: json });
      navigate('/news');
    }
  };

  return (
    <div className='mx-auto mb-4 max-w-3xl overflow-hidden rounded-md border border-neutral-800 bg-neutral-900'>
      <img src={post.image} alt={post.title} className='w-full object-cover' />
      <div className='flex flex-col p-2'>
        <h2 className='font-lexbold text-2xl hover:text-sky-800'>
          {post.title}
        </h2>
        <div className='flex flex-col'>
          <p>
            By{' '}
            <Link to={`/user/${post.user.username}`}>{post.user.username}</Link>
          </p>
          <span className='text-sm text-neutral-500'>
            {formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>
        <p className='my-4 whitespace-pre-line text-neutral-200'>
          {post.content}
        </p>
        <div className='flex items-center justify-between'>
          <Link to={`/tag/${post.tag}`} className='pb-2'>
            <span className='mb-4 rounded-sm bg-sky-800 p-2 hover:bg-sky-900'>
              {post.tag}
            </span>
          </Link>
          {user && user.id === post.user._id && (
            <div className='mb-6 flex space-x-2'>
              <Link to={`/edit/${post._id}`}>
                <FaEdit className='cursor-pointer self-start text-2xl text-sky-800 hover:text-sky-900 md:text-3xl' />
              </Link>
              <FaTrash
                className='cursor-pointer self-start text-2xl text-sky-800 hover:text-sky-900 md:text-3xl'
                onClick={() => deletePost(post._id)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetailsCard;
