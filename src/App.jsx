import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TradeSkins from './pages/TradeSkins';
import Home from './pages/Home';
import Transactions from './pages/Transactions';

function App() {
  return (
    <div className='overflow-hidden max-w-[1920px] mx-auto'>
      <Routes>
        <Route path='/' element={<Map />} />
        <Route path='/home' element={<Home />} />
        <Route path='/main/*' element={<Main />} />
        <Route path='/trade-skins' element={<TradeSkins />} />
      </Routes>
    </div>
  );
}

export default App;
