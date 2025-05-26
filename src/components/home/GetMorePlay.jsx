import Title from '../Title';

export default function GetMorePlay() {
  return (
    <section className='relative pb-[192px]'>
      <img className='absolute bottom-[90px] left-1/2 -translate-x-1/2 w-[1229px] h-[370px]' src="./images/bottom-lines.png" alt="" />
      <img className='absolute top-[-200px] right-[-342px]' src="images/cloud.png" alt="" />
      <div className='text-center'>
        <Title
          title={'Get More, Pay Less'}
          subTitle='Enjoy early access to new skins and item releases before they become available to everyone else.'
          subTitleClass='mx-auto'
        />
      </div>
      <div className='grid grid-cols-4 gap-[14px] mt-11'>
        <div className='rounded-[20px] w-full h-[300px] overflow-hidden relative bg-play-card-one bg-no-repeat bg-cover z-10 flex flex-col justify-end px-7 py-4'>
          <h3 className='text-[52px] font-bold leading-[127%] font-BebasNeue'>24/7</h3>
          <span className='text-[17px] opacity-[57%]'>live chat support</span>
        </div>
        <div className='rounded-[20px] w-full h-[300px] overflow-hidden relative bg-play-card-two bg-no-repeat bg-cover z-10 flex flex-col justify-end px-7 py-4'>
          <h3 className='text-[52px] font-bold leading-[127%] font-BebasNeue'>149. 507</h3>
          <span className='text-[17px] opacity-[57%]'>available items</span>
        </div>
        <div className='rounded-[20px] w-full h-[300px] overflow-hidden relative bg-play-card-three bg-no-repeat bg-cover z-10 flex flex-col justify-end px-7 py-4'>
          <h3 className='text-[52px] font-bold leading-[127%] font-BebasNeue'>9.668.450</h3>
          <span className='text-[17px] opacity-[57%]'>completed trades</span>
        </div>
          <div className='rounded-[20px] w-full h-[300px] overflow-hidden relative bg-play-card-four bg-no-repeat bg-cover z-10 flex flex-col justify-end px-7 py-4'>
          <h3 className='text-[52px] font-bold leading-[127%] font-BebasNeue'>2.989.458</h3>
          <span className='text-[17px] opacity-[57%]'>registered users</span>
        </div>
      </div>
    </section>
  );
}
