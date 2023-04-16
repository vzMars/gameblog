import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostContext } from '../hooks/usePostContext';
import Error from '../components/Error';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = usePostContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);
    formData.append('tag', tag);

    if (file) {
      formData.append('file', file);
    }

    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: 'CREATE', payload: json });
      navigate('/news');
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-32 md:pt-40'>
        <form
          className='mx-auto flex max-w-xl flex-col rounded-md border border-neutral-800 bg-neutral-900 p-4 py-12'
          onSubmit={handleSubmit}
        >
          <h1 className='mb-6 font-lexbold text-4xl'>Create Post</h1>
          <label className='mb-1' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id='title'
            placeholder='New post title here...'
            className='mb-6 rounded-md border border-neutral-800 bg-black p-2 text-white focus:outline-none'
          />
          <label className='mb-1' htmlFor='content'>
            Content
          </label>
          <textarea
            cols={30}
            rows={10}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            id='content'
            placeholder='Write your post content here...'
            className='mb-6 rounded-md border border-neutral-800 bg-black p-2 text-white focus:outline-none'
          />
          <label className='mb-1' htmlFor='file'>
            Upload Cover Image
          </label>
          <input
            className='mb-6 h-10 rounded-md border border-neutral-800 bg-black text-white file:h-full file:cursor-pointer file:border-none file:bg-sky-800 file:font-lexbold file:text-white file:outline-none file:hover:bg-sky-900 focus:outline-none'
            type='file'
            onChange={onFileChange}
            id='file'
          />
          <fieldset className='mb-6'>
            <legend>Tag</legend>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='tag'
                value='gaming'
                id='gaming'
                onChange={(e) => setTag(e.target.value)}
              />
              <label>Gaming</label>
            </p>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='tag'
                value='movies'
                id='movies'
                onChange={(e) => setTag(e.target.value)}
              />
              <label>Movies</label>
            </p>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='tag'
                value='tv'
                id='tv'
                onChange={(e) => setTag(e.target.value)}
              />
              <label>Tv</label>
            </p>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='tag'
                value='tech'
                id='tech'
                onChange={(e) => setTag(e.target.value)}
              />
              <label>Tech</label>
            </p>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='tag'
                value='comics'
                id='comics'
                onChange={(e) => setTag(e.target.value)}
              />
              <label>Comics</label>
            </p>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='tag'
                value='anime'
                id='anime'
                onChange={(e) => setTag(e.target.value)}
              />
              <label>Anime</label>
            </p>
          </fieldset>

          <button
            disabled={isLoading}
            className='mb-6 w-full rounded-md bg-sky-800 px-2.5 py-2 font-lexbold hover:bg-sky-900'
          >
            Create
          </button>
          {error && <Error errorMessage={error} />}
        </form>
      </section>
    </main>
  );
};

export default CreatePost;
