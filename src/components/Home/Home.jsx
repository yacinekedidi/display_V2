import ScrollToTop from '../../Utils/ScrollToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProductSections from './HomeProductSections';
import HomBrandSection from './HomSellersSection';

const Home = () => {
  return (
    <>
      <Header className="max-w-7xl" sticky={true} />
      <div
        className="relative m-auto w-full lg:max-w-7xl"
        style={{ backgroundColor: '#231f20' }}
      >
        <div className="container m-auto">
          <div className=" flex flex-col items-center justify-center ">
            <div className=" shadow-sm shadow-orange-100">
              <HomBrandSection />
              <HomeProductSections />
            </div>
          </div>

          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
