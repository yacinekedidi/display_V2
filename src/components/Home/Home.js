import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../Utils/ScrollToTop";
import HomeProductSections from "./HomeProductSections";

const Home = () => {
  return (
    <>
      <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
        <Header sticky={true} />
        {/* HomeBrandSection */}
        <HomeProductSections />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
