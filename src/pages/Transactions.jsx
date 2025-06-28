import CustomSelect from '../components/CustomSelect';
import Search from '../components/Search';
import TransactionTable from '../components/TransictionTable';

export default function Transactions() {
  const statusOptions = ['Status', 'Pending', 'Completed', 'Failed'];
  const typeOptions = ['Type', 'Deposit', 'Withdrawal', 'Transfer'];

  return (
    <div>
      <div className='flex md:items-center justify-between md:gap-5 gap-[18px] md:flex-row flex-col '>
        <h2 className='sm:text-[25px] text-xl sm:leading-[167%] font-normal font-GothamPro text-white'>
          Transactions
        </h2>
        <div className='flex gap-11 items-center md:w-fit w-full'>
          <CustomSelect
            label='Status'
            options={statusOptions}
            defaultOption='Status'
          />
          <CustomSelect
            label='Type'
            options={typeOptions}
            defaultOption='Type'
          />
          <div className='xl:w-[389px] sm:w-[250px] md:ml-0 ml-auto'>
            <Search />
          </div>
        </div>
      </div>
      <TransactionTable />
    </div>
  );
}
