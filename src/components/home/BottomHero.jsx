export default function BottomHero() {
  return (
    <section className='sm:py-[100px] pt-[135px] pb-[100px] relative lg:h-[1100px] sm:h-[915px] h-auto flex flex-col justify-end'>
      <img
        className='absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[1909px] sm:block hidden'
        src='/images/bottom-hero-bg.png'
        alt=''
      />
      <img
        className='absolute bottom-[12%] left-1/2 -translate-x-[55%] min-w-[1137px] h-[782px] sm:hidden block'
        src='/images/bottom-hero-media.png'
        alt=''
      />
      <h2
        className='md:text-[74px] text-[43px] font-Speed text-transparent bg-clip-text bg-text-gradient leading-[86%]
    [filter:drop-shadow(0px_3.85px_14.63px_#9A2E1B)] text-center sm:w-fit w-[345px] mx-auto'
      >
        Trade skins <br />
        cs2 (cs:go){' '}
      </h2>
      <p className='opacity-[0.67] leading-[167%] md:w-[515px] mx-auto pt-[18px] text-center md:text-xs-base text-sm'>
        Our CS2 (CSGO) Trade Bot Has All the Skins You Need! Trade CS2 (CS:GO)
        Skins Instantly with Lowest Fees!
      </p>
      <a className='gold-btn shadow-fire-shadow mt-[22px]' href='#!'>
        Trade Now
      </a>
    </section>
  );
}
