import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../layouts/Header';
import Transactions from './Transactions';
import Footer from '../layouts/Footer';
import PersonalArea from './PersonalArea';
import HeaderTwo from '../layouts/HeaderTwo';

export default function Main() {
  const location = useLocation();

  const navItems = [
    {
      path: '/main/personal',
      label: 'Personal Area',
      icon: '/images/user.svg',
    },
    {
      path: '/main/affiliates',
      label: 'Affiliates',
      icon: '/images/affiliates.svg',
    },
    {
      path: '/main/transactions',
      label: 'Transactions',
      icon: '/images/transaction.svg',
    },
    { path: '/main/security', label: 'Security', icon: '/images/security.svg' },
    {
      path: '/main/sign-out',
      label: 'Sign Out',
      icon: '/images/sign-out.svg',
      textClass: 'text-[#FF4040]',
    },
  ];

  return (
    <>
      <HeaderTwo />
      <div className='flex lg:flex-row flex-col items-stretch gap-3 2xl:max-w-[1570px] 2xl:px-0 lg:px-5 mx-auto lg:mt-[71px] sm:mt-10 mt-5 mb-[37px]'>
        <aside className='xl:min-w-[262px] min-w-[200px] bg-[#0f1224] xl:py-[47px] py-10 lg:block hidden'>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={`flex items-center gap-4 justify-center py-[15px] ${
                    location.pathname === item.path
                      ? 'border-r border-[#757598] bg-[#1e1f30]'
                      : ''
                  } ${item.textClass || ''}`}
                  to={item.path}
                >
                  <div className='w-[15px] flex items-center justify-center'>
                    <img src={item.icon} alt='' />
                  </div>
                  <span className='w-[113px]'>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className='flex-1 bg-[#0f1224] xl:pt-[47px] xl:px-[60px] xl:pb-[54px] lg:p-10 pt-5 pb-[54px] px-[15px]'>
          <Routes>
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/personal' element={<PersonalArea />} />
            <Route path='/*' element={<div>404</div>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
