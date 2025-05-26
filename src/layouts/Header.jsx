import assets from '../assets';

export default function Header() {
  return (
    <header className='py-4'>
      <div className='container flex items-center justify-between gap-4'>
        <h2 className='text-white text-xl font-normal'>SkinsWave</h2>
        <ul className='gap-[70px] flex items-center'>
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
          <li className='-ml-9'>
            <a
              className='text-[#7D7D9E] hover:text-white duration-300'
              href='#!'
            >
              Trade Skins
            </a>
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
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <img
              className='bg-white rounded-full'
              src={assets.usdFlag}
              alt=''
            />
            <span>$ USD</span>
            <img src={assets.arrowDown} alt='' />
          </div>
          <a
            className='flex items-center gap-[10px] w-[212px] h-[52px] justify-center text-white bg-btn-bg bg-no-repeat  bg-[length:100%_100%]'
            href='#!'
          >
            <img src={assets.steamIcon} alt='' />
            <span>Sign in via Steam</span>
          </a>
        </div>
      </div>
    </header>
  );
}
