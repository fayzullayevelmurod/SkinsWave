import assets from '../assets';

export default function PersonalArea() {
  return (
    <div>
      <div className='flex items-center gap-5 border-b border-[#3b3e4b] pb-[42px]'>
        <div className='overflow-hidden w-[43px] h-[43px] rounded-full'>
          <img
            className='w-full h-full object-cover'
            src='/images/user.png'
            alt=''
          />
        </div>
        <div>
          <h4 className='mb-[10px] text-xl'>John_Both</h4>
          <div className='flex items-center gap-2'>
            <span className='text-[15px] opacity-[0.37]'>24245552222</span>
            <img className='cursor-pointer' src='/images/copy.svg' alt='' />
          </div>
        </div>
      </div>
      <div className='max-w-[670px]'>
        <h3 className='text-xl mt-[37px]'>Settings</h3>
        <p className='text-[15px] mt-5 mb-6 text-[#FFFFFF8A] leading-[158%]'>
          Here you can find information about your SkinsMonkey account. Make
          sure to always provide up-to-date Trade URL and other information to
          guarantee a seamless trade experience.
        </p>
        <div>
          <label className='text-[15px] block mb-[6px]'>Trade URL</label>
          <div className='h-[46px] rounded-md bg-[#23243b] w-full relative'>
            <input
              className='text-[15px] placeholder:text-[#FFFFFF73] outline-none px-6 py-3 h-full w-full bg-transparent'
              type='text'
              placeholder='Your trade link...'
            />
            <img
              className='absolute top-1/2 right-5 -translate-y-1/2'
              src='/images/pen.svg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='border-y border-[#3b3e4b] py-[45px] mt-[45px]'>
        <div className='max-w-[670px]'>
          <h3 className='text-xl'>Contact Information</h3>
          <p className='text-[15px] mt-5 mb-6 text-[#FFFFFF8A] leading-[158%]'>
            Your email address is used to verify we are working with a human and
            not a robot.
          </p>
          <div>
            <label className='text-[15px] block mb-[6px]'>Email</label>
            <div className='h-[46px] rounded-md bg-[#23243b] w-full relative border border-[#E93333]'>
              <input
                className='text-[15px] placeholder:text-[#FFFFFF73] outline-none px-6 py-3 h-full w-full bg-transparent'
                type='text'
                placeholder='Your trade link...'
                value='mail@mail.ru'
              />
              <svg
                className='absolute top-1/2 right-5 -translate-y-1/2'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.74 3.59283C16.0867 3.24622 16.0867 2.66852 15.74 2.33967L13.6603 0.259964C13.3315 -0.0866546 12.7538 -0.0866546 12.4072 0.259964L10.7718 1.8864L14.1047 5.21927M0 12.6671V16H3.33287L13.1626 6.16137L9.82975 2.8285L0 12.6671Z'
                  fill='#65679D'
                />
              </svg>
            </div>
            <span className='text-[#E93333] text-[13px] mt-2'>
              Value is required
            </span>
          </div>
          <h3 className='mt-6 text-[15px] mb-6'>
            Email notifications from SkinsMonkey
          </h3>
          <p className='text-[15px] mt-5 mb-6 text-[#FFFFFF8A] max-w-[465px] leading-[158%]'>
            Receive updates from SkinsMonkey about your account and ongoing
            promotions. You can change the settings at any time.
          </p>
          <div className='flex items-start gap-[11px] cursor-pointer'>
            <div className='relative w-[15px] h-[15px] mt-1'>
              <input
                type='checkbox'
                className='w-[15px] rounded-sm h-[15px] appearance-none border border-[#585C7F] bg-transparent checked:bg-[#8E93BE] checked:border-[#585C7F] checked:text-[#101224] flex items-center justify-center'
                id='check'
              />
              <svg
                className='absolute ml-[1px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
                width='9'
                height='7'
                viewBox='0 0 15 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M1.83696 3.76812L0 5.65217L5.51087 11.3043L14.6957 1.88406L12.8587 0L5.51087 7.53623L1.83696 3.76812Z'
                  fill='#101224'
                />
              </svg>
            </div>
            <label
              className='text-[#FFFFFF8C] cursor-pointer text-[13px]'
              htmlFor='check'
            >
              <span className='text-[15px] text-white block leading-[158%]'>
                Notifications
              </span>
              Important updates, such as deposit status, raffle results,
              Backpack reminders
            </label>
          </div>
          <div className='flex items-start gap-[11px] cursor-pointer mt-[18px]'>
            <div className='relative w-[15px] h-[15px] mt-1'>
              <input
                type='checkbox'
                className='w-[15px] rounded-sm h-[15px] appearance-none border border-[#585C7F] bg-transparent checked:bg-[#8E93BE] checked:border-[#585C7F] checked:text-[#101224] flex items-center justify-center'
                id='check1'
                checked
              />
              <svg
                className='absolute ml-[1px] mt-[1px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
                width='9'
                height='7'
                viewBox='0 0 15 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M1.83696 3.76812L0 5.65217L5.51087 11.3043L14.6957 1.88406L12.8587 0L5.51087 7.53623L1.83696 3.76812Z'
                  fill='#101224'
                />
              </svg>
            </div>
            <label
              className='text-[#FFFFFF8C] cursor-pointer text-[13px]'
              htmlFor='check1'
            >
              <span className='text-[15px] text-white block leading-[158%]'>
                Promotions
              </span>
              Free giveaways, promo codes, and other opportunities
            </label>
          </div>
        </div>
      </div>
      <div className='pt-[45px]'>
        <h3 className='text-xl mb-[23px]'>Connected Accounts</h3>
        <div className='flex items-center gap-[10px]'>
          <div className='rounded-xl bg-[#181a32] p-4 flex items-center justify-between w-[379px]'>
            <div className='flex items-center gap-4'>
              <img src={assets.steam} alt='' width={22} height={10} />
              <span>Steam</span>
            </div>
            <a
              className='p-3 rounded-[4px] border text-[#8D91CE] border-[#5355748C] bg-[#8083B024]'
              href='#!'
            >
              Disconnect
            </a>
          </div>
          <div className='rounded-xl bg-[#181a32] p-4 flex items-center justify-between w-[379px]'>
            <div className='flex items-center gap-4'>
              <img src='/images/diskord.svg' alt='' width={22} height={10} />
              <div>
                <span className='leading-[158%]'>Discord</span>
                <span className='text-[#FFFFFF8C]  text-[13px] block'>
                  Not connected
                </span>
              </div>
            </div>
            <a
              className='p-3 rounded-[4px] border text-[#8D91CE] border-[#5355748C] bg-[#8083B024]'
              href='#!'
            >
              Link Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
