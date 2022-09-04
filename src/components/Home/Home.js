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
      <Header className="max-w-7xl" sticky={true} />
      <div className="relative m-auto w-full lg:max-w-7xl">
        <div className="container m-auto">
          <div className=" flex flex-col items-center justify-center ">
            <div className=" shadow-sm shadow-orange-100">
              <HomBrandSection />
              {/* <PromoteSlider /> */}
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
