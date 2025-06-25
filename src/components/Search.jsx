import { useState } from 'react';

export default function Search() {
  const [inputValue, setInputValue] = useState('');

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className='relative bg-[#2d2e3f] h-10 rounded'>
      <img
        className='absolute top-1/2 -translate-y-1/2 left-4'
        src='/images/search.svg'
        alt='search'
      />
      <input
        className='w-full h-full pt-1 bg-transparent outline-none border-none pl-[35px] text-sm text-white placeholder:text-[#6a6b76]'
        type='text'
        placeholder='Search transactions...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img
        className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer'
        src='/images/clear.svg'
        alt='clear'
        onClick={handleClear}
      />
    </div>
  );
}
