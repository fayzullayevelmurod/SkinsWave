import { Link } from "react-router-dom";
import assets from "../assets";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; // agar ochilmagan bo‘lsa, hech narsa render qilinmaydi

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-custom-dark z-[999] ${isOpen ? "flex" : "hidden"} md:items-center md:justify-center`} onClick={onClose}>
      <div className='md:max-w-[1031px] w-full relative md:rounded-2xl overflow-hidden flex items-center md:bg-[#24243E] bg-[#1A1A2E] md:flex-row flex-col overflow-y-auto'  onClick={(e) => e.stopPropagation()}>
        <button className="absolute md:top-5 md:right-6 right-[15px] z-[100]" onClick={onClose}>
                <img src="/images/close-2.svg" alt="" />
        </button>
        <div className='bg-[#1A1A2E] md:w-auto w-full md:h-full md:min-h-fit  min-h-[450px] overflow-hidden md:flex-1 relative z-10 md:pb-[50px] md:px-[34px] md:pt-[18px] '>
          <img
            className='absolute md:top-0 md:mt-0 mt-[30px] left-0 -z-10 w-full h-full object-cover'
            src='/images/shine.png'
            alt=''
          />
          <div className="relative md:hidden">
            <div className="absolute inset-0 bg-[#2120441A] backdrop-blur-[26.1px] z-0"></div>
            <div className="relative z-10 p-[15px]">
              <span className="text-sm mb-3">Desert Eagle - Field Tested</span>
              <h4 className="text-[17px]">Okean Drive</h4>
            </div>
          </div>

          <div className='gap-5 justify-between mb-[70px] flex-wrap md:flex hidden'>
            <div className='flex items-center gap-2 py-2 px-4 rounded-[5px] bg-[#59538A2B] w-fit border border-[#766DC32E]'>
              <img src='/images/unlock.svg' alt='' />
              <span className='text-sm'>Tradeable</span>
            </div>
            <div className='flex gap-[6px]'>
              <div className='flex items-center gap-2 py-2 px-4 rounded-[5px] bg-[#59538A] w-fit border border-[#766DC3]'>
                <span className='text-sm'>Tradeable</span>
                <img src='/images/enter.svg' alt='' />
              </div>
              <div className='flex items-center gap-2 py-2 px-4 rounded-[5px] bg-[#59538A] w-fit border border-[#766DC3]'>
                <span className='text-sm'>Inspect in Game</span>
                <img src='/images/enter.svg' alt='' />
              </div>
            </div>
          </div>
          <img
            className='mx-auto drop-shadow-skin-shd md:mt-0 mt-[37px] md:w-[349px] md:h-[262px] w-[251px] h-[188px]'
            src='/images/skin-img-1.svg'
            alt=''
            width={349}
            height={262}
          />
          <div className='md:mt-[72px] mt-[30px] mb-6 md:px-0 px-[15px]'>
            <span className='md:block hidden text-[17px] opacity-[0.43] mb-5'>
              Desert Eagle - Field Tested
            </span>
            <div className='flex items-center justify-between md:mt-5'>
              <h3 className='text-[30px] md:block hidden'>Okean Drive</h3>
              <h3 className='text-[30px]'>
                $ 40<span className='text-[#FFFFFF52]'>.55</span>
              </h3>
              <div className='md:hidden  flex items-center gap-2 py-2 px-4 rounded-[5px] bg-[#615FA638] w-fit h-[37px]'>
                <img src='/images/look-2.svg' alt='' />
                <span className='text-sm'>08 дн 22 ч 51 мин</span>
              </div>
            </div>
            <button className="yellow-btn md:mt-[35px] mt-3 md:!h-[54px] !h-[42px]">Add to trade</button>
          </div>
        </div>
        <div className="lg:w-[472px] h-fit md:w-[380px] w-full px-[15px] md:px-[31px] md:py-5 pb-8">
          <div className="space-y-[27px]">
            <div>
              <span className="mb-4">Summary</span>
              <div className="space-y-[13px]">
                <div className="bg-[#30304C] rounded-md py-[22px] px-5">
                  <div className="flex items-center justify-between mb-[22px]">
                    <span className="text-[#FFFFFF66]">Float</span>
                    <h3>0.22952552</h3>
                  </div>
                  <div className="relative">
                    <div className="flex rounded-[4px] overflow-hidden">
                      <div className="h-[6px] w-[30px] bg-[#1E8CA3]"></div>
                      <div className="h-[6px] w-12 bg-[#73CE2D]"></div>
                      <div className="h-[6px] w-[47px] bg-[#FFD922]"></div>
                      <div className="h-[6px] w-6 bg-[#FF6C15]"></div>
                      <div className="h-[6px] flex-1 bg-[#E63E2A]"></div>
                    </div>
                    <img className="absolute -bottom-2 right-14" src="/images/arrow.svg" alt="" />
                  </div>
                </div>
                <div className="bg-[#30304C] rounded-md p-1">
                  <div className=" py-[14px] px-[22px] rounded-[4px] flex items-center justify-between">
                    <span className="text-[#FFFFFF66]">Finish</span>
                    <span>1090</span>
                  </div>
                  <div className="bg-[#383853] py-[14px] px-[22px] rounded-[4px] flex items-center justify-between">
                    <span className="text-[#FFFFFF66]">Finish</span>
                    <span>1090</span>
                  </div>
                  <div className=" py-[14px] px-[22px] rounded-[4px] flex items-center justify-between">
                    <span className="text-[#FFFFFF66]">Finish</span>
                    <span>1090</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="mb-4">Charm</span>
              <div className="bg-[#30304C] rounded-md p-1">
                <div className="flex items-center gap-[18px]">
                  <div className="w-[77px] h-[74px] rounded-md bg-[#494969] flex items-center justify-center">
                    <img src="/images/charm.svg" alt="" />
                  </div>
                  <div>
                    <span className="block mb-[11px]">Big Kev</span>
                    <span className="text-[#FFFFFF78]">Pattern: 415282</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="mb-4">Stickers</span>
              <div className="bg-[#30304C] rounded-md p-[11px]">
                <div className="flex gap-4 flex-wrap">
                  <div className="h-[60px] w-[60px]">
                    <img className="w-full h-full" src="/images/status-logo.svg" alt="" />
                  </div>
                  <div className="h-[60px] w-[60px]">
                    <img className="w-full h-full" src="/images/status-logo.svg" alt="" />
                  </div>
                  <div className="h-[60px] w-[60px]">
                    <img className="w-full h-full" src="/images/status-logo.svg" alt="" />
                  </div>
                  <div className="h-[60px] w-[60px]">
                    <img className="w-full h-full" src="/images/flash-bg.png" alt="" />
                  </div>
                  <div className="h-[60px] w-[60px] md:block hidden">
                    <img className="w-full h-full" src="/images/flash-bg.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <Link className="md:hidden flex items-center justify-center gap-[10px] h-[50px] w-full bg-[#615FA6] rounded-[9px]" to='#!'>
              <span>Open in Steam</span>
              <img src={assets.steam} alt="" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
