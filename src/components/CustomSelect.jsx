import { useState, useEffect, useRef } from 'react';

export default function CustomSelect({ options, defaultOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultOption);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        className='flex items-center gap-2 cursor-pointer text-white'
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span className='font-GothamPro'>{selected}</span>
        <svg
          width='9'
          height='5'
          viewBox='0 0 9 5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`opacity-40 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.00008 4.8012L-4.19675e-08 0.960104L0.999843 -3.49698e-07L4.5 3.36104L8.00016 -4.37045e-08L9 0.960104L4.99992 4.8012C4.86732 4.92849 4.6875 5 4.5 5C4.3125 5 4.13268 4.92849 4.00008 4.8012Z'
            fill='white'
          />
        </svg>
      </div>
      <ul
        className={`absolute top-full z-50 mt-2 w-[120px] bg-[#1e1f30] border border-[#757598] rounded-lg shadow-lg overflow-hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {options.map((option) => (
          <li
            key={option}
            className='px-4 py-2 text-white hover:bg-[#2a2b3f] cursor-pointer font-GothamPro text-sm'
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
