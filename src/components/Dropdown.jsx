import { useState } from 'react';

// Reusable Dropdown component for selecting options
const Dropdown = ({ options, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <div
        className={`flex items-center gap-1 sm:text-[15px] text-sm py-[10px] px-[14px] ${isOpen && 'bg-[#615FA6]'} rounded-[4px] cursor-pointer select-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className='mr-1'
          src={selectedOption.imageSrc}
          alt={`${selectedOption.label} icon`}
        />
        <span>{selectedOption.label}</span>
        <svg
          width='9'
          height='5'
          viewBox='0 0 9 5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`opacity-40 transform transition-transform ${
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
      <div
        className={`bg-[#615FA6] p-[15px] rounded-[4px] space-y-5 absolute top-full mt-[6px] origin-top transition-transform duration-200 z-[100] w-full ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        {options.map((option) => (
          <div
            key={option.id}
            className='flex items-center gap-[6px] sm:text-[15px] text-sm cursor-pointer hover:opacity-80'
            onClick={() => handleSelect(option)}
          >
            <img src={option.imageSrc} alt={`${option.label} icon`} />
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
