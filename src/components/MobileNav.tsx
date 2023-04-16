import { Link } from 'react-router-dom';
import { UserType } from '../types';

type PropsType = {
  user: UserType | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
};

const MobileNav = ({ user, open, setOpen, logout }: PropsType) => {
  return (
    <nav
      className={`${
        !open
          ? 'hidden'
          : 'absolute left-0 right-0 z-10 mx-2.5 mt-2.5 flex flex-col gap-5 rounded-md bg-neutral-900 p-2'
      } border border-neutral-700 sm:left-auto sm:w-64 lg:hidden`}
      onClick={() => setOpen(false)}
    >
      {user ? (
        <>
          <Link to='/news' className='rounded-md p-2 hover:bg-sky-800'>
            News
          </Link>
          <Link
            to={`/user/${user.username}`}
            className='rounded-md p-2 hover:bg-sky-800'
          >
            Profile
          </Link>
          <Link to='/create' className='rounded-md p-2 hover:bg-sky-800'>
            Create Post
          </Link>
          <button
            onClick={() => logout()}
            className='rounded-md p-2 text-left hover:bg-sky-800'
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to='/login' className='rounded-md p-2 hover:bg-sky-800'>
            Login
          </Link>
          <Link to='/signup' className='rounded-md p-2 hover:bg-sky-800'>
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default MobileNav;
