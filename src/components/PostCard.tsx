import { formatDistanceToNow } from 'date-fns';
import { PostType } from '../types';
import { Link } from 'react-router-dom';

type PropsType = {
  post: PostType;
};

const PostCard = ({ post }: PropsType) => {
  return (
    <li className='mx-auto mb-4 max-w-sm overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 sm:flex sm:max-w-6xl sm:flex-col md:flex-row'>
      <img
        src={post.image}
        alt={post.title}
        className='object-cover sm:w-full md:w-96'
      />
      <div className='p-2 sm:flex sm:flex-col'>
        <Link to={`/news/${post._id}`}>
          <h2 className='font-lexbold text-lg hover:text-sky-800 sm:mb-3 sm:text-2xl'>
            {post.title}
          </h2>
        </Link>
        <p className='mb-2 text-neutral-400 sm:mb-6'>
          {post.content.slice(0, 150)}...
        </p>
        <div className='flex items-center justify-between sm:mt-auto'>
          <div>
            <p>
              By{' '}
              <Link to={`/user/${post.user.username}`}>
                {post.user.username}
              </Link>
            </p>
            <span className='text-sm text-neutral-500'>
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>

          <Link to={`/tag/${post.tag}`}>
            <span className='rounded-sm bg-sky-800 p-2 hover:bg-sky-900'>
              {post.tag}
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
