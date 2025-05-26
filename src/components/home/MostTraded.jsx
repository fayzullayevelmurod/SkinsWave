import assets from '../../assets';
import Title from '../Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MostTraded() {
  const cards = [
    {
      title: 'MP5-SD',
      price: '$332.59',
      image: 'images/mos-img-1.png',
      bg: 'bg-most-card-one',
    },
    {
      title: 'Attack Vector',
      price: '$1599.43',
      image: 'images/mos-img-2.png',
      bg: 'bg-most-card-two',
    },
    {
      title: 'Skeleton Knife',
      price: '$1599.43',
      image: 'images/mos-img-3.png',
      bg: 'bg-most-card-three',
    },
    {
      title: 'Buzz Kill',
      price: '$299.43',
      image: 'images/mos-img-4.png',
      bg: 'bg-most-card-three',
    },
    {
      title: 'Falcion Knife',
      price: '$1599.43',
      image: 'images/mos-img-5.png',
      bg: 'bg-most-card-four',
    },
  ];

  return (
    <section className='relative'>
      <div className='flex items-end justify-between mb-9'>
        <Title
          title='most traded'
          subTitle='Enjoy early access to new skins and item releases before they become available to everyone else.'
        />

        {/* Navigation buttons before Title */}
        <div className='flex gap-3'>
          <a
            className='px-8 py-3 flex items-center gap-2 rounded-[13px] bg-[#211B36] text-base text-[#9882E0]'
            href='#!'
          >
            <img
              className='drop-shadow-[0_0_9.81px_#9882E063]'
              src={assets.eye}
              alt='See All'
            />
            <span>See All</span>
          </a>
          <div className='flex gap-[6px]'>
            <button
              className='w-[53px] h-[53px] flex items-center justify-center bg-[#211B36] rounded-[13px] prev-button disabled:bg-[#211B36] enabled:bg-gradient-to-b group enabled:from-[#8401FF] enabled:to-[#8401FF]'
              aria-label='Previous slide'
            >
              <svg
                width='9'
                height='15'
                viewBox='0 0 9 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='
                group-enabled:drop-shadow-[0px_2px_2px_#0C0C0C52]
                group-disabled:drop-shadow-[0px_0px_9.81px_#9882E0B0]
              '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.706983 8.1436L7.08615 14.5228L8.68066 12.9283L3.09875 7.34635L8.68066 1.76443L7.08615 0.169922L0.706983 6.54909C0.495579 6.76056 0.376819 7.04733 0.376819 7.34635C0.376819 7.64536 0.495579 7.93214 0.706983 8.1436Z'
                  fill='white'
                  className='
                group-enabled:fill-white
                group-disabled:fill-[#9882E0]'
                />
              </svg>
            </button>

            <button
              className='w-[53px] group h-[53px] flex items-center justify-center bg-[#211B36] rounded-[13px] next-button disabled:bg-[#211B36] enabled:bg-gradient-to-b enabled:from-[#8401FF] enabled:to-[#8401FF]'
              aria-label='Next slide'
            >
              <svg
                width='9'
                height='15'
                viewBox='0 0 9 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='
                group-enabled:drop-shadow-[0px_2px_2px_#0C0C0C52]
                group-disabled:drop-shadow-[0px_0px_9.81px_#9882E0B0]
              '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.52642 6.8564L2.14725 0.477227L0.552737 2.07174L6.13465 7.65365L0.552735 13.2356L2.14725 14.8301L8.52642 8.45091C8.73782 8.23944 8.85658 7.95267 8.85658 7.65365C8.85658 7.35464 8.73782 7.06787 8.52642 6.8564Z'
                  fill='white'
                  className='
                group-enabled:fill-white
                group-disabled:fill-[#9882E0]'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={18}
        slidesPerView={4}
        speed={700}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
        className='w-full overflow-visible swiper-container'
        style={{ overflow: 'visible' }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${card.bg} bg-[length:100%_100%] bg-no-repeat px-5 py-9 overflow-hidden relative h-[283px] flex justify-end flex-col`}
            >
              <div className='h-[187px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] flex items-start justify-center'>
                <img
                  className='drop-shadow-[-7px_8px_15.4px_#00000054 ] w-fit'
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <h3 className='text-xl leading-[167%] mb-3'>{card.title}</h3>
              <span className='text-xs-base text-[#966EF5]'>
                from {card.price}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
