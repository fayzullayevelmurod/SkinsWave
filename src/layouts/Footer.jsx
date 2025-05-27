import { useState, useEffect, useRef, useCallback } from 'react';
import assets from '../assets';

const CurrencyDropdown = ({
  selectedCurrency,
  onCurrencySelect,
  dropdownRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback(
    (currency) => {
      onCurrencySelect(currency);
      setIsOpen(false);
    },
    [onCurrencySelect]
  );

  const currencies = [
    { value: '$ USD', label: '$ USD' },
    { value: '$ EUR', label: '$ EUR' },
    { value: '$ GBP', label: '$ GBP' },
  ];

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        className='bg-[#191D2E] rounded-[10px] w-full h-[52px] flex items-center justify-center gap-[10px] text-xs-base text-white'
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-controls='currency-dropdown'
        role='button'
      >
        <img className='bg-white rounded-full' src={assets.usdFlag} alt='' />
        <span>{selectedCurrency}</span>
        <img
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          src={assets.arrowDown}
          alt=''
        />
      </button>
      <div
        id='currency-dropdown'
        className={`absolute top-full mt-2 rounded-[10px] bg-[#191D2E] w-full p-2 space-y-2 z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {currencies.map((currency) => (
          <span
            key={currency.value}
            className='block cursor-pointer text-white hover:bg-[#272c39] p-1 rounded'
            onClick={() => handleSelect(currency.value)}
            role='option'
            aria-selected={selectedCurrency === currency.value}
          >
            {currency.label}
          </span>
        ))}
      </div>
    </div>
  );
};

const FooterSection = ({ title, links }) => (
  <div className='sm:w-auto w-[120px]'>
    <h3 className='text-xs-base leading-[167%] font-normal mb-[18px] opacity-40'>
      {title}
    </h3>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <a
            className='text-white text-xs-base leading-[198%]'
            href={link.href}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const [selectedCurrency, setSelectedCurrency] = useState('$ USD');
  const dropdownRefMobile = useRef(null);
  const dropdownRefDesktop = useRef(null);

  const handleCurrencySelect = useCallback((currency) => {
    setSelectedCurrency(currency);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefMobile.current &&
        !dropdownRefMobile.current.contains(event.target) &&
        dropdownRefDesktop.current &&
        !dropdownRefDesktop.current.contains(event.target)
      ) {
        // Since CurrencyDropdown manages its own state, no need to set anything here
        // The refs ensure both dropdowns are checked
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const footerSections = [
    {
      title: 'About',
      links: [
        { text: 'Blog', href: '#!' },
        { text: 'Help Center', href: '#!' },
        { text: 'Backpack', href: '#!' },
        { text: 'Deposit', href: '#!' },
      ],
    },
    {
      title: 'Profile',
      links: [
        { text: 'Personal Area', href: '#!' },
        { text: 'Trade History', href: '#!' },
        { text: 'Security', href: '#!' },
        { text: 'Claim Bonus', href: '#!' },
      ],
    },
    {
      title: 'Terms',
      links: [
        { text: 'Privacy Policy', href: '#!' },
        { text: 'Refund Policy', href: '#!' },
        { text: 'Terms of Use', href: '#!' },
      ],
    },
    {
      title: 'Social media',
      links: [
        { text: 'Steam', href: '#!' },
        { text: 'Facebook', href: '#!' },
        { text: 'Instagram', href: '#!' },
        { text: 'Twitter', href: '#!' },
        { text: 'TikTok', href: '#!' },
        { text: 'Discord', href: '#!' },
      ],
    },
  ];

  return (
    <footer className='sm:mt-[148px]'>
      <div className='border-y border-[#33353f] sm:pt-[70px] pt-8 sm:pb-[100px] pb-11'>
        <div className='container sm:hidden block w-full'>
          <div className='space-y-[10px] w-full mb-10'>
            <a
              className='bg-[#191D2E] rounded-[10px] w-full h-[52px] flex items-center justify-center gap-[10px]'
              href='#!'
            >
              <img src={assets.steamIcon} alt='' />
              <span className='text-xs-base text-white'>Sign in via Steam</span>
            </a>
            <a
              className='bg-[#191D2E] rounded-[10px] w-full h-[52px] flex items-center justify-center gap-[10px] text-xs-base text-white'
              href='#!'
            >
              Live Support 24/7
            </a>
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              onCurrencySelect={handleCurrencySelect}
              dropdownRef={dropdownRefMobile}
            />
          </div>
        </div>
        <div className='container sm:grid lg:grid-cols-6 sm:grid-cols-3 flex flex-wrap sm:gap-x-3 gap-x-[80px] gap-y-8 items-start justify-between'>
          <h2 className='text-white text-xl font-normal sm:block hidden'>
            SkinsWave
          </h2>
          {footerSections.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
          <div className='space-y-[10px] sm:block hidden'>
            <a
              className='bg-[#191D2E] rounded-[10px] w-full h-[52px] flex items-center justify-center gap-[10px]'
              href='#!'
            >
              <img src={assets.steamIcon} alt='' />
              <span className='text-xs-base text-white'>Sign in via Steam</span>
            </a>
            <a
              className='bg-[#191D2E] rounded-[10px] w-full h-[52px] flex items-center justify-center gap-[10px] text-xs-base text-white'
              href='#!'
            >
              Live Support 24/7
            </a>
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              onCurrencySelect={handleCurrencySelect}
              dropdownRef={dropdownRefDesktop}
            />
          </div>
        </div>
      </div>
      <div className='max-w-[847px] mx-auto sm:text-xs-base text-sm leading-[167%] opacity-40 py-8 text-center px-4'>
        <p className='sm:mb-[18px] mb-5'>
          SkinsWave is owned and operated by Virtual Asset Empire Ltd, HE
          412630, 13 Kypranoros Str., Evli Building, 1st Floor, Office 102, 1061
          Nicosia, Cyprus. Payments and other services may be provided by
          external companies. Contact us at{' '}
          <a href='mailto:support@skinsmonkey.com' className='underline'>
            support@skinsmonkey.com
          </a>{' '}
          or via Live Chat.
        </p>
        <span className='block'>© 2025 SkinsMonkey | All Rights Reserved.</span>
      </div>
    </footer>
  );
}
