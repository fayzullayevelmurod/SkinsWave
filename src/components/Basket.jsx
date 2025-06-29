import { useEffect } from 'react';

export default function Basket({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-[100] bg-[#090C18] overflow-y-auto pb-8 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className='flex items-center justify-between py-[17px] px-[15px] bg-[#212044]'>
        <span>Basket</span>
        <button onClick={onClose}>
          <img src='/images/close-2.svg' alt='' />
        </button>
      </div>
      <div className='sm:hidden bg-[#312f47] p-[5px] rounded-[4px] grid grid-cols-2 gap-2 mx-[15px] mt-3'>
        <div className='py-[13px] px-[11px] text-center rounded-[4px]'>
          Вы отдаете
        </div>
        <div className='py-[13px] px-[11px] text-center rounded-[4px] bg-[#5B5A7F]'>
          Вы получаете
        </div>
      </div>
      <div className='space-y-5 py-5 px-[15px] divide-y divide-[#3f414b]'>
        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center gap-[22px]'>
            <div className='w-[71px] h-[53px] flex items-center justify-center'>
              <img
                className='object-contain'
                src='/images/empty-knife.png'
                alt=''
              />
            </div>
            <div>
              <span className='opacity-[0.55] mb-2 block'>BS — 0.7388</span>
              <span>Pandora Box</span>
            </div>
          </div>
          <div className=''>
            <p>
              $ 5. 651. <span className='text-[#FFFFFF75] text-[13px]'>67</span>{' '}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center gap-[22px]'>
            <div className='w-[71px] h-[53px] flex items-center justify-center'>
              <img
                className='object-contain'
                src='/images/empty-knife.png'
                alt=''
              />
            </div>
            <div>
              <span className='opacity-[0.55] mb-2 block'>BS — 0.7388</span>
              <span>Pandora Box</span>
            </div>
          </div>
          <div className=''>
            <p>
              $ 5. 651. <span className='text-[#FFFFFF75] text-[13px]'>67</span>{' '}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center gap-[22px]'>
            <div className='w-[71px] h-[53px] flex items-center justify-center'>
              <img
                className='object-contain'
                src='/images/empty-knife.png'
                alt=''
              />
            </div>
            <div>
              <span className='opacity-[0.55] mb-2 block'>BS — 0.7388</span>
              <span>Pandora Box</span>
            </div>
          </div>
          <div className=''>
            <p>
              $ 5. 651. <span className='text-[#FFFFFF75] text-[13px]'>67</span>{' '}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center gap-[22px]'>
            <div className='w-[71px] h-[53px] flex items-center justify-center'>
              <img
                className='object-contain'
                src='/images/empty-knife.png'
                alt=''
              />
            </div>
            <div>
              <span className='opacity-[0.55] mb-2 block'>BS — 0.7388</span>
              <span>Pandora Box</span>
            </div>
          </div>
          <div className=''>
            <p>
              $ 5. 651. <span className='text-[#FFFFFF75] text-[13px]'>67</span>{' '}
            </p>
          </div>
        </div>
      </div>

      <div className='px-[15px]'>
        <div className='sm:hidden bg-[#292840] flex mt-[10px] mb-[13px] py-[13px] px-[10px] justify-between items-center rounded-[4px]'>
          <div>
            <span className='text-xs mb-2 opacity-[0.63]'>Вы отдаете:</span>
            <p>
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
              fill='#8786A0'
            />
          </svg>

          <div className='text-right'>
            <span className='text-xs mb-2 opacity-[0.63]'>Вы отдаете:</span>
            <p>
              $0.<span className='text-[13px]'>00</span>
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-[6px]'>
          <button className='flex-1 py-[18px] rounded-[9px] bg-[#292840] text-center'>
            Empty trash
          </button>
          <button className='yellow-btn !h-[50px] gap-[5px] w-fit flex-1 px-0'>
            <svg
              width='22'
              height='10'
              viewBox='0 0 22 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.6263 2.96078C20.6263 3.84314 19.8413 4.55882 18.9583 4.55882C18.0752 4.55882 17.3884 3.84314 17.3884 2.96078C17.3884 2.08824 18.0752 1.37255 18.9583 1.37255C19.8413 1.37255 20.6263 2.08824 20.6263 2.96078ZM18.9583 0C17.7648 0 16.6848 0.759255 16.2354 1.84271C15.9519 2.52635 15.7867 3.27602 15.3616 3.88186L14.2639 5.4462C14.1939 5.54603 14.0762 5.58823 13.9543 5.58823C13.1724 5.58823 12.3616 5.73482 11.6362 5.44287L7.19332 3.65465C5.44264 2.95002 4.10657 0.784314 2.21942 0.784314C1.00276 0.784314 0 1.78431 0 3.0098C0 4.22549 1.00276 5.22549 2.21942 5.22549C2.97186 5.22549 3.76973 5.07645 4.46844 5.35571L9.01145 7.17147C10.7461 7.86477 12.0863 10 13.9544 10C14.3424 10 14.7178 9.88593 15.044 9.68924C16.1585 9.01724 16.7154 7.58938 17.7663 6.82175C18.5409 6.25592 19.5281 6.04732 20.3789 5.60414C21.3397 5.1036 22 4.11249 22 2.97059C21.9999 1.33333 20.6263 0 18.9583 0ZM18.9583 0.980392C20.1357 0.980392 21.0187 1.87255 21.0187 2.97059C21.0187 4.07843 20.1357 4.97059 18.9583 4.97059C17.879 4.97059 16.9959 4.07843 16.9959 2.97059C16.9959 1.87255 17.879 0.980392 18.9583 0.980392ZM2.21942 1.37255C2.53238 1.37255 2.82584 1.45778 3.07553 1.60761C3.33297 1.76209 3.13621 2.0226 2.85718 1.91176C2.19979 1.67647 1.47372 2 1.20881 2.64706C0.953702 3.30392 1.24805 4.03922 1.88582 4.32353L2.24156 4.46571C2.34793 4.50823 2.33386 4.63725 2.21932 4.63725C1.31674 4.63725 0.590569 3.91176 0.590569 3.0098C0.590667 2.09804 1.31674 1.37255 2.21942 1.37255ZM13.9543 6.17647C14.8373 6.17647 15.5241 6.91176 15.5241 7.81372C15.5241 8.72549 14.8373 9.41176 13.9543 9.41176C13.6077 9.41176 13.3112 9.3369 13.0646 9.19346C12.8369 9.06106 13.0176 8.83835 13.2674 8.92157C13.9543 9.21569 14.6411 8.82353 14.9354 8.19608C15.1317 7.58833 14.9354 6.755 14.2486 6.49029L13.9284 6.36232C13.82 6.31897 13.8374 6.17647 13.9543 6.17647Z'
                fill='#0A0D1C'
              />
            </svg>

            <span>Registration</span>
          </button>
        </div>
      </div>
    </div>
  );
}
