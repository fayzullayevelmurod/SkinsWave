import assets from '../../assets';

export default function Intro() {
  return (
    <section className='bg-cover bg-no-repeat bg-center pt-[500px] pb-[217px] text-center z-10 relative'>
      <img
        className='absolute top-0 left-1/2 -translate-x-1/2 -z-10 min-w-[1650px] h-auto'
        src={assets.introImg}
        alt=''
      />
      <h1 className='text-[101px] leading-[86%] font-normal font-Speed text-transparent bg-clip-text bg-text-gradient'>
        Trade skins <br />
        CS2 (CS:GO)
      </h1>
      <p className='pt-4 pb-[22px] text-[17px] leading-[167%] w-[524px] mx-auto'>
        Our CS2 (CSGO) Trade Bot Has All the Skins You Need! Trade CS2 (CS:GO)
        Skins Instantly with Lowest Fees!
      </p>
      <a className='gold-btn shadow-fire-shadow' href='#!'>
        Trade Now
      </a>
    </section>
  );
}
