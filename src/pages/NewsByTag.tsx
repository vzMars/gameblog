import { useParams } from 'react-router-dom';

const NewsByTag = () => {
  const { tag } = useParams();

  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-32'>
        <h1 className='mb-3 font-lexbold text-3xl'>{tag}</h1>
        <ul></ul>
      </section>
    </main>
  );
};

export default NewsByTag;
