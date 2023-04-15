import { formatDistanceToNow } from 'date-fns';
import { PostType } from '../types';

type PropsType = {
  post: PostType;
};

const PostCard = ({ post }: PropsType) => {
  return (
    <li className='mx-auto mb-4 max-w-sm overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 md:flex md:max-w-6xl'>
      <img
        src={post.image}
        alt={post.title}
        className='w-full md:w-1/2 md:object-cover'
      />
      <div className='p-2 md:flex md:flex-col'>
        <h2 className='font-lexbold text-lg md:mb-6 md:text-3xl'>
          {post.title}
        </h2>
        <p className='mb-2 text-neutral-400 md:mb-6'>
          {post.content.slice(0, 150)}...
        </p>
        <div className='flex items-center justify-between md:mt-auto'>
          <p>
            By {post.user.username}{' '}
            <span className='ml-1 text-sm text-neutral-500'>
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
              })}
            </span>
          </p>
          <span className='rounded-sm bg-sky-800 p-1'>{post.tag}</span>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
