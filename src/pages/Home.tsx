import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { FaGamepad } from 'react-icons/fa';

const Home = () => {
  const { user } = useAuthContext().state;

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
              News
            </Link>
          ) : (
            <>
              <Link
                to='/login'
                className='rounded-md bg-sky-800 p-3 text-xl hover:bg-sky-900'
              >
                Login
              </Link>
              <Link
                to='/signup'
                className='rounded-md bg-sky-800 p-3 text-xl hover:bg-sky-900'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
