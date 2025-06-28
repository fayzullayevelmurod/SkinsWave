import { useState } from 'react';

export default function Search({ className }) {
  const [inputValue, setInputValue] = useState('');

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div
      className={`relative sm:bg-[#2d2e3f] bg-[#303047] md:h-10 rounded ${className} sm:w-auto w-[33px] h-[33px]`}
    >
      <svg
        className='absolute top-1/2 -translate-y-1/2 sm:left-4 left-1/2 md:translate-x-0 -translate-x-1/2'
        width='15'
        height='15'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.46992 8.63464L12 11.1641L11.1641 12L8.63464 9.46992C7.69346 10.2244 6.52279 10.6348 5.31653 10.6331C2.38181 10.6331 0 8.25126 0 5.31653C0 2.38181 2.38181 0 5.31653 0C8.25126 0 10.6331 2.38181 10.6331 5.31653C10.6348 6.52279 10.2244 7.69346 9.46992 8.63464ZM8.28493 8.19632C9.03446 7.42525 9.45312 6.39187 9.45161 5.31653C9.45161 3.03219 7.60087 1.18145 5.31653 1.18145C3.03219 1.18145 1.18145 3.03219 1.18145 5.31653C1.18145 7.60087 3.03219 9.45161 5.31653 9.45161C6.39187 9.45312 7.42525 9.03446 8.19632 8.28493L8.28493 8.19632Z'
          fill='#6D6D85'
          className='sm:fill-[#6D6D85] fill-[#C6C5FF]'
        />
      </svg>

      <input
        className='sm:block hidden w-full h-full pt-1 bg-transparent outline-none border-none pl-[35px] text-sm text-white placeholder:text-[#6a6b76]'
        type='text'
        placeholder='Search transactions...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img
        className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer sm:block hidden'
        src='/images/clear.svg'
        alt='clear'
        onClick={handleClear}
      />
    </div>
  );
}
