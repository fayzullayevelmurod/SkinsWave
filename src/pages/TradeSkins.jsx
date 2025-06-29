import { useState } from 'react';
import Footer from '../layouts/Footer';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import HeaderTwo from '../layouts/HeaderTwo';
import Modal from '../components/Modal';
import Basket from '../components/Basket';

// Reusable Accordion component with toggle functionality
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='accordion'>
      <div
        className='accordion-header flex items-center justify-between cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className='text-lg'>{title}</h3>
        <svg
          width='15'
          height='9'
          viewBox='0 0 9 5'
          fill='none'
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.00008 4.8012L-4.19675e-08 0.960104L0.999843 -3.49698e-07L4.5 3.36104L8.00016 -4.37045e-08L9 0.960104L4.99992 4.8012C4.86732 4.92849 4.6875 5 4.5 5C4.3125 5 4.13268 4.92849 4.00008 4.8012Z'
            fill='#73737f'
          />
        </svg>
      </div>
      {isOpen && (
        <div className='accordion-content space-y-5 mt-6'>{children}</div>
      )}
    </div>
  );
};

// Reusable SkinCard component for displaying skin items
const SkinCard = ({ imageSrc, title, price }) => (
  <div className='xl:w-[123px] xl:flex-none flex-[120px] pt-5 pb-3 px-3 bg-skin-child-card relative hover:shadow-[6px_29px_60.9px_0px_#00000042] duration-300 group'>
    <div className='w-full h-full bg-[#2D2AA438] backdrop-blur-[12px] absolute top-0 left-0 z-50 flex items-center justify-center flex-col rounded-[4px] group-hover:visible group-hover:opacity-100 opacity-0 invisible duration-300'>
      <button className='cursor-pointer'>
        <img className='mx-auto' src='/images/trash.svg' alt='' />
        <span className='mt-[11px] text-white'>Delete</span>
      </button>
    </div>
    <div className='relative h-[100px] mb-[11px] z-10 flex items-center justify-center'>
      <img className='drop-shadow-skin-shd' src={imageSrc} alt={title} />
      <img
        className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
        src='/images/skin-bg.png'
        alt='Skin background'
        width={77}
        height={77}
      />
    </div>
    <h3 className='text-[13px]'>{title}</h3>
    <span className='text-xs text-[#B292FF]'>{price}</span>
  </div>
);

