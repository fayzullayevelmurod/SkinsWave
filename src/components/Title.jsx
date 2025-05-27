export default function Title({ title, subTitle, subTitleClass }) {
  return (
    <div>
      <h2 className='md:text-[56px] text-[43px] font-Speed text-transparent bg-clip-text bg-text-gradient leading-[86%] [filter:drop-shadow(0px_3.85px_14.63px_#9A2E1B)]'>
        {title}
      </h2>
      {subTitle && (
        <p
          className={`md:text-[17px] text-sm text-white opacity-50 leading-[167%] pt-4 max-w-[420px] ${subTitleClass}`}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
}
