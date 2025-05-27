import assets from '../assets';

export default function Footer() {
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
            <a
              className='bg-[#191D2E] rounded-[10px] w-full h-[52px] flex items-center justify-center gap-[10px]'
              href='#!'
            >
              <img
                className='bg-white rounded-full'
                src={assets.usdFlag}
                alt=''
              />
              <span className='text-xs-base text-white'>$ USD</span>
              <img src={assets.arrowDown} alt='' />
            </a>
          </div>
        </div>
        <div className='container sm:grid lg:grid-cols-6 sm:grid-cols-3 flex flex-wrap sm:gap-x-3 gap-x-[80px] gap-y-8 items-start justify-between'>
          <h2 className='text-white text-xl font-normal sm:block hidden'>
            SkinsWave
          </h2>
          <div className='sm:w-auto w-[120px]'>
            <h3 className='text-xs-base leading-[167%] font-normal mb-[18px] opacity-40'>
              About
            </h3>
            <ul>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Blog
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Help Center
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Backpack
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Deposit
                </a>
              </li>
            </ul>
          </div>
          <div className='sm:w-auto w-[120px]'>
            <h3 className='text-xs-base leading-[167%] font-normal mb-[18px] opacity-40'>
              Profile
            </h3>
            <ul>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Personal Area
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Trade History
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Security
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Claim Bonus
                </a>
              </li>
            </ul>
          </div>
          <div className='sm:w-auto w-[120px]'>
            <h3 className='text-xs-base leading-[167%] font-normal mb-[18px] opacity-40'>
              Terms
            </h3>
            <ul>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Refund Policy
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className='sm:w-auto w-[120px]'>
            <h3 className='text-xs-base leading-[167%] font-normal mb-[18px] opacity-40'>
              Social media
            </h3>
            <ul>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Steam
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Facebook
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Instagram
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Twitter
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  TikTok
                </a>
              </li>
              <li>
                <a className='text-white text-xs-base leading-[198%]' href='#!'>
                  Discord
                </a>
              </li>
            </ul>
          </div>
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
            <a
              className='bg-[#191D2E] rounded-[10px] w-full h-[52px] flex items-center justify-center gap-[10px]'
              href='#!'
            >
              <img
                className='bg-white rounded-full'
                src={assets.usdFlag}
                alt=''
              />
              <span className='text-xs-base text-white'>$ USD</span>
              <img src={assets.arrowDown} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='max-w-[847px] mx-auto sm:text-xs-base text-sm leading-[167%] opacity-40 py-8 text-center px-4'>
        <p className='sm:mb-[18px] mb-5 '>
          SkinsWave is owned and operated by Virtual Asset Empire Ltd, HE
          412630, 13 Kypranoros Str., Evli Building, 1st Floor, Office 102, 1061
          Nicosia, Cyprus. Payments and other services may be provided by
          external companies. Contact us at support@skinsmonkey.com or via Live
          Chat.
        </p>
        <span className='block'>© 2025 SkinsMonkey | All Rights Reserved.</span>
      </div>
    </footer>
  );
}
