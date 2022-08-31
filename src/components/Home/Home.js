import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../Utils/ScrollToTop';
import HomeProductSections from './HomeProductSections';
import NavBar from './NavBar';
import PromoteSlider from './PromoteSlider';

const Home = () => {
  return (
    <div className="relative">
      <div className="container m-auto">
        <div className="m-auto flex w-full flex-col items-center justify-center  lg:max-w-screen-lg">
          <Header sticky={true} />

          {/* HomeBrandSection */}
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
