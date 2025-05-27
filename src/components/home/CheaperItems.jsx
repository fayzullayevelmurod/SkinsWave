export default function CheaperItems() {
  return (
    <section className='md:h-auto h-[415px]'>
      <div className='container sm:bg-cheaper-items-bg bg-cheaper-bg-media bg-no-repeat bg-[length:100%_100%] h-[428px] flex items-center justify-center flex-col md:mt-0 mt-16'>
        <h2
          className='sm:text-[50px] text-[43px] font-Speed text-transparent bg-clip-text bg-text-gradient leading-[86%]
    [filter:drop-shadow(0px_3.85px_14.63px_#9A2E1B)] text-center'
        >
          35% cheaper items
        </h2>
        <p className='sm:text-[17px] text-sm leading-[167%] max-w-[616px] md:pt-6 pt-5 text-center mx-auto'>
          All your favourite payment methods in one place. Working with the most
          trusted providers in the industry, all major payment methods
          worldwide. Want to pay with a credit card or cryptocurrency? We’ve got
          you!
        </p>
        <a className='gold-btn cheaper-gold-btn mt-5 relative z-[100]' href='#!'>
          Trade Now
        </a>
      </div>
    </section>
  );
}
