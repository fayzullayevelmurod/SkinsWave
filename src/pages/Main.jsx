import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../layouts/Header';
import Transactions from './Transactions';
import Footer from '../layouts/Footer';
import PersonalArea from './PersonalArea';

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
      <Header />
      <div className='flex items-stretch gap-3 max-w-[1570px] mx-auto mt-[71px]'>
        <aside className='w-[262px] bg-[#0f1224] py-[47px]'>
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
        <div className='flex-1 bg-[#0f1224] pt-[47px] px-[60px] pb-[54px]'>
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
