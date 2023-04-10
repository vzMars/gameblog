import { Link } from 'react-router-dom';
import { UserType } from '../context/AuthContext';

type PropsType = {
  user: UserType | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ user, open, setOpen }: PropsType) => {
  return (
    <nav
      className={`${
        !open
          ? 'hidden'
          : 'absolute left-0 right-0 z-10 mx-2.5 mt-2.5 flex flex-col gap-5 rounded-md bg-neutral-900 p-2'
      } sm:left-auto sm:w-64 lg:hidden`}
      onClick={() => setOpen(false)}
    >
      {user ? (
        <>
          <Link to='/profile' className='rounded-md p-2 hover:bg-sky-800'>
            Profile
          </Link>
          <Link to='/create' className='rounded-md p-2 hover:bg-sky-800'>
            Create New Post
          </Link>
          <Link to='/logout'>Logout</Link>
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
