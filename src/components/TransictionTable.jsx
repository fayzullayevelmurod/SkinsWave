export default function TransactionTable() {
  const transactions = [
    {
      id: 1,
      type: 'Deposit',
      details: '$ 50.44',
      status: 'New',
      date: '18.05.2025',
    },
    {
      id: 2,
      type: 'Deposit',
      details: '+ $ 150.44',
      status: 'Completed',
      date: '18.05.2025',
      positive: true,
    },
    {
      id: 3,
      type: 'Deposit',
      details: '$ 1,450.55',
      status: 'Canceled',
      date: '18.05.2025',
    },
    {
      id: 4,
      type: 'Trade',
      details: 'icons',
      status: 'Accepted',
      date: '18.05.2025',
      hasIcons: true,
    },
    {
      id: 5,
      type: 'Trade',
      details: 'icons',
      status: 'Canceled',
      date: '18.05.2025',
      hasIcons: true,
    },
    {
      id: 6,
      type: 'Deposit',
      details: '$ 50.44',
      status: 'New',
      date: '18.05.2025',
    },
    {
      id: 7,
      type: 'Deposit',
      details: '$ 50.44',
      status: 'Canceled',
      date: '18.05.2025',
    },
    {
      id: 8,
      type: 'Deposit',
      details: '+ $ 250.66',
      status: 'Completed',
      date: '18.05.2025',
      positive: true,
    },
    {
      id: 9,
      type: 'Deposit',
      details: '$ 50.44',
      status: 'New',
      date: '18.05.2025',
    },
    {
      id: 10,
      type: 'Deposit',
      details: '$ 50.44',
      status: 'New',
      date: '18.05.2025',
    },
    {
      id: 11,
      type: 'Deposit',
      details: '$ 50.44',
      status: 'Canceled',
      date: '18.05.2025',
    },
    {
      id: 12,
      type: 'Deposit',
      details: '+ $ 250.66',
      status: 'Completed',
      date: '18.05.2025',
      positive: true,
    },
    {
      id: 13,
      type: 'Deposit',
      details: '$ 50.44',
      status: 'New',
      date: '18.05.2025',
    },
  ];

  const getStatusBadge = (status) => {
    const baseClasses =
      'border rounded px-3 py-2 flex items-center gap-2 text-[13px] h-[30px]';
    switch (status) {
      case 'New':
        return `${baseClasses} text-[#8D91CE] border-[#8D91CE] bg-[#8083B024]`;
      case 'Completed':
        return `${baseClasses} text-[#6AFF40] border-[#6AFF40] bg-[#17D10A26]`;
      case 'Canceled':
        return `${baseClasses} bg-[#E12C2C38] border-[#E12C2C] text-[#FF4040]`;
      case 'Accepted':
        return `${baseClasses} text-[#6AFF40] border-[#6AFF40] bg-[#17D10A26]`;
      default:
        return `${baseClasses} bg-gray-600 text-white`;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'New':
        return '/images/star.svg';
      case 'Completed':
        return '/images/green-check.svg';
      case 'Canceled':
        return '/images/red-x.svg';
      case 'Accepted':
        return '/images/green-check.svg';
      default:
        return '/images/star.svg';
    }
  };

  const TradeIcons = () => (
    <div className='flex items-center space-x-2'>
      <div className='md:w-10 w-[34px] h-[34px] md:h-[37px] flex items-center justify-center bg-[#494969] rounded-[3.04px]'>
        <img src='/images/user.svg' alt='user' />
      </div>
      <img
        className='md:w-auto md:h-auto w-[15px]'
        src='/images/arrow-right.svg'
        alt='arrow'
      />
      <div className='md:w-10 w-[34px] h-[34px] md:h-[37px] flex items-center justify-center bg-[#494969] rounded-[3.04px]'>
        <img
          src='/images/knife2.svg'
          alt='knife'
          style={{
            filter: 'drop-shadow(-3.52px 4px 6.1px #00000059)',
            borderRadius: '8px',
          }}
        />
      </div>
      <div className='md:w-10 w-[34px] h-[34px] md:h-[37px] flex items-center justify-center bg-[#494969] rounded-[3.04px]'>
        <img
          src='/images/gun.svg'
          alt='gun'
          style={{
            filter: 'drop-shadow(-5.87px 8px 10.9px #00000066)',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );

  return (
    <div className='md:mt-[38px] mt-[18px]'>
      <div className='w-full md:block hidden'>
        <table className='w-full'>
          <thead>
            <tr className='text-white opacity-[42%]'>
              <th className='pl-[54px] py-5 text-left'>Type</th>
              <th className='py-5 text-left'>Details</th>
              <th className='py-5 text-left'>Status</th>
              <th className='py-5 text-left'>Date</th>
              <th className='py-5 pr-[37px] text-right'></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id}>
                <td className='py-[10px]'>
                  <div
                    className={`pl-[54px] rounded-l-md min-h-[58px] flex items-center text-white ${
                      index % 2 === 0 ? 'bg-[#23243b]' : 'bg-[#17192e]'
                    }`}
                  >
                    {transaction.type}
                    {transaction.type === 'Trade' && (
                      <svg
                        width='9'
                        height='5'
                        viewBox='0 0 9 5'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='ml-2 opacity-40'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M4.00008 4.8012L-4.19675e-08 0.960104L0.999843 -3.49698e-07L4.5 3.36104L8.00016 -4.37045e-08L9 0.960104L4.99992 4.8012C4.86732 4.92849 4.6875 5 4.5 5C4.3125 5 4.13268 4.92849 4.00008 4.8012Z'
                          fill='white'
                        />
                      </svg>
                    )}
                  </div>
                </td>
                <td className='py-[10px]'>
                  <div
                    className={`flex items-center -ml-[2px] min-h-[58px] ${
                      index % 2 === 0 ? 'bg-[#23243b]' : 'bg-[#17192e]'
                    }`}
                  >
                    {transaction.hasIcons ? (
                      <TradeIcons />
                    ) : (
                      <span
                        className={
                          transaction.positive ? 'text-[#6AFF40]' : 'text-white'
                        }
                      >
                        {transaction.details}
                      </span>
                    )}
                  </div>
                </td>
                <td className='py-[10px]'>
                  <div
                    className={`min-h-[58px] flex items-center -ml-[2px] ${
                      index % 2 === 0 ? 'bg-[#23243b]' : 'bg-[#17192e]'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 ${getStatusBadge(
                        transaction.status
                      )}`}
                    >
                      <img
                        src={getStatusIcon(transaction.status)}
                        alt={`${transaction.status} icon`}
                        className='w-4 h-4'
                      />
                      <span>{transaction.status}</span>
                    </div>
                  </div>
                </td>
                <td className='py-[10px]'>
                  <div
                    className={`text-white min-h-[58px] flex items-center -ml-[2px] ${
                      index % 2 === 0 ? 'bg-[#23243b]' : 'bg-[#17192e]'
                    }`}
                  >
                    {transaction.date}
                  </div>
                </td>
                <td className='py-[10px]'>
                  <div
                    className={`pr-[37px] rounded-r-md min-h-[58px] flex items-center -ml-[2px] justify-end ${
                      index % 2 === 0 ? 'bg-[#23243b]' : 'bg-[#17192e]'
                    }`}
                  >
                    <button className='text-[#9290C4] underline hover:text-white text-sm transition-colors'>
                      Show more
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='md:hidden block space-y-[15px]'>
        <div>
          <div className='flex border border-[#FFFFFF14]'>
            <div className='bg-[#24243E] w-[128px] divide-y divide-[#36374d]'>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Type
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Details
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Status
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Date
              </div>
            </div>
            <div className='bg-translate flex-1 divide-y divide-[#36374d]'>
              <div className='h-11 flex items-center px-7'>Deposit</div>
              <div className='h-11 flex items-center px-7'>$ 50.44 </div>
              <div className='h-11 flex items-center px-7'>
                <div className='border rounded px-3 py-2 flex items-center gap-2 text-[13px] h-7 text-[#8D91CE] border-[#8D91CE] bg-[#8083B024]'>
                  <img
                    alt='New icon'
                    class='w-[11px] h-[10px]'
                    src='/images/star.svg'
                  />
                  <span className='leading-[100%]'>New</span>
                </div>
              </div>
              <div className='h-11 py-[15px] px-7'>Type</div>
            </div>
          </div>
          <button className='w-full py-[15px] text-sm bg-[#545785]'>
            Show more
          </button>
        </div>
        <div>
          <div className='flex border border-[#FFFFFF14]'>
            <div className='bg-[#24243E] w-[128px] divide-y divide-[#36374d]'>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Type
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Details
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Status
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Date
              </div>
            </div>
            <div className='bg-translate flex-1 divide-y divide-[#36374d]'>
              <div className='h-11 flex items-center px-7'>Deposit</div>
              <div className='h-11 flex items-center px-7 text-[#6AFF40]'>
                + $ 50.44
              </div>
              <div className='h-11 flex items-center px-7'>
                <div class='border rounded px-3 py-2 flex items-center gap-2 text-[13px] h-7 text-[#6AFF40] border-[#6AFF40] bg-[#17D10A26]'>
                  <img
                    alt='Completed icon'
                    class='w-3 h-5'
                    src='/images/green-check.svg'
                  />
                  <span>Completed</span>
                </div>
              </div>
              <div className='h-11 py-[15px] px-7'>Type</div>
            </div>
          </div>
          <button className='w-full py-[15px] text-sm bg-[#545785]'>
            Show more
          </button>
        </div>
        <div>
          <div className='flex border border-[#FFFFFF14]'>
            <div className='bg-[#24243E] w-[128px] divide-y divide-[#36374d]'>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Type
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Details
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Status
              </div>
              <div className='h-11 p-[15px] text-[#80808f] border-r border-[#FFFFFF14]'>
                Date
              </div>
            </div>
            <div className='bg-translate flex-1 divide-y divide-[#36374d]'>
              <div className='h-11 flex items-center px-7'>Deposit</div>
              <div className='h-11 flex items-center px-7 '>
                <TradeIcons />
              </div>
              <div className='h-11 flex items-center px-7'>
                <div class='border rounded px-3 py-2 flex items-center gap-2 text-[13px] h-7 bg-[#E12C2C38] border-[#E12C2C] text-[#FF4040]'>
                  <img alt='Canceled icon' src='/images/red-x.svg' />
                  <span>Canceled</span>
                </div>
              </div>
              <div className='h-11 py-[15px] px-7'>Type</div>
            </div>
          </div>
          <button className='w-full py-[15px] text-sm bg-[#545785]'>
            Show more
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-center space-x-2 md:mt-11 mt-[30px]'>
        <button className='bg-[#3F3D48] opacity-50 w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer'>
          <svg
            width='8'
            height='13'
            viewBox='0 0 8 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='rotate-180'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z'
              fill='#BDBDBD'
            />
          </svg>
        </button>
        <button className='bg-[#4F5180] w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer'>
          1
        </button>
        <button className='bg-[#181E30] w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer'>
          2
        </button>
        <span className='bg-[#181E30] w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer'>
          ...
        </span>
        <button className='bg-[#181E30] w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer'>
          9
        </button>
        <button className='bg-[#181E30] w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer'>
          10
        </button>
        <button className='bg-[#181E30] w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer'>
          <svg
            width='8'
            height='13'
            viewBox='0 0 8 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z'
              fill='#fff'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
