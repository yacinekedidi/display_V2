import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../Utils/ScrollToTop';
import HomBrandSection from './HomBrandSection';
import HomeProductSections from './HomeProductSections';
import NavBar from './NavBar';
import PromoteSlider from './PromoteSlider';

const Home = () => {
  return (
    <div className="relative">
      <div className="container m-auto">
        <div className="lg:max-w-screen-7xl m-auto flex w-full flex-col items-center justify-center overflow-x-hidden">
          <Header sticky={true} />
          <HomBrandSection />
          {/* <PromoteSlider /> */}
          <HomeProductSections />
        </div>

        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
