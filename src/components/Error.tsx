type PropsType = {
  errorMessage: string;
};

const Error = ({ errorMessage }: PropsType) => {
  return (
    <div className='rounded border-2 border-error-200 bg-error-300 p-2 font-medium text-error-100'>
      {errorMessage}
    </div>
  );
};

export default Error;
