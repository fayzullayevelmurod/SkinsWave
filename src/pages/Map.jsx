import { Link } from 'react-router-dom';

export const Map = () => {
  return (
    <>
      <Link className='text-4xl text-white m-5 block' to='/home'>Home</Link>
      <Link className='text-4xl text-white m-5 block' to='/main/transactions'>Transactions</Link>
    </>
  );
};
