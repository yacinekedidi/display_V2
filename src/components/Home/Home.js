import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../Utils/ScrollToTop';
import HomBrandSection from './HomBrandSection';
import HomeProductSections from './HomeProductSections';
import NavBar from './NavBar';
import PromoteSlider from './PromoteSlider';

const Home = () => {
  return (
    <div className="relative m-auto w-full lg:max-w-7xl">
      <div className="container m-auto">
        <div className=" flex flex-col items-center justify-center ">
          <Header sticky={true} />
          <div className=" shadow-sm shadow-orange-100">
            <HomBrandSection />
            {/* <PromoteSlider /> */}
            <HomeProductSections />
          </div>
        </div>

        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
