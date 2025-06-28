import CustomSelect from '../components/CustomSelect';
import Search from '../components/Search';
import TransactionTable from '../components/TransictionTable';

export default function Transactions() {
  const statusOptions = ['Status', 'Pending', 'Completed', 'Failed'];
  const typeOptions = ['Type', 'Deposit', 'Withdrawal', 'Transfer'];

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-[25px] leading-[167%] font-normal font-GothamPro text-white'>
          Transactions
        </h2>
        <div className='flex gap-11 items-center'>
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
          <div className='w-[389px]'>
            <Search />
          </div>
        </div>
      </div>
      <TransactionTable />
    </div>
  );
}
