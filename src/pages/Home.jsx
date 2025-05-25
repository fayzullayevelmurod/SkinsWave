import Intro from '../components/home/Intro';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <Intro />
      </div>
      <Footer />
    </>
  );
}
