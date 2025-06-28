import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

export default function TradeSkins() {
  return (
    <div>
      <Header />
      <div className='max-w-[1794px] mx-auto mt-[58px] mb-[95px] flex gap-5 items-stretch'>
        {/* left side */}
        <div className='flex-1 '>
          <div className='mb-[18px] rounded-[9px] overflow-hidden bg-[#212044]'>
            <div className='flex items-center justify-between p-[18px]'>
              <div className='flex items-center gap-2'>
                <img src='/images/pistol.svg' alt='' />
                <span>Your offer</span>
              </div>
              <span>$ 5.585.555</span>
            </div>
            <div className='p-[15px] pb-5 flex gap-3 bg-skin-card'>
              <div className='w-[123px] pt-5 pb-3 px-3 bg-skin-child-card'>
                <div className='relative h-[100px] mb-[11px] z-10 flex items-center justify-center'>
                  <img
                    className='drop-shadow-skin-shd'
                    src='/images/skin-img-1.svg'
                    alt=''
                  />
                  <img
                    className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
                    src='/images/skin-bg.png'
                    alt=''
                    width={77}
                    height={77}
                  />
                </div>
                <h3 className='text-[13px]'>Attack Vector</h3>
                <span className='text-xs text-[#B292FF]'>from $332.59</span>
              </div>
              <div className='w-[123px] pt-5 pb-3 px-3 bg-skin-child-card'>
                <div className='relative h-[100px] mb-[11px] z-10 flex items-center justify-center'>
                  <img
                    className='drop-shadow-skin-shd'
                    src='/images/skin-img-1.svg'
                    alt=''
                  />
                  <img
                    className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
                    src='/images/skin-bg.png'
                    alt=''
                    width={77}
                    height={77}
                  />
                </div>
                <h3 className='text-[13px]'>Attack Vector</h3>
                <span className='text-xs text-[#B292FF]'>from $332.59</span>
              </div>
              <div className='w-[123px] pt-5 pb-3 px-3 bg-skin-child-card'>
                <div className='relative h-[100px] mb-[11px] z-10 flex items-center justify-center'>
                  <img
                    className='drop-shadow-skin-shd'
                    src='/images/skin-img-1.svg'
                    alt=''
                  />
                  <img
                    className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
                    src='/images/skin-bg.png'
                    alt=''
                    width={77}
                    height={77}
                  />
                </div>
                <h3 className='text-[13px]'>Attack Vector</h3>
                <span className='text-xs text-[#B292FF]'>from $332.59</span>
              </div>
            </div>
          </div>
        </div>
        {/* midle side */}
        <div className='w-[272px] rounded-[9px] overflow-hidden'>
          <div className='flex items-center gap-2 bg-[#212044] p-[18px]'>
            <img src='/images/repete.svg' alt='' />
            <span>Exchange</span>
          </div>
          <div className='p-[15px] pb-5 bg-skin-card space-y-6'>
            <div className='space-y-[15px]'>
              <a className='yellow-btn !h-[50px]' href='#!'>
                Trade items
              </a>
              <div className='bg-[#252438] py-4 rounded-[9px] text-center'>
                <h5 className='text-[17px]'>$ 5. 670. 44</h5>
                <span className='text-sm opacity-[0.52]'>Needed for trade</span>
              </div>
              <div className='border border-[#5553808A] rounded-[9px] p-1 flex gap-2'>
                <button className='py-[15px] px-7 h-11 text-center'>
                  Basic
                </button>
                <button className='yellow-btn flex-1 !px-5'>Advanced</button>
              </div>
            </div>
            <div className=''>
              <span className='opacity-[0.46] text-lg mb-3'>Price</span>
              <div className='flex gap-[2px] items-center'>
                <div className='py-4 px-[15px] rounded-md bg-[#252438] flex-1'>
                  <span>$ 5 550</span>
                </div>
                <span className='opacity-[0.61]'>-</span>
                <div className='py-4 px-[15px] rounded-md bg-[#252438] flex-1'>
                  <span>$ 5 550</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-lg mb-6'>Trade lock</h3>
              <div className='relative'>
                <div className='grid grid-cols-9 gap-[2px] pb-1 border-b-[2px] border-white'>
                  <div className='h-[13px] bg-[#4FCD33] w-full'></div>
                  <div className='h-[13px] bg-[#76CD33] w-full'></div>
                  <div className='h-[13px] bg-[#A4CD33] w-full'></div>
                  <div className='h-[13px] bg-[#CDC833] w-full'></div>
                  <div className='h-[13px] bg-[#ECE636] w-full'></div>
                  <div className='h-[13px] bg-[#FFF600] w-full'></div>
                  <div className='h-[13px] bg-[#FFD400] w-full'></div>
                  <div className='h-[13px] bg-[#FFAE00] w-full'></div>
                  <div className='h-[13px] bg-[#FF9000] w-full'></div>
                </div>
                <img className='cursor-pointer absolute -bottom-1 right-8' src="/images/arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='flex-1 '>
          <div className='mb-[18px] rounded-[9px] overflow-hidden bg-[#212044]'>
            <div className='flex items-center justify-between p-[18px]'>
              <div className='flex items-center gap-2'>
                <img src='/images/pistol.svg' alt='' />
                <span>Your offer</span>
              </div>
              <span>$ 5.585.555</span>
            </div>
            <div className='p-[15px] pb-5 flex gap-3 bg-skin-card'>
              <div className='w-[123px] pt-5 pb-3 px-3 bg-skin-child-card'>
                <div className='relative h-[100px] mb-[11px] z-10 flex items-center justify-center'>
                  <img
                    className='drop-shadow-skin-shd'
                    src='/images/skin-img-1.svg'
                    alt=''
                  />
                  <img
                    className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
                    src='/images/skin-bg.png'
                    alt=''
                    width={77}
                    height={77}
                  />
                </div>
                <h3 className='text-[13px]'>Attack Vector</h3>
                <span className='text-xs text-[#B292FF]'>from $332.59</span>
              </div>
              <div className='w-[123px] pt-5 pb-3 px-3 bg-skin-child-card'>
                <div className='relative h-[100px] mb-[11px] z-10 flex items-center justify-center'>
                  <img
                    className='drop-shadow-skin-shd'
                    src='/images/skin-img-1.svg'
                    alt=''
                  />
                  <img
                    className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
                    src='/images/skin-bg.png'
                    alt=''
                    width={77}
                    height={77}
                  />
                </div>
                <h3 className='text-[13px]'>Attack Vector</h3>
                <span className='text-xs text-[#B292FF]'>from $332.59</span>
              </div>
              <div className='w-[123px] pt-5 pb-3 px-3 bg-skin-child-card'>
                <div className='relative h-[100px] mb-[11px] z-10 flex items-center justify-center'>
                  <img
                    className='drop-shadow-skin-shd'
                    src='/images/skin-img-1.svg'
                    alt=''
                  />
                  <img
                    className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
                    src='/images/skin-bg.png'
                    alt=''
                    width={77}
                    height={77}
                  />
                </div>
                <h3 className='text-[13px]'>Attack Vector</h3>
                <span className='text-xs text-[#B292FF]'>from $332.59</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
