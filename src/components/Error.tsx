type PropsType = {
  errorMessage: string;
};

const Error = ({ errorMessage }: PropsType) => {
  return (
    <div className='rounded border-2 border-rose-600 bg-rose-100 p-2 font-medium text-rose-600'>
      {errorMessage}
    </div>
  );
};

export default Error;
