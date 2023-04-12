import { Link } from 'react-router-dom';
import { UserType } from '../context/AuthContext';

type PropsType = {
  user: UserType | null;
  logout: () => Promise<void>;
};

const Nav = ({ user, logout }: PropsType) => {
  return (
    <nav className='hidden h-12 items-center space-x-6 text-lg lg:flex'>
      {user ? (
        <>
          <Link to='/news' className='hover:text-sky-800'>
            Latest News
          </Link>
          <Link to='/profile' className='hover:text-sky-800'>
            Profile
          </Link>
          <Link to='/new' className='hover:text-sky-800'>
            Create Post
          </Link>
          <button
            onClick={() => logout()}
            className='rounded-md bg-sky-800 px-2.5 py-2 hover:bg-sky-900'
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to='/login' className='hover:text-sky-800'>
            Login
          </Link>
          <Link
            to='/signup'
            className='rounded-md bg-sky-800 px-2.5 py-2 hover:bg-sky-900'
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
