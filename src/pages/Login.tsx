import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import Error from '../components/Error';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pb-12 pt-32 md:pt-40'>
        <form
          className='mx-auto flex max-w-sm flex-col rounded-md border border-neutral-800 bg-neutral-900 p-4 py-12'
          onSubmit={handleSubmit}
        >
          <h1 className='mb-6 font-lexbold text-4xl'>Login</h1>
          <label className='mb-1'>Email</label>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='mb-6 rounded-md p-2 text-black'
          />
          <label className='mb-1'>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='mb-7 rounded-md p-2 text-black'
          />
          <button
            disabled={isLoading}
            className='mb-6 w-full rounded-md bg-sky-800 px-2.5 py-2 font-lexbold hover:bg-sky-900'
          >
            Sign Up
          </button>
          {error && <Error errorMessage={error} />}
        </form>
      </section>
    </main>
  );
};

export default Login;
