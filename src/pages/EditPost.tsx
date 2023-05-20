import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PostType } from '../types';
import PostForm from '../components/EditPostForm';
import Loader from '../components/Loader';

const EditPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<PostType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkPostId = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://api.gameblog.vzmars.com/api/posts/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        navigate('/404');
      }

      if (response.ok) {
        setPost(json);
        setIsLoading(false);
      }
    };

    checkPostId();
  }, []);

  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-32'>
        {!isLoading && post ? (
          <PostForm post={post} />
        ) : (
          <div className='text-center'>
            <Loader />
          </div>
        )}
      </section>
    </main>
  );
};

export default EditPost;
