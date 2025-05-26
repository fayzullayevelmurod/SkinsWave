export default function BottomHero() {
  return (
    <section className='py-[100px] relative h-[1100px] flex flex-col justify-end'>
      <img
        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[1909px]'
        src='/images/bottom-hero-bg.png'
        alt=''
      />
      <h2
        className='text-[74px] font-Speed text-transparent bg-clip-text bg-text-gradient leading-[86%]
    [filter:drop-shadow(0px_3.85px_14.63px_#9A2E1B)] text-center'
      >
        Trade skins <br />
        cs2 (cs:go){' '}
      </h2>
      <p className='opacity-[0.67] leading-[167%] w-[515px] mx-auto pt-[18px] text-center'>
        Our CS2 (CSGO) Trade Bot Has All the Skins You Need! Trade CS2 (CS:GO)
        Skins Instantly with Lowest Fees!
      </p>
      <a className='gold-btn shadow-fire-shadow mt-[22px]' href='#!'>
        Trade Now
      </a>
    </section>
  );
}
