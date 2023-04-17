import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { usePostContext } from '../hooks/usePostContext';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profileName, setProfileName] = useState('');
  const { username } = useParams();
  const { posts } = usePostContext();
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/user/${username}`,
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
        setProfileName(json);
        setIsLoading(false);
      }
    };

    getProfile();
  }, [location]);

  const profilePosts = posts.filter(
    (post) => post.user.username === profileName
  );

  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-32'>
        {isLoading ? (
          <div className='text-center'>
            <Loader />
          </div>
        ) : (
          <>
            <h1 className='mb-3 font-lexbold text-3xl'>{profileName}</h1>
            <ul>
              {profilePosts.map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
};

export default Profile;
