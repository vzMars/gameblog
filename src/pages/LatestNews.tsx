import { usePostContext } from '../hooks/usePostContext';
import PostCard from '../components/PostCard';

const LatestNews = () => {
  const { posts } = usePostContext();
  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-32'>
        <h1 className='mb-3 font-lexbold text-3xl'>Latest News</h1>
        <ul>
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default LatestNews;
