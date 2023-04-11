const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-auto font-kgcs text-white'>
      <section className='mx-auto flex max-w-6xl justify-center px-4 pb-6 pt-16'>
        <p>
          &copy; {currentYear}{' '}
          <a href='https://github.com/vzMars'>Marcos Gonzalez</a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