// Reusable OfferSection component for left and right offer panels
const OfferSection = ({
  title,
  total,
  skins,
  handleOpenFilter,
  handleOpenModal,
}) => (
  <div className='flex-1'>
    <div className='mb-[18px] rounded-[9px] overflow-hidden bg-[#212044] md:block hidden'>
      <div className='flex items-center justify-between p-[18px] h-[50px]'>
        <div className='flex items-center gap-2'>
          <img src='/images/pistol.svg' alt='Pistol icon' />
          <span>{title}</span>
        </div>
        <span>{total}</span>
      </div>
      <div className='p-[15px] pb-5 md:flex flex-wrap gap-3 bg-skin-card hidden'>
        {skins.map((skin, index) => (
          <SkinCard key={index} {...skin} />
        ))}
      </div>
    </div>
    <div className='sm:rounded-[9px] overflow-hidden sm:bg-[#212044] bg-skin-card'>
      <div className='flex sm:flex-wrap sm:bg-[#212044] sm:flex-row flex-row-reverse gap-y-5 items-center justify-between py-[10px] px-[14px]'>
        <div className='flex gap-1 xl:w-[389px] md:w-full md:flex-1'>
          <button
            className='sm:hidden w-[33px] h-[33px] bg-[#303047] rounded-[4px] flex items-center justify-center'
            onClick={handleOpenFilter}
          >
            <img src='/images/settings.svg' alt='' />
          </button>
          <div className='md:w-full'>
            <Search className='sm:!bg-[#393959] !bg-[#303047] h-[30px]' />
          </div>
        </div>
        <div className='flex items-center sm:gap-6 gap-1 xl:w-fit sm:w-full justify-between'>
          <div className='flex sm:gap-6 gap-1 sm:flex-row flex-row-reverse'>
            <Dropdown
              options={[
                {
                  id: 'sort-1',
                  label: 'Price: Max',
                  imageSrc: '/images/sort-1.svg',
                },
                {
                  id: 'sort-2',
                  label: 'Price: Min',
                  imageSrc: '/images/sort-2.svg',
                },
                {
                  id: 'sort-3',
                  label: 'Float: Max',
                  imageSrc: '/images/sort-1.svg',
                },
                {
                  id: 'sort-4',
                  label: 'Float: Min',
                  imageSrc: '/images/sort-2.svg',
                },
              ]}
              defaultOption={{
                id: 'sort-0',
                label: 'Relevance',
                imageSrc: '/images/lines.svg',
              }}
            />

            <Dropdown
              options={[
                {
                  id: 'sort-1',
                  label: 'CS2',
                  imageSrc: '/images/fors.svg',
                },
                {
                  id: 'sort-2',
                  label: 'CS:GO',
                  imageSrc: '/images/fors.svg',
                },
              ]}
              defaultOption={{
                id: 'sort-0',
                label: 'CS2',
                imageSrc: '/images/fors.svg',
              }}
            />
          </div>
          <button className='w-[33px] h-[31px] rounded-[4px] items-center justify-center bg-[#615FA6] sm:flex hidden'>
            <img src='/images/load.svg' alt='' />
          </button>
        </div>
        <button className='cursor-pointer sm:hidden block'>
          <img src='/images/load.svg' alt='' />
        </button>
      </div>
      <div className='md:py-5 py-3 md:px-[14px] px-[5px] flex flex-wrap bg-skin-card gap-[10px] custom-scroll overflow-y-auto max-h-[785px]'>
        <div
          onClick={handleOpenModal}
          className='bg-product-card-bg flex-[150px] bg-[length:100%_100%] bg-no-repeat pb-[14px] h-fit px-3'
        >
          <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
            <img
              className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
              alt='Skin background'
              width='77'
              height='77'
              src='/images/skin-bg.png'
            />
            <img
              className='drop-shadow-product-shd'
              src='/images/product-1.png'
              alt='product'
            />
          </div>
          <h3 className='text-[15px]'>MP5-SD</h3>
          <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
            from $332.59
          </span>
          <div className='relative'>
            <div className='grid grid-cols-9 gap-[2px] pb-1'>
              {[
                '#4FCD33',
                '#76CD33',
                '#A4CD33',
                '#CDC833',
                '#ECE636',
                '#FFF600',
                '#FFD400',
                '#FFAE00',
                '#FF9000',
              ].map((color, index) => (
                <div
                  key={index}
                  className='h-[4px] w-full'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <img
              className='cursor-pointer absolute -bottom-[3px] right-[52px]'
              src='/images/arrow.svg'
              alt='Trade lock indicator'
              width={11}
              height={11}
            />
          </div>
        </div>
        <div
          onClick={handleOpenModal}
          className='bg-product-card-bg flex-[150px] bg-[length:100%_100%] bg-no-repeat pb-[14px] h-fit px-3'
        >
          <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
            <img
              className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
              alt='Skin background'
              width='77'
              height='77'
              src='/images/skin-bg.png'
            />
            <img
              className='drop-shadow-product-shd'
              src='/images/product-1.png'
              alt='product'
            />
          </div>
          <h3 className='text-[15px]'>MP5-SD</h3>
          <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
            from $332.59
          </span>
          <div className='relative'>
            <div className='grid grid-cols-9 gap-[2px] pb-1'>
              {[
                '#4FCD33',
                '#76CD33',
                '#A4CD33',
                '#CDC833',
                '#ECE636',
                '#FFF600',
                '#FFD400',
                '#FFAE00',
                '#FF9000',
              ].map((color, index) => (
                <div
                  key={index}
                  className='h-[4px] w-full'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <img
              className='cursor-pointer absolute -bottom-[3px] right-[52px]'
              src='/images/arrow.svg'
              alt='Trade lock indicator'
              width={11}
              height={11}
            />
          </div>
        </div>
        <div
          onClick={handleOpenModal}
          className='bg-product-card-bg flex-[150px] bg-[length:100%_100%] bg-no-repeat pb-[14px] h-fit px-3'
        >
          <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
            <img
              className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
              alt='Skin background'
              width='77'
              height='77'
              src='/images/skin-bg.png'
            />
            <img
              className='drop-shadow-product-shd'
              src='/images/product-1.png'
              alt='product'
            />
          </div>
          <h3 className='text-[15px]'>MP5-SD</h3>
          <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
            from $332.59
          </span>
          <div className='relative'>
            <div className='grid grid-cols-9 gap-[2px] pb-1'>
              {[
                '#4FCD33',
                '#76CD33',
                '#A4CD33',
                '#CDC833',
                '#ECE636',
                '#FFF600',
                '#FFD400',
                '#FFAE00',
                '#FF9000',
              ].map((color, index) => (
                <div
                  key={index}
                  className='h-[4px] w-full'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <img
              className='cursor-pointer absolute -bottom-[3px] right-[52px]'
              src='/images/arrow.svg'
              alt='Trade lock indicator'
              width={11}
              height={11}
            />
          </div>
        </div>
        <div
          onClick={handleOpenModal}
          className='bg-product-card-bg flex-[150px] bg-[length:100%_100%] bg-no-repeat pb-[14px] h-fit px-3 relative'
        >
          <div className='space-y-[3px] absolute top-[6px] right-1'>
            <img src='/images/status-logo.svg' alt='' width={19} height={19} />
            <img src='/images/status-logo.svg' alt='' width={19} height={19} />
            <img src='/images/status-logo.svg' alt='' width={19} height={19} />
          </div>
          <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
            <img
              className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
              alt='Skin background'
              width='77'
              height='77'
              src='/images/skin-bg.png'
            />
            <img
              className='drop-shadow-product-shd'
              src='/images/product-1.png'
              alt='product'
            />
          </div>
          <h3 className='text-[15px]'>MP5-SD</h3>
          <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
            from $332.59
          </span>
          <div className='relative'>
            <div className='flex gap-[2px] pb-1'>
              <div className='w-2 h-[4px] bg-[#4FCD33]'></div>
              <div className='w-[3px] h-[4px] bg-[#76CD33]'></div>
              <div className='w-[6px] h-[4px] bg-[#A4CD33]'></div>
              <div className='w-[3px] h-[4px] bg-[#CDC833]'></div>
              <div className='w-[6px] h-[4px] bg-[#ECE636]'></div>
              <div className='w-2 h-[4px] bg-[#FFF600]'></div>
              <div className='w-[3px] h-[4px] bg-[#FFD400]'></div>
              <div className='w-[3px] h-[4px] bg-[#FFAE00]'></div>
              <div className='w-full h-[4px] bg-[#FF4800]'></div>
            </div>
            <img
              className='cursor-pointer absolute -bottom-[3px] right-[52px]'
              src='/images/arrow.svg'
              alt='Trade lock indicator'
              width={11}
              height={11}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OfferSectionKnife = ({ handleOpenModal }) => (
  <div className='rounded-[9px] overflow-hidden bg-[#212044]'>
    <div className='flex items-center justify-between py-[10px] px-[14px] flex-wrap gap-y-5'>
      <div className='xl:w-[389px] w-full flex-1'>
        <Search className='sm:!bg-[#393959] !bg-[#303047] h-[30px]' />
      </div>
      <div className='flex items-center sm:gap-6 gap-1 xl:w-fit w-full justify-between'>
        <div className='flex gap-6'>
          <Dropdown
            options={[
              {
                id: 'sort-1',
                label: 'Price: Max',
                imageSrc: '/images/sort-1.svg',
              },
              {
                id: 'sort-2',
                label: 'Price: Min',
                imageSrc: '/images/sort-2.svg',
              },
              {
                id: 'sort-3',
                label: 'Float: Max',
                imageSrc: '/images/sort-1.svg',
              },
              {
                id: 'sort-4',
                label: 'Float: Min',
                imageSrc: '/images/sort-2.svg',
              },
            ]}
            defaultOption={{
              id: 'sort-0',
              label: 'Relevance',
              imageSrc: '/images/lines.svg',
            }}
          />

          <Dropdown
            options={[
              {
                id: 'sort-1',
                label: 'CS2',
                imageSrc: '/images/fors.svg',
              },
              {
                id: 'sort-2',
                label: 'CS:GO',
                imageSrc: '/images/fors.svg',
              },
            ]}
            defaultOption={{
              id: 'sort-0',
              label: 'CS2',
              imageSrc: '/images/fors.svg',
            }}
          />
        </div>
        <button className='w-[33px] h-[31px] rounded-[4px] flex items-center justify-center bg-[#615FA6]'>
          <img src='/images/load.svg' alt='' />
        </button>
      </div>
    </div>
    <div className='py-5 px-[14px] flex flex-wrap bg-skin-card gap-[10px] custom-scroll overflow-y-auto max-h-[785px] relative'>
      {/* tooltip */}
      {/* <div className='tooltip bg-[#09083C38] pt-[29px] pb-[27px] px-[23px] rounded-[4px] absolute left-10 top-10 z-[100] w-[556px] shadow-[6px_29px_60.9px_0px_#00000042]  backdrop-blur-[56px]'>
        <h3 className='text-[#B292FF] text-[15px]'>Предмет заблокирован в Steam</h3>
        <h3 className='text-[15px] my-[19px]'>Истекает: 19.06.2025, 12:00:00</h3>
        <p className='text-[#FFFFFF99]'>После этого разблокируется возможность вывода в инвентарь</p>
      </div> */}
      <div
        onClick={handleOpenModal}
        className='bg-product-card-bg bg-[length:100%_100%] flex-[150px] bg-no-repeat pb-[14px] h-fit px-3'
      >
        <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
          <img
            className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
            alt='Skin background'
            width='77'
            height='77'
            src='/images/skin-bg.png'
          />
          <img
            className='drop-shadow-product-shd'
            src='/images/knife-product-2.png'
            alt='product'
          />
        </div>
        <h3 className='text-[15px]'>MP5-SD</h3>
        <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
          from $332.59
        </span>
        <div className='relative'>
          <div className='grid grid-cols-9 gap-[2px] pb-1'>
            {[
              '#4FCD33',
              '#76CD33',
              '#A4CD33',
              '#CDC833',
              '#ECE636',
              '#FFF600',
              '#FFD400',
              '#FFAE00',
              '#FF9000',
            ].map((color, index) => (
              <div
                key={index}
                className='h-[4px] w-full'
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <img
            className='cursor-pointer absolute -bottom-[3px] right-[52px]'
            src='/images/arrow.svg'
            alt='Trade lock indicator'
            width={11}
            height={11}
          />
        </div>
      </div>
      <div
        onClick={handleOpenModal}
        className='bg-product-card-bg bg-[length:100%_100%] flex-[150px] bg-no-repeat pb-[14px] h-fit px-3'
      >
        <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
          <img
            className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
            alt='Skin background'
            width='77'
            height='77'
            src='/images/skin-bg.png'
          />
          <img
            className='drop-shadow-product-shd'
            src='/images/knife-product-2.png'
            alt='product'
          />
        </div>
        <h3 className='text-[15px]'>MP5-SD</h3>
        <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
          from $332.59
        </span>
        <div className='relative'>
          <div className='grid grid-cols-9 gap-[2px] pb-1'>
            {[
              '#4FCD33',
              '#76CD33',
              '#A4CD33',
              '#CDC833',
              '#ECE636',
              '#FFF600',
              '#FFD400',
              '#FFAE00',
              '#FF9000',
            ].map((color, index) => (
              <div
                key={index}
                className='h-[4px] w-full'
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <img
            className='cursor-pointer absolute -bottom-[3px] right-[52px]'
            src='/images/arrow.svg'
            alt='Trade lock indicator'
            width={11}
            height={11}
          />
        </div>
      </div>
      <div
        onClick={handleOpenModal}
        className='bg-product-card-bg bg-[length:100%_100%] flex-[150px] bg-no-repeat pb-[14px] h-fit px-3 relative'
      >
        <div className='rounded-[4px] bg-[#615FA638] p-[10px] flex gap-2 items-center absolute top-[6px] right-2 z-50 cursor-pointer'>
          <svg
            width='12'
            height='16'
            viewBox='0 0 12 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.6667 6H10.6667V4.66666C10.6667 2.09344 8.57325 0 6 0C3.42675 0 1.33334 2.09344 1.33334 4.66666V6H0.333344C0.28956 5.99997 0.246201 6.00857 0.205745 6.02532C0.165288 6.04206 0.12853 6.06661 0.09757 6.09757C0.0666105 6.12853 0.0420577 6.16529 0.0253158 6.20574C0.00857393 6.2462 -2.86884e-05 6.28956 7.18756e-08 6.33334V14.6667C7.18756e-08 15.402 0.597969 16 1.33334 16H10.6667C11.402 16 12 15.402 12 14.6667V6.33334C12 6.28956 11.9914 6.2462 11.9747 6.20574C11.9579 6.16529 11.9334 6.12853 11.9024 6.09757C11.8715 6.06661 11.8347 6.04206 11.7943 6.02532C11.7538 6.00857 11.7104 5.99997 11.6667 6ZM6.99806 12.9632C7.00322 13.0098 6.9985 13.057 6.98419 13.1016C6.96989 13.1463 6.94634 13.1874 6.91507 13.2223C6.8838 13.2572 6.84552 13.2852 6.80272 13.3043C6.75992 13.3234 6.71357 13.3333 6.66669 13.3333H5.33334C5.28646 13.3333 5.24011 13.3234 5.19731 13.3043C5.15451 13.2852 5.11623 13.2572 5.08496 13.2223C5.05369 13.1874 5.03014 13.1463 5.01584 13.1016C5.00154 13.057 4.99681 13.0098 5.00197 12.9632L5.21225 11.0723C4.87078 10.8239 4.66669 10.431 4.66669 10C4.66669 9.26466 5.26466 8.66666 6.00003 8.66666C6.73541 8.66666 7.33337 9.26462 7.33337 10C7.33337 10.431 7.12928 10.8239 6.78781 11.0723L6.99806 12.9632ZM8.66666 6H3.33334V4.66666C3.33334 3.19628 4.52962 2 6 2C7.47038 2 8.66666 3.19628 8.66666 4.66666V6Z'
              fill='#B292FF'
            />
          </svg>
          <span>3 дн.</span>
        </div>
        <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
          <img
            className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
            alt='Skin background'
            width='77'
            height='77'
            src='/images/skin-bg.png'
          />
          <img
            className='drop-shadow-product-shd'
            src='/images/knife-product-2.png'
            alt='product'
          />
        </div>
        <h3 className='text-[15px]'>MP5-SD</h3>
        <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
          from $332.59
        </span>
        <div className='relative'>
          <div className='grid grid-cols-9 gap-[2px] pb-1'>
            {[
              '#4FCD33',
              '#76CD33',
              '#A4CD33',
              '#CDC833',
              '#ECE636',
              '#FFF600',
              '#FFD400',
              '#FFAE00',
              '#FF9000',
            ].map((color, index) => (
              <div
                key={index}
                className='h-[4px] w-full'
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <img
            className='cursor-pointer absolute -bottom-[3px] right-[52px]'
            src='/images/arrow.svg'
            alt='Trade lock indicator'
            width={11}
            height={11}
          />
        </div>
      </div>
      <div
        onClick={handleOpenModal}
        className='bg-product-card-bg bg-[length:100%_100%] flex-[150px] bg-no-repeat pb-[14px] h-fit px-3 relative'
      >
        <div className='space-y-[3px] absolute top-[6px] right-1'>
          <img src='/images/status-logo.svg' alt='' width={19} height={19} />
          <img src='/images/status-logo.svg' alt='' width={19} height={19} />
          <img src='/images/status-logo.svg' alt='' width={19} height={19} />
        </div>
        <div className='min-h-[128px] relative z-10 flex items-center justify-center'>
          <img
            className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'
            alt='Skin background'
            width='77'
            height='77'
            src='/images/skin-bg.png'
          />
          <img
            className='drop-shadow-product-shd'
            src='/images/knife-product-2.png'
            alt='product'
          />
        </div>
        <h3 className='text-[15px]'>MP5-SD</h3>
        <span className='text-[#B292FF] text-[13px] mt-[10px] mb-4'>
          from $332.59
        </span>
        <div className='relative'>
          <div className='flex gap-[2px] pb-1'>
            <div className='w-2 h-[4px] bg-[#4FCD33]'></div>
            <div className='w-[3px] h-[4px] bg-[#76CD33]'></div>
            <div className='w-[6px] h-[4px] bg-[#A4CD33]'></div>
            <div className='w-[3px] h-[4px] bg-[#CDC833]'></div>
            <div className='w-[6px] h-[4px] bg-[#ECE636]'></div>
            <div className='w-2 h-[4px] bg-[#FFF600]'></div>
            <div className='w-[3px] h-[4px] bg-[#FFD400]'></div>
            <div className='w-[3px] h-[4px] bg-[#FFAE00]'></div>
            <div className='w-full h-[4px] bg-[#FF4800]'></div>
          </div>
          <img
            className='cursor-pointer absolute -bottom-[3px] right-[52px]'
            src='/images/arrow.svg'
            alt='Trade lock indicator'
            width={11}
            height={11}
          />
        </div>
      </div>
    </div>
  </div>
);

// Main TradeSkins component
const TradeSkins = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenBasket = () => {
    setOpenBasket(!openBasket);
  };
  // Skin data with varied titles and prices for realism
  const skins = [
    {
      imageSrc: '/images/skin-img-1.svg',
      title: 'Attack Vector',
      price: 'from $332.59',
    },
    {
      imageSrc: '/images/skin-img-1.svg',
      title: 'Attack Vector',
      price: 'from $450.99',
    },
    {
      imageSrc: '/images/skin-img-1.svg',
      title: 'Attack Vector',
      price: 'from $275.30',
    },
  ];

  // Checkbox items for Exterior accordion
  const exteriorCheckboxItems = [
    { id: 'exterior-check-1', label: 'Factory New' },
    { id: 'exterior-check-2', label: 'Minimal Wear' },
    { id: 'exterior-check-3', label: 'Field-Tested' },
    { id: 'exterior-check-4', label: 'Well-Worn' },
  ];

  // Checkbox items for Type accordion
  const typeCheckboxItems = [
    { id: 'type(Sniper)-check-1', label: 'Rifle' },
    { id: 'type(Pistol)-check-2', label: 'Pistol' },
    { id: 'type(Knife)-check-3', label: 'Knife' },
    { id: 'type-check-4', label: 'Gloves' },
  ];

  // Checkbox items for Type accordion
  const otherCheckboxItems = [
    { id: 'type(Sniper)-check-1', label: 'Rifle' },
    { id: 'type(Pistol)-check-2', label: 'Pistol' },
    { id: 'type(Knife)-check-3', label: 'Knife' },
    { id: 'type-check-4', label: 'Gloves' },
  ];

  // Checkbox items for Type accordion
  const colorCheckboxItems = [
    { id: 'Affordable-items', label: 'Affordable items' },
    { id: 'Affordable-items1', label: 'Affordable items' },
    { id: 'Affordable-items2', label: 'Affordable items' },
    { id: 'Affordable-items3', label: 'Affordable items' },
  ];

  return (
    <>
      <div>
        <HeaderTwo />
        <div className='max-w-[1794px] mx-auto md:mt-[58px] mt-[6px] mb-[95px] flex md:gap-5 sm:flex-row flex-col gap-2 items-stretch  sm:bg-none bg-skin-card'>
          <div className='sm:hidden bg-[#312f47] p-[5px] rounded-[4px] grid grid-cols-2 gap-2 mx-[15px] mt-3'>
            <div className='py-[13px] px-[11px] text-center rounded-[4px]'>
              Мой инвентарь
            </div>
            <div className='py-[13px] px-[11px] text-center rounded-[4px] bg-[#5B5A7F]'>
              Инвентарь сайта
            </div>
          </div>

          <OfferSection
            title='Your Offer'
            total='$5,585,555'
            skins={skins}
            handleOpenFilter={handleOpenFilter}
            handleOpenModal={handleOpenModal}
          />

          {/* midle sec */}
          <div
            className={`min-w-[272px] sm:rounded-[9px] overflow-hidden lg:block hidden sm:relative fixed top-0 sm:w-auto sm:h-auto sm:bg-none z-[100] overflow-y-auto bg-skin-card left-0 w-full h-full  ${
              openFilter && '!block'
            }`}
          >
            <div className='flex items-center justify-between bg-[#212044] p-[18px]'>
              <div className='flex items-center gap-2'>
                <img src='/images/repete.svg' alt='Exchange icon' />
                <span>Exchange</span>
              </div>
              <button className='lg:hidden block' onClick={handleOpenFilter}>
                <img src='/images/close-2.svg' alt='' />
              </button>
            </div>
            <div className='p-[15px] pb-5 bg-skin-card space-y-6'>
              <div className='space-y-[15px]'>
                <a className='yellow-btn h-[50px] block text-center' href='#!'>
                  Trade Items
                </a>
                <div className='bg-[#252438] py-4 rounded-[9px] text-center'>
                  <h5 className='text-[17px]'>$5,670.44</h5>
                  <span className='text-sm opacity-[0.52]'>
                    Needed for Trade
                  </span>
                </div>
                <div className='border border-[#5553808A] rounded-[9px] p-1 flex gap-2'>
                  <button className='py-[15px] flex-1 px-7 h-11 text-center'>
                    Basic
                  </button>
                  <button className='yellow-btn flex-1 !px-5'>Advanced</button>
                </div>
              </div>
              <div>
                <span className='opacity-[0.46] text-lg mb-3 block'>
                  Price Range
                </span>
                <div className='flex gap-[2px] items-center'>
                  <div className='py-4 px-[15px] rounded-md bg-[#252438] flex-1'>
                    <span>$5,550</span>
                  </div>
                  <span className='opacity-[0.61]'>-</span>
                  <div className='py-4 px-[15px] rounded-md bg-[#252438] flex-1'>
                    <span>$5,550</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-lg mb-6'>Trade Lock</h3>
                <div className='relative'>
                  <div className='grid grid-cols-9 gap-[2px] pb-1 border-b-[2px] border-white'>
                    {[
                      '#4FCD33',
                      '#76CD33',
                      '#A4CD33',
                      '#CDC833',
                      '#ECE636',
                      '#FFF600',
                      '#FFD400',
                      '#FFAE00',
                      '#FF9000',
                    ].map((color, index) => (
                      <div
                        key={index}
                        className='h-[13px] w-full'
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <img
                    className='cursor-pointer absolute -bottom-1 right-8'
                    src='/images/arrow.svg'
                    alt='Trade lock indicator'
                  />
                </div>
                <div className='flex items-center gap-2 mt-3'>
                  <img src='/images/look.svg' alt='Lock icon' />
                  <h3 className='text-sm text-[#F79618]'>
                    Less than 8 days locked
                  </h3>
                </div>
              </div>
              <Accordion title='Exterior'>
                {exteriorCheckboxItems.map(({ id, label }) => (
                  <div key={id} className='custom-checkbox'>
                    <input type='checkbox' id={id} />
                    <label htmlFor={id}>{label}</label>
                  </div>
                ))}
              </Accordion>
              <Accordion title='Type'>
                {typeCheckboxItems.map(({ id, label }) => (
                  <div key={id} className='custom-checkbox'>
                    <input type='checkbox' id={id} />
                    <label htmlFor={id}>{label}</label>
                  </div>
                ))}
              </Accordion>
              <Accordion title='Color'>
                {colorCheckboxItems.map(({ id, label }) => (
                  <div key={id} className='custom-checkbox'>
                    <input type='checkbox' id={id} />
                    <label htmlFor={id}>{label}</label>
                  </div>
                ))}
              </Accordion>
              <Accordion title='Other'>
                {otherCheckboxItems.map(({ id, label }) => (
                  <div key={id} className='custom-checkbox'>
                    <input type='checkbox' id={id} />
                    <label htmlFor={id}>{label}</label>
                  </div>
                ))}
              </Accordion>
              <div className='flex items-center gap-[6px]'>
                <button
                  className='bg-[#292840] rounded-[9px] p-[18px] w-full'
                  onClick={handleOpenFilter}
                >
                  Reset filter
                </button>
                <button
                  className='yellow-btn !px-2 !h-[50px] lg:hidden block'
                  onClick={handleOpenFilter}
                >
                  Apply filter
                </button>
              </div>
            </div>
          </div>
          {/* midle sec */}

          <Basket onClose={handleOpenBasket} isOpen={openBasket} />

          <div className='flex-1 sm:block hidden'>
            <div className='mb-[18px] rounded-[9px] overflow-hidden bg-[#212044] md:block hidden'>
              <div className='flex items-center justify-between p-[18px] h-[50px]'>
                <div className='flex items-center gap-2'>
                  <span>$ 5.585.555</span>
                  <div className='py-1 px-[10px] rounded-[3px] bg-[#615FA675]'>
                    2
                  </div>
                  <button className='text-[#555490] text-sm'>Clear</button>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    width='16'
                    height='12'
                    viewBox='0 0 15 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 3.49853C15.0004 3.56434 14.9878 3.62958 14.9629 3.69051C14.938 3.75144 14.9013 3.80686 14.855 3.85359L11.855 6.85412C11.8083 6.90047 11.7529 6.93714 11.6919 6.96203C11.631 6.98692 11.5658 6.99953 11.5 6.99915C11.435 6.99995 11.3705 6.98806 11.31 6.96414C11.2179 6.9263 11.1392 6.86182 11.084 6.77896C11.0287 6.69611 10.9995 6.59864 11 6.49906V4.99879H6.5C6.36739 4.99879 6.24022 4.94611 6.14645 4.85232C6.05268 4.75854 6 4.63134 6 4.4987V2.49835C6 2.36572 6.05268 2.23852 6.14645 2.14473C6.24022 2.05095 6.36739 1.99826 6.5 1.99826H11V0.497992C11.0004 0.399088 11.0301 0.302528 11.0854 0.220522C11.1407 0.138516 11.2191 0.0747458 11.3106 0.0372764C11.4021 -0.000193094 11.5027 -0.00967939 11.5996 0.0100167C11.6965 0.0297128 11.7854 0.0777069 11.855 0.14793L14.855 3.14846C14.9474 3.24161 14.9994 3.36733 15 3.49853ZM8.5 5.99897H4V4.4987C3.99951 4.39997 3.96981 4.3036 3.91464 4.22172C3.85948 4.13985 3.78131 4.07614 3.69 4.03862C3.59895 4.00033 3.49859 3.98986 3.4016 4.00855C3.3046 4.02724 3.21532 4.07425 3.145 4.14364L0.145008 7.14418C0.0986675 7.1909 0.062005 7.24632 0.0371227 7.30725C0.0122404 7.36818 -0.000372089 7.43342 8.35714e-06 7.49924C-0.000372089 7.56505 0.0122404 7.6303 0.0371227 7.69123C0.062005 7.75216 0.0986675 7.80757 0.145008 7.8543L3.145 10.8548C3.19172 10.9012 3.24713 10.9379 3.30805 10.9627C3.36897 10.9876 3.4342 11.0002 3.5 10.9999C3.56559 11.0016 3.63066 10.9879 3.69 10.9599C3.78131 10.9223 3.85948 10.8586 3.91464 10.7768C3.96981 10.6949 3.99951 10.5985 4 10.4998V8.99951H8.5C8.63261 8.99951 8.75978 8.94682 8.85355 8.85303C8.94732 8.75925 9 8.63205 9 8.49942V6.49906C9 6.36643 8.94732 6.23923 8.85355 6.14544C8.75978 6.05166 8.63261 5.99897 8.5 5.99897Z'
                      fill='#615FA6'
                    />
                  </svg>

                  <span>You receive</span>
                </div>
              </div>
              <div className='p-[15px] pb-5 md:flex flex-wrap gap-3 bg-skin-card hidden'>
                {skins.map((skin, index) => (
                  <SkinCard key={index} {...skin} />
                ))}
              </div>
            </div>
            <OfferSectionKnife handleOpenModal={handleOpenModal} />
          </div>

          <div className='sm:hidden flex mx-[6px] py-[13px] px-[10px] bg-text-gradient justify-between items-center rounded-[4px]' onClick={handleOpenBasket}>
            <div>
              <span className='text-xs mb-2 text-[#0A0D1C]'>Вы отдаете:</span>
              <p className='text-[#303137]'>
                $0.<span className='text-[13px]'>00</span>
              </p>
            </div>
            <svg
              width='17'
              height='17'
              viewBox='0 0 15 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 3.49853C15.0004 3.56434 14.9878 3.62958 14.9629 3.69051C14.938 3.75144 14.9013 3.80686 14.855 3.85359L11.855 6.85412C11.8083 6.90047 11.7529 6.93714 11.6919 6.96203C11.631 6.98692 11.5658 6.99953 11.5 6.99915C11.435 6.99995 11.3705 6.98806 11.31 6.96414C11.2179 6.9263 11.1392 6.86182 11.084 6.77896C11.0287 6.69611 10.9995 6.59864 11 6.49906V4.99879H6.5C6.36739 4.99879 6.24022 4.94611 6.14645 4.85232C6.05268 4.75854 6 4.63134 6 4.4987V2.49835C6 2.36572 6.05268 2.23852 6.14645 2.14473C6.24022 2.05095 6.36739 1.99826 6.5 1.99826H11V0.497992C11.0004 0.399088 11.0301 0.302528 11.0854 0.220522C11.1407 0.138516 11.2191 0.0747458 11.3106 0.0372764C11.4021 -0.000193094 11.5027 -0.00967939 11.5996 0.0100167C11.6965 0.0297128 11.7854 0.0777069 11.855 0.14793L14.855 3.14846C14.9474 3.24161 14.9994 3.36733 15 3.49853ZM8.5 5.99897H4V4.4987C3.99951 4.39997 3.96981 4.3036 3.91464 4.22172C3.85948 4.13985 3.78131 4.07614 3.69 4.03862C3.59895 4.00033 3.49859 3.98986 3.4016 4.00855C3.3046 4.02724 3.21532 4.07425 3.145 4.14364L0.145008 7.14418C0.0986675 7.1909 0.062005 7.24632 0.0371227 7.30725C0.0122404 7.36818 -0.000372089 7.43342 8.35714e-06 7.49924C-0.000372089 7.56505 0.0122404 7.6303 0.0371227 7.69123C0.062005 7.75216 0.0986675 7.80757 0.145008 7.8543L3.145 10.8548C3.19172 10.9012 3.24713 10.9379 3.30805 10.9627C3.36897 10.9876 3.4342 11.0002 3.5 10.9999C3.56559 11.0016 3.63066 10.9879 3.69 10.9599C3.78131 10.9223 3.85948 10.8586 3.91464 10.7768C3.96981 10.6949 3.99951 10.5985 4 10.4998V8.99951H8.5C8.63261 8.99951 8.75978 8.94682 8.85355 8.85303C8.94732 8.75925 9 8.63205 9 8.49942V6.49906C9 6.36643 8.94732 6.23923 8.85355 6.14544C8.75978 6.05166 8.63261 5.99897 8.5 5.99897Z'
                fill='#634912'
              />
            </svg>

            <div className='text-right'>
              <span className='text-xs mb-2 text-[#0A0D1C]'>Вы отдаете:</span>
              <p className='text-[#303137]'>
                $0.<span className='text-[13px]'>00</span>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Modal onClose={handleOpenModal} isOpen={openModal} />
    </>
  );
};

export default TradeSkins;
