import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';
import { FaGamepad } from 'react-icons/fa';
import React from 'react';

const Home = () => {
  const { user } = useAuthContext();
  const { login, isLoading } = useLogin();

  const handleGuestLogin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    await login("mike@gmail.com", "Mike123!");
  };

  return (
    <main className='m-auto font-lexreg text-white'>
      <section className='mx-auto flex max-w-6xl flex-col items-center justify-center px-4 pt-32 md:pt-40'>
        <FaGamepad className='text-sky-800' size={120} />
        <p className='mb-6 max-w-lg text-center text-xl md:text-2xl'>
          GameBlog is dedicated to serving the interests of today’s
          entertainment enthusiast. With video game, television, film, and
          comics news, GameBlog is the ultimate entertainment destination.
        </p>
        <div className='flex space-x-5 font-bold'>
          {user ? (
            <Link
              to='/news'
              className='rounded-md bg-sky-800 p-3 text-xl hover:bg-sky-900'
            >
              Latest News
            </Link>
          ) : (
            <>
              <button
                disabled={isLoading}
                className='rounded-md bg-sky-800 p-3 text-xl hover:bg-sky-900'
                onClick={handleGuestLogin}
              >
                Guest Login
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
