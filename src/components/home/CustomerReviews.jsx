import assets from '../../assets';
import Title from '../Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CustomerReviews() {
  // Review data array for better maintainability
  const reviews = [
    {
      date: '10:10 AM May 19, 2025',
      text: 'I was unsure at first, but everything went quickly and smoothly. The skin was exchanged within a couple of minutes, and support responded to my questions right away. Now I only trade here and recommend it to friends.',
      user: 'Haqqus Maximus',
      image: '/images/user-img.svg',
      stars: 5,
    },
    {
      date: '10:10 AM May 19, 2025',
      text: 'I was unsure at first, but everything went quickly and smoothly. The skin was exchanged within a couple of minutes, and support responded to my questions right away. Now I only trade here and recommend it to friends.',
      user: 'Haqqus Maximus',
      image: '/images/user-img.svg',
      stars: 5,
    },
    {
      date: '10:10 AM May 19, 2025',
      text: 'I was unsure at first, but everything went quickly and smoothly. The skin was exchanged within a couple of minutes, and support responded to my questions right away. Now I only trade here and recommend it to friends.',
      user: 'Haqqus Maximus',
      image: '/images/user-img.svg',
      stars: 5,
    },
    {
      date: '10:10 AM May 19, 2025',
      text: 'I was unsure at first, but everything went quickly and smoothly. The skin was exchanged within a couple of minutes, and support responded to my questions right away. Now I only trade here and recommend it to friends.',
      user: 'Haqqus Maximus',
      image: '/images/user-img.svg',
      stars: 5,
    },
  ];

  return (
    <section className='relative py-[144px]'>
      <div className='container'>
        <div className='flex items-end justify-between mb-[47px]'>
          <Title
            title='Customer Reviews'
            subTitle='Our clients share their real experiences with our products and services, highlighting the aspects of working with us.'
          />
          <div className='flex gap-2'>
            <button
              className='bg-swiper-btn w-[62px] h-[62px] flex items-center justify-center rounded-[9px] prev-button-2'
              aria-label='Previous slide'
            >
              <img src={assets.prevChevron} alt='Previous' />
            </button>
            <button
              className='bg-swiper-btn w-[62px] h-[62px] flex items-center justify-center rounded-[9px] next-button-2'
              aria-label='Next slide'
            >
              <img src={assets.nextChevron} alt='Next' />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            prevEl: '.prev-button-2',
            nextEl: '.next-button-2',
          }}
          className='w-full'
          style={{ overflow: 'visible' }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='bg-swiper-btn rounded-[9px] pt-[35px] pb-[31px] px-[25px]'>
                <div className='flex items-center justify-between mb-[38px]'>
                  <span className='opacity-40'>{review.date}</span>
                  <div className='flex gap-1'>
                    {Array(review.stars)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          className='drop-shadow-[0px_3.85px_14.63px_#9A2E1B]'
                          src={assets.star}
                          alt='Star'
                        />
                      ))}
                  </div>
                </div>
                <p className='leading-[167%] line-clamp-5 h-[105px]'>
                  {review.text}
                </p>
                <div className='bg-white opacity-10 h-[1px] w-full mt-[82px]'></div>
                <div className='pt-5 flex items-center gap-[9px]'>
                  <img
                    className='w-[34px] h-[34px] rounded-full'
                    src={review.image}
                    alt={`${review.user}'s avatar`}
                  />
                  <span>{review.user}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
