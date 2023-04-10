import { Link } from 'react-router-dom';
import { UserType } from '../context/AuthContext';

type PropsType = {
  user: UserType | null;
};

const Nav = ({ user }: PropsType) => {
  return (
    <nav className='hidden h-12 items-center space-x-6 text-lg lg:flex'>
      {user ? (
        <>
          <Link to='/profile' className='hover:text-sky-800'>
            Profile
          </Link>
          <Link to='/create' className='hover:text-sky-800'>
            Create New Post
          </Link>
          <Link to='/logout' className='hover:text-sky-800'>
            Logout
          </Link>
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
