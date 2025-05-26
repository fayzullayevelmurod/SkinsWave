import GetMorePlay from '../components/home/GetMorePlay';
import Intro from '../components/home/Intro';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <Intro />
        <GetMorePlay />
      </div>
      <Footer />
    </>
  );
}
