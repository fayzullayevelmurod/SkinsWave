import assets from '../assets';

export default function Footer() {
  return (
    <footer className='mt-[148px]'>
      <div className='border-y border-[#33353f] pt-[70px] pb-[100px]'>
        <div className='container flex items-start justify-between'>
          <h2 className='text-white text-xl font-normal'>SkinsWave</h2>
          <div>
            <h3 className='text-[15px] leading-[167%] font-normal mb-[18px] opacity-40'>
              About
            </h3>
            <ul>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Blog
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Help Center
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Backpack
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Deposit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-[15px] leading-[167%] font-normal mb-[18px] opacity-40'>
              Profile
            </h3>
            <ul>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Personal Area
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Trade History
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Security
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Claim Bonus
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-[15px] leading-[167%] font-normal mb-[18px] opacity-40'>
              Terms
            </h3>
            <ul>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Refund Policy
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-[15px] leading-[167%] font-normal mb-[18px] opacity-40'>
              Social media
            </h3>
            <ul>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Steam
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Facebook
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Instagram
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Twitter
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  TikTok
                </a>
              </li>
              <li>
                <a className='text-white text-[15px] leading-[198%]' href='#!'>
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-[10px]'>
            <a
              className='bg-[#191D2E] rounded-[10px] w-[212px] h-[52px] flex items-center justify-center gap-[10px]'
              href='#!'
            >
              <img src={assets.steamIcon} alt='' />
              <span className='text-[15px] text-white'>Sign in via Steam</span>
            </a>
            <a
              className='bg-[#191D2E] rounded-[10px] w-[212px] h-[52px] flex items-center justify-center gap-[10px] text-[15px] text-white'
              href='#!'
            >
              Live Support 24/7
            </a>
            <a
              className='bg-[#191D2E] rounded-[10px] w-[212px] h-[52px] flex items-center justify-center gap-[10px]'
              href='#!'
            >
              <img className='bg-white rounded-full' src={assets.usdFlag} alt='' />
              <span className='text-[15px] text-white'>$ USD</span>
              <img src={assets.arrowDown} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='max-w-[847px] mx-auto text-[15px] leading-[167%] opacity-40 py-8 text-center'>
        <p className='mb-[18px]'>
          SkinsWave is owned and operated by Virtual Asset Empire Ltd, HE
          412630, 13 Kypranoros Str., Evli Building, 1st Floor, Office 102, 1061
          Nicosia, Cyprus. Payments and other services may be provided by
          external companies. Contact us at support@skinsmonkey.com or via Live
          Chat.
        </p>
        <span>© 2025 SkinsMonkey | All Rights Reserved.</span>
      </div>
    </footer>
  );
}
