import Title from '../Title';

export default function TradeSkinsInstantly() {
  return (
    <section className='md:mt-[151px] mt-[52px]'>
      <div className='container'>
        <div className='md:text-center'>
          <Title
            title='Trade Skins Instantly'
            subTitle='Lightning-fast and secure skin exchange on a seamless platform for your convenience'
            subTitleClass='md:mx-auto'
          />
        </div>
        <div className='lg:flex lg:space-y-0 space-y-5 md:mt-[124px] mt-10 gap-[10px]'>
          <div className='lg:flex hidden py-[25px] px-[33px] border border-[#242462] rounded-[9px] bg-card-bg items-center justify-between w-[99px] relative'>
            <span className='text-[17px] leading-[137%] opacity-60 whitespace-nowrap -rotate-90 absolute left-1/2 -translate-x-1/2 bottom-[85px]'>
              Sign in via Steam
            </span>
            <div className='w-[33px] h-[33px] rounded-[6px] bg-[#44297B] flex items-center justify-center mb-auto'>
              <img src='/images/check.svg' alt='' />
            </div>
          </div>
          <div className='lg:flex hidden py-[25px] px-[33px] border border-[#242462] rounded-[9px] bg-card-bg items-center justify-between w-[99px] relative'>
            <span className='text-[17px] leading-[137%] opacity-60 w-[165px] -rotate-90 absolute left-1/2 -translate-x-1/2 bottom-[85px]'>
              Select Favorite <br /> CS2 (CS:GO) Skins
            </span>
            <div className='w-[33px] h-[33px] rounded-[6px] bg-[#44297B] flex items-center justify-center mb-auto'>
              <img src='/images/check.svg' alt='' />
            </div>
          </div>

          <div className='lg:h-auto h-[485px] lg:hidden flex-col flex justify-end bg-media-card-midle bg-no-repeat w-full bg-[length:100%_100%] relative z-10 rounded-[9px] py-[25px] px-5 overflow-x-clip'>
            <img
              className='absolute top-[-35px] right-[-76px] z-10 min-w-[401px]'
              src='/images/card-img-1.png'
              alt=''
            />
            <div className='absolute left-0 w-full h-[185px] bg-card-gradient z-10 top-[114px]'></div>
            <div className='bg-[#312c4a] md:flex hidden items-center justify-center rounded-[7px] w-[59px] h-[59px]'>
              <img src='/images/knife.svg' alt='' />
            </div>
            <h3 className='md:text-[26px] text-xl leading-[143%] font-bold uppercase mt-11 relative z-10'>
              Select Favorite <br /> CS2 (CS:GO) Skins
            </h3>
            <div className='w-full h-[1px] bg-white my-10 opacity-[0.15] relative md:block hidden'></div>
            <p className='md:text-base text-sm leading-[145%] md:pb-[51px] md:pt-0 pt-[23px] md:opacity-100  opacity-[0.54] md:w-[350px] w-[272px] relative z-10'>
              SkinsMonkey has the stock of available CS2 (CS:GO) items - You
              will surely find an item that tickles your fancy
            </p>
            <div className='w-full h-[1px] bg-white my-[25px] opacity-[0.15] relative md:hidden block'></div>
            <a
              className='flex items-center gap-3 md:text-lg text-[#7A6EE5] text-base'
              href='#!'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.5678 12H7.40111M16.5678 12L12.9011 15.6667M16.5678 12L12.9011 8.33332M20.9715 2.63821L21.3618 3.02848C22.4107 4.0774 23 5.50004 23 6.98344V17.0166C23 18.5 22.4107 19.9226 21.3618 20.9715L20.9715 21.3618C19.9226 22.4107 18.5 23 17.0166 23H6.98344C5.50004 23 4.0774 22.4107 3.02847 21.3618L2.63821 20.9715C1.58929 19.9226 1.00001 18.5 1 17.0166V6.98344C1.00001 5.50004 1.58929 4.0774 2.63821 3.02848L3.02847 2.63821C4.0774 1.58929 5.50004 1.00001 6.98344 1H17.0166C18.5 1.00001 19.9226 1.58929 20.9715 2.63821Z'
                  stroke='#7A6EE5'
                  strokeWidth='2.09'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>Trade skin</span>
            </a>
          </div>

          <div className='lg:h-auto h-[485px] lg:hidden flex-col flex justify-end bg-media-card-midle bg-no-repeat w-full bg-cover md:bg-[length:100%_100%] relative z-10 rounded-[9px] py-[25px] px-5'>
            <img
              className='absolute -top-10 left-1/2 -translate-x-1/2 z-10 min-w-[445px]'
              src='/images/card-midle-img.png'
              alt=''
            />
            <div className='bg-[#312c4a] md:flex hidden items-center justify-center rounded-[7px] w-[59px] h-[59px]'>
              <img src='/images/knife.svg' alt='' />
            </div>
            <h3 className='md:text-[26px] text-xl leading-[143%] font-bold uppercase mt-11 relative z-10'>
              Select Favorite <br /> CS2 (CS:GO) Skins
            </h3>
            <div className='w-full h-[1px] bg-white my-10 opacity-[0.15] relative md:block hidden'></div>
            <p className='md:text-base text-sm leading-[145%] md:pb-[51px] md:pt-0 pt-[23px] md:opacity-100  opacity-[0.54] md:w-[350px] w-[272px] relative z-10'>
              SkinsMonkey has the stock of available CS2 (CS:GO) items - You
              will surely find an item that tickles your fancy
            </p>
            <div className='w-full h-[1px] bg-white my-[25px] opacity-[0.15] relative md:hidden block'></div>
            <a
              className='flex items-center gap-3 md:text-lg text-[#7A6EE5] text-base'
              href='#!'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.5678 12H7.40111M16.5678 12L12.9011 15.6667M16.5678 12L12.9011 8.33332M20.9715 2.63821L21.3618 3.02848C22.4107 4.0774 23 5.50004 23 6.98344V17.0166C23 18.5 22.4107 19.9226 21.3618 20.9715L20.9715 21.3618C19.9226 22.4107 18.5 23 17.0166 23H6.98344C5.50004 23 4.0774 22.4107 3.02847 21.3618L2.63821 20.9715C1.58929 19.9226 1.00001 18.5 1 17.0166V6.98344C1.00001 5.50004 1.58929 4.0774 2.63821 3.02848L3.02847 2.63821C4.0774 1.58929 5.50004 1.00001 6.98344 1H17.0166C18.5 1.00001 19.9226 1.58929 20.9715 2.63821Z'
                  stroke='#7A6EE5'
                  strokeWidth='2.09'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>Trade skin</span>
            </a>
          </div>

          <div className='md:bg-card-bg-1 md:h-auto h-[485px] md:block flex-col flex justify-end bg-media-card-last bg-no-repeat w-full pt-[25px] px-[31px] pb-[45px] bg-cover md:bg-[length:100%_100%] relative lg:overflow-y-visible lg:overflow-x-clip overflow-hidden z-10 rounded-[9px]'>
            <img
              className='absolute right-[-152px] bottom-[-29px] z-10 md:block hidden'
              src='/images/hunter.png'
              alt=''
            />
            <div className='bg-[#312c4a] md:flex hidden items-center justify-center rounded-[7px] w-[59px] h-[59px]'>
              <img src='/images/knife.svg' alt='' />
            </div>
            <h3 className='md:text-[26px] text-xl leading-[143%] font-bold uppercase mt-11 relative z-10 md:w-fit w-[143px]'>
              Enjoy Shiny New Items
            </h3>
            <div className='w-full h-[1px] bg-white my-10 opacity-[0.15] relative md:block hidden'></div>
            <p className='md:text-base text-sm leading-[145%] md:pb-[51px] md:pt-0 pt-[23px] md:opacity-100  opacity-[0.54] md:w-[350px] w-[235px] relative z-10'>
              It only takes a couple of seconds to upgrade your inventory to
              another league!
            </p>
            <div className='w-full h-[1px] bg-white my-[25px] opacity-[0.15] relative md:hidden block'></div>
            <a
              className='flex items-center gap-3 text-lg text-[#7A6EE5]'
              href='#!'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.5678 12H7.40111M16.5678 12L12.9011 15.6667M16.5678 12L12.9011 8.33332M20.9715 2.63821L21.3618 3.02848C22.4107 4.0774 23 5.50004 23 6.98344V17.0166C23 18.5 22.4107 19.9226 21.3618 20.9715L20.9715 21.3618C19.9226 22.4107 18.5 23 17.0166 23H6.98344C5.50004 23 4.0774 22.4107 3.02847 21.3618L2.63821 20.9715C1.58929 19.9226 1.00001 18.5 1 17.0166V6.98344C1.00001 5.50004 1.58929 4.0774 2.63821 3.02848L3.02847 2.63821C4.0774 1.58929 5.50004 1.00001 6.98344 1H17.0166C18.5 1.00001 19.9226 1.58929 20.9715 2.63821Z'
                  stroke='#7A6EE5'
                  strokeWidth='2.09'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>Trade skin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
