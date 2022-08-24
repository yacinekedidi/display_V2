import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../Utils/ScrollToTop';
import ProfileHome from './ProfileHome';

const Profile = () => {
  const { pathname } = useLocation();

  const under =
    pathname.split('/').length > 2 ? pathname.split('/').slice(-1)[0] : null;
  return (
    <>
      <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
        <Header />
        <div className="flex gap-4 font-sans">
          <Link
            className={`flex items-center gap-x-2 text-white  ${
              !under ? 'text-orange-400 underline underline-offset-8' : ''
            }`}
            to=""
          >
            {/* <FontAwesomeIcon icon={faUser} size="sm" /> */}
            <span className="">Home</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 text-white  ${
              under === 'about'
                ? 'text-orange-400 underline underline-offset-8'
                : ''
            }`}
            to="about"
          >
            {/* <FontAwesomeIcon icon={faUser} size="sm" /> */}
            <span className="">About</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 text-white ${
              under === 'favorites'
                ? 'text-orange-400 underline underline-offset-8'
                : ''
            }`}
            to={`favorites`}
          >
            {/* <FontAwesomeIcon icon={faHeart} size="sm" /> */}
            <span className="">Favorites</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 text-white ${
              under === 'requests'
                ? 'text-orange-400 underline underline-offset-8'
                : ''
            }`}
            to={`requests`}
          >
            {/* <FontAwesomeIcon icon={faDollarSign} /> */}
            <span className="">Requests</span>
          </Link>
        </div>
        <div className="m-4 p-4">
          <ProfileHome />
        </div>
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
