import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-32'>{id}</section>
    </main>
  );
};

export default PostDetails;
