import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { usePostContext } from '../hooks/usePostContext';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';

const NewsByTag = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tagName, setTagName] = useState('');
  const { tag } = useParams();
  const { posts } = usePostContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getTag = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://api.gameblog.vzmars.com/api/posts/tag/${tag}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        navigate('/404');
      }

      if (response.ok) {
        setTagName(json);
        setIsLoading(false);
      }
    };

    getTag();
  }, []);

  const tagPosts = posts.filter((post) => post.tag === tagName);

  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-32'>
        {isLoading ? (
          <div className='text-center'>
            <Loader />
          </div>
        ) : (
          <>
            <h1 className='mb-3 font-lexbold text-3xl'>
              {tagName.toUpperCase().slice(0, 1) + tagName.slice(1)}
            </h1>
            <ul>
              {tagPosts.map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
};

export default NewsByTag;
