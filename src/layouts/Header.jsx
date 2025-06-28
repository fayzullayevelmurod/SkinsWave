import { useState, useEffect, useRef } from 'react';
import assets from '../assets';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('$ USD');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle currency selection
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
  };

  // Toggle mobile menu visibility and manage body overflow
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Manage body overflow based on mobile menu state
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <header className='py-4'>
      <div className='container flex items-center justify-between gap-4'>
        <h2 className='text-white text-xl font-normal'>SkinsWave</h2>
        <ul className='xl:gap-[70px] gap-5 lg:flex items-center hidden'>
          <li>
            <a
              className='flex items-center gap-2 text-white text-xs-base leading-[100%] bg-nav-link-gradient py-4 px-[34px] rounded-xl border-b-[2px] border-[#9882E0]'
              href='#!'
            >
              <img
                className='shadow-img-shadow'
                src={assets.groupIcon}
                alt=''
              />
              <span>Home</span>
            </a>
          </li>
          <li className='xl:-ml-9'>
            <Link
              className='text-[#7D7D9E] hover:text-white duration-300'
              to='/trade-skins'
            >
              Trade Skins
            </Link>
          </li>
          <li>
            <a
              className='text-[#7D7D9E] hover:text-white duration-300'
              href='#!'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className='text-[#7D7D9E] hover:text-white duration-300'
              href='#!'
            >
              Skin Exchange
            </a>
          </li>
          <li>
            <a
              className='text-[#7D7D9E] hover:text-white duration-300'
              href='#!'
            >
              Reviews
            </a>
          </li>
        </ul>
        <div className='flex items-center xl:gap-6 gap-3'>
          <div className='relative' ref={dropdownRef}>
            <div
              className='flex items-center gap-2 cursor-pointer'
              onClick={handleToggleDropdown}
            >
              <img
                className='bg-white rounded-full'
                src={assets.usdFlag}
                alt=''
              />
              <span>{selectedCurrency}</span>
              <img
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                src={assets.arrowDown}
                alt=''
              />
            </div>
            <div
              className={`absolute top-full mt-2 rounded-[3px] bg-[#302851] w-full p-2 space-y-2 z-50 ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <span
                className='block cursor-pointer text-white'
                onClick={() => handleCurrencySelect('$ USD')}
              >
                $ USD
              </span>
              <span
                className='block cursor-pointer text-white'
                onClick={() => handleCurrencySelect('$ EUR')}
              >
                $ EUR
              </span>
              <span
                className='block cursor-pointer text-white'
                onClick={() => handleCurrencySelect('$ GBP')}
              >
                $ GBP
              </span>
            </div>
          </div>
          <button
            className='w-[36px] h-[36px] rounded-[3px] bg-[#302851] relative xl:hidden block'
            onClick={handleToggleMobileMenu}
          >
            <img
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[2px]'
              src='/images/hamburger.svg'
              alt=''
            />
          </button>
          <a
            className='lg:flex hidden items-center gap-[10px] w-[212px] h-[52px] justify-center text-white bg-btn-bg bg-no-repeat bg-[length:100%_100%]'
            href='#!'
          >
            <img src={assets.steamIcon} alt='' />
            <span>Sign in via Steam</span>
          </a>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-[200] w-full bg-[#090C18] h-screen overflow-y-auto overflow-x-hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className='flex items-center justify-between py-[10px] px-[15px]'>
          <h2 className='text-white text-base font-normal'>SkinsWave</h2>
          <button onClick={handleToggleMobileMenu}>
            <img src='/images/close.svg' alt='' />
          </button>
        </div>
        <ul className='py-8 px-[15px]'>
          <li>
            <a
              className='flex items-center justify-between text-xs-base text-white py-6 border-b border-[#D9D9D936]'
              href='#!'
            >
              <span>Home</span>
              <svg
                width='8'
                height='13'
                viewBox='0 0 8 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z'
                  fill='#38383B'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className='flex items-center justify-between text-xs-base text-white py-6 border-b border-[#D9D9D936]'
              href='#!'
            >
              <span>Trade Skins</span>
              <svg
                width='8'
                height='13'
                viewBox='0 0 8 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z'
                  fill='#38383B'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className='flex items-center justify-between text-xs-base text-white py-6 border-b border-[#D9D9D936]'
              href='#!'
            >
              <span
                className='text-transparent bg-clip-text bg-text-gradient'
                style={{ textShadow: '0px 4.77px 18.13px #9A2E1B' }}
              >
                About Us
              </span>
              <svg
                width='8'
                height='13'
                viewBox='0 0 8 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z'
                  fill='#FFD301'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className='flex items-center justify-between text-xs-base text-white py-6 border-b border-[#D9D9D936]'
              href='#!'
            >
              <span>Skin Exchange</span>
              <svg
                width='8'
                height='13'
                viewBox='0 0 8 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z'
                  fill='#38383B'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className='flex items-center justify-between text-xs-base text-white py-6 border-b border-[#D9D9D936]'
              href='#!'
            >
              <span>Reviews</span>
              <svg
                width='8'
                height='13'
                viewBox='0 0 8 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z'
                  fill='#38383B'
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className='px-[15px] pt-1 relative z-10'>
          <div className='h-[266px] bg-[#B3D3ED] -z-10 min-w-[440px] blur-[300px] opacity-[0.18] absolute bottom-[-89px] left-1/2 -translate-x-1/2'></div>
          <a
            className='flex items-center w-full gap-[10px] h-[65px] text-[17px] justify-center text-white bg-btn-bg bg-no-repeat bg-[length:100%_100%]'
            href='#!'
          >
            <img src={assets.steamIcon} alt='' width={29} />
            <span>Sign in via Steam</span>
          </a>
          <span className='text-[17px] opacity-50 mb-[23px] mt-[42px]'>
            Social Media
          </span>
          <div className='flex gap-[5px] justify-between'>
            <a
              className='w-[49px] h-[49px] flex items-center rounded-[4px] justify-center bg-[#272c39]'
              href='#!'
            >
              <img src='/images/steam.svg' alt='' />
            </a>
            <a
              className='w-[49px] h-[49px] flex items-center rounded-[4px] justify-center bg-[#272c39]'
              href='#!'
            >
              <img src='/images/insta.svg' alt='' />
            </a>
            <a
              className='w-[49px] h-[49px] flex items-center rounded-[4px] justify-center bg-[#272c39]'
              href='#!'
            >
              <img src='/images/tik-tok.svg' alt='' />
            </a>
            <a
              className='w-[49px] h-[49px] flex items-center rounded-[4px] justify-center bg-[#272c39]'
              href='#!'
            >
              <img src='/images/x.svg' alt='' />
            </a>
            <a
              className='w-[49px] h-[49px] flex items-center rounded-[4px] justify-center bg-[#272c39]'
              href='#!'
            >
              <img src='/images/diskord.svg' alt='' />
            </a>
            <a
              className='w-[49px] h-[49px] flex items-center rounded-[4px] justify-center bg-[#272c39]'
              href='#!'
            >
              <img src='/images/facebook.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
