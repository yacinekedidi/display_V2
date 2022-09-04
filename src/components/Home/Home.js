import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../Utils/ScrollToTop';
import HomBrandSection from './HomBrandSection';
import HomeProductSections from './HomeProductSections';
import NavBar from './NavBar';
import PromoteSlider from './PromoteSlider';

const Home = () => {
  return (
    <>
      <div
        className="w-full shadow-sm shadow-gray-800"
        style={{ backgroundColor: '#231f20' }}
      >
        <Header className="max-w-7xl" sticky={true} />
      </div>
      <div className="relative m-auto w-full lg:max-w-7xl">
        <div className="container m-auto">
          <div className="py-4"></div>
          <div className=" flex flex-col items-center justify-center ">
            <div className=" shadow-sm shadow-orange-100">
              <HomBrandSection />
              {/* <PromoteSlider /> */}
              <HomeProductSections />
            </div>
          </div>

          <ScrollToTop />
        </div>
        {/* <Footer /> */}
      </div>
      <div className="py-4"></div>
      <div
        className="w-full shadow-sm shadow-gray-800"
        style={{ backgroundColor: '#231f20' }}
      >
        <Footer className="max-w-7xl" />
      </div>
    </>
  );
};

export default Home;
