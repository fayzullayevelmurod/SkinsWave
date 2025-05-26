import Title from '../Title';

export default function TradeSkins() {
  return (
    <section className='relative  pt-[182px]'>
      <img className='right-0 absolute top-[300px] ' src='images/cloud.png' alt="" />
      <img className='left-0 absolute top-[150px] ' src='images/left-cloud.png' alt="" />
      <div className="container">
        <div className='text-center'>
        <Title
          title='Trade Skins Instantly'
          subTitle='Lightning-fast and secure skin exchange on a seamless platform for your convenience'
          subTitleClass='mx-auto'
        />
      </div>

      <div className='flex gap-3 mt-11'>
        <div className=' relative overflow-hidden pt-[37px] pb-[43px] px-[35px] rounded-[9px] bg-trade-skin-bg-one bg-no-repeat bg-[length:100%_100%] text-left w-full'>
          <img src='./images/trade-skin-icon-1.svg' alt='' />
          <div className='pt-[94px]'>
            <h3 className='text-xl'>Trade CS2 (CS:GO) Skins</h3>
            <p className='opacity-40 pt-[27px] pb-10 w-[343px] line-clamp-3 h-[100px] leading-[167%]'>
              SkinsMonkey allows you to trade all available skins from CS2
              (CS:GO), Rust, and Dota 2 in seconds!
            </p>
            <div className='mt-10 mb-8 w-full h-[1px] bg-white opacity-10'></div>
            <a className='flex items-center gap-[10px]' href='#!'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.5678 12H7.40111M16.5678 12L12.9011 15.6667M16.5678 12L12.9011 8.33332M20.9715 2.63821L21.3618 3.02848C22.4107 4.0774 23 5.50004 23 6.98344V17.0166C23 18.5 22.4107 19.9226 21.3618 20.9715L20.9715 21.3618C19.9226 22.4107 18.5 23 17.0166 23H6.98344C5.50004 23 4.0774 22.4107 3.02847 21.3618L2.63821 20.9715C1.58929 19.9226 1.00001 18.5 1 17.0166V6.98344C1.00001 5.50004 1.58929 4.0774 2.63821 3.02848L3.02847 2.63821C4.0774 1.58929 5.50004 1.00001 6.98344 1H17.0166C18.5 1.00001 19.9226 1.58929 20.9715 2.63821Z'
                  stroke='#F329F1'
                  strokeWidth='1.7'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='text-[#F329F1]'>Trade Instantly</span>
            </a>
          </div>
        </div>
        <div className=' relative overflow-hidden pt-[37px] pb-[43px] px-[35px] rounded-[9px] bg-trade-skin-bg-two bg-no-repeat bg-[length:100%_100%] text-left w-full'>
          <img src='./images/trade-skin-icon-2.svg' alt='' />
          <div className='pt-[94px]'>
            <h3 className='text-xl'>Sell CS2 (CS:GO) Skins</h3>
            <p className='opacity-40 pt-[27px] pb-10 w-[343px] line-clamp-3 h-[100px] leading-[167%]'>
              Looking to Cash-Out your Inventory? Visit our partner SkinCashier
              and get paid instantly for all of your unused skins!
            </p>
            <div className='mt-10 mb-8 w-full h-[1px] bg-white opacity-10'></div>
            <a className='flex items-center gap-[10px]' href='#!'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.5678 12H7.40111M16.5678 12L12.9011 15.6667M16.5678 12L12.9011 8.33332M20.9715 2.63821L21.3618 3.02848C22.4107 4.0774 23 5.50004 23 6.98344V17.0166C23 18.5 22.4107 19.9226 21.3618 20.9715L20.9715 21.3618C19.9226 22.4107 18.5 23 17.0166 23H6.98344C5.50004 23 4.0774 22.4107 3.02847 21.3618L2.63821 20.9715C1.58929 19.9226 1.00001 18.5 1 17.0166V6.98344C1.00001 5.50004 1.58929 4.0774 2.63821 3.02848L3.02847 2.63821C4.0774 1.58929 5.50004 1.00001 6.98344 1H17.0166C18.5 1.00001 19.9226 1.58929 20.9715 2.63821Z'
                  stroke='#00F5B0'
                  strokeWidth='1.7'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span
                className='
    text-[#00F5B0]
    [text-shadow:0px_4px_18.5px_#00F5B061]
  '
              >
                Sell Your Skins
              </span>
            </a>
          </div>
        </div>
        <div className=' relative overflow-hidden pt-[37px] pb-[43px] px-[35px] rounded-[9px] bg-trade-skin-bg-three bg-no-repeat bg-[length:100%_100%] text-left w-full'>
          <img src='./images/trade-skin-icon-3.svg' alt='' />
          <div className='pt-[94px]'>
            <h3 className='text-xl'>Buy CS2 (CS:GO) Skins</h3>
            <p className='opacity-40 pt-[27px] pb-10 w-[343px] line-clamp-3 h-[100px] leading-[167%]'>
              Grow your collection together with SkinsMonkey! Our huge
              assortment of rare collector skins will fit your inventory
              perfectly!
            </p>
            <div className='mt-10 mb-8 w-full h-[1px] bg-white opacity-10'></div>
            <a className='flex items-center gap-[10px]' href='#!'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.5678 12H7.40111M16.5678 12L12.9011 15.6667M16.5678 12L12.9011 8.33332M20.9715 2.63821L21.3618 3.02848C22.4107 4.0774 23 5.50004 23 6.98344V17.0166C23 18.5 22.4107 19.9226 21.3618 20.9715L20.9715 21.3618C19.9226 22.4107 18.5 23 17.0166 23H6.98344C5.50004 23 4.0774 22.4107 3.02847 21.3618L2.63821 20.9715C1.58929 19.9226 1.00001 18.5 1 17.0166V6.98344C1.00001 5.50004 1.58929 4.0774 2.63821 3.02848L3.02847 2.63821C4.0774 1.58929 5.50004 1.00001 6.98344 1H17.0166C18.5 1.00001 19.9226 1.58929 20.9715 2.63821Z'
                  stroke='#EB1547'
                  strokeWidth='1.7'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span
                className='
    text-[#EB1547]
    [text-shadow:0px_3px_23.8px_#EB154791]
  '
              >
                Buy Skins Cheap
              </span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
