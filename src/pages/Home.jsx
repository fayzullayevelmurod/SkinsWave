import BottomHero from '../components/home/BottomHero';
import CheaperItems from '../components/home/CheaperItems';
import CustomerReviews from '../components/home/CustomerReviews';
import GetMorePlay from '../components/home/GetMorePlay';
import Intro from '../components/home/Intro';
import MostTraded from '../components/home/MostTraded';
import TradeSkins from '../components/home/TradeSkins';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <Intro />
        <GetMorePlay />
        <MostTraded />
      </div>
      <TradeSkins />
      <CustomerReviews />
      <CheaperItems />
      <BottomHero />
      <Footer />
    </>
  );
}
