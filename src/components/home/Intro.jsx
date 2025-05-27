import assets from '../../assets';

export default function Intro() {
  return (
    <section className='bg-cover bg-no-repeat bg-center lg:pt-[500px] md:pt-[372px] pt-[172px] md:pb-[217px] pb-[94px] text-center z-10 relative'>
      <img
        className='absolute top-0 left-1/2 -translate-x-1/2 -z-10 sm:min-w-[1650px] min-w-[930px] h-auto '
        src={assets.introImg}
        alt=''
      />
      <h1 className='lg:text-[101px] md:text-[80px] text-[43px] leading-[86%] font-normal font-Speed text-transparent bg-clip-text bg-text-gradient [filter:drop-shadow(0px_3.85px_8px_#9A2E1B)] md:w-fit w-[345px] mx-auto'>
        Trade skins <br />
        CS2 (CS:GO)
      </h1>
      <p className='md:pt-4 md:pb-[22px] pb-4 pt-[22px] md:text-[17px] text-sm leading-[167%] md:w-[524px] text-center mx-auto'>
        Our CS2 (CSGO) Trade Bot Has All the Skins You Need! Trade CS2 (CS:GO)
        Skins Instantly with Lowest Fees!
      </p>
      <a className='gold-btn shadow-fire-shadow' href='#!'>
        Trade Now
      </a>
    </section>
  );
}
