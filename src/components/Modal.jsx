export default function Modal() {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#0A0D1C] z-[999] flex items-center justify-center'>
      <div className='max-w-[1031px] w-full relative min-h-[648px] rounded-2xl overflow-hidden'>
        <div className='bg-[#1A1A2E] h-full overflow-hidden w-[558px] relative z-10 pb-[50px] px-[34px] pt-[18px]'>
          <img
            className='absolute top-0 left-0 -z-10'
            src='/images/shine.png'
            alt=''
          />
          <div className='flex gap-5 justify-between mb-[70px]'>
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
            className='mx-auto drop-shadow-skin-shd'
            src='/images/skin-img-1.svg'
            alt=''
            width={349}
            height={262}
          />
          <div className='mt-[72px]'>
            <span className='text-[17px] opacity-[0.43] mb-5'>
              Desert Eagle - Field Tested
            </span>
            <div className='flex items-center justify-between mt-5'>
              <h3 className='text-[30px] '>Okean Drive</h3>
              <h3 className='text-[30px] '>
                $ 40<span className='text-[#FFFFFF52]'>.55</span>
              </h3>
            </div>
            <button className="yellow-btn mt-[35px] !h-[54px]">Add to trade</button>
          </div>
        </div>
      </div>
    </div>
  );
}
