import { Link, Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from '../../Utils/ScrollToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProfileHome from './ProfileHome';

const Profile = () => {
  const { pathname } = useLocation();
  const under =
    pathname.split('/').length > 3 ? pathname.split('/').slice(-1)[0] : null;

  return (
    <>
      <Header className="max-w-7xl" sticky={true} />
      <div className="m-auto mb-40 flex w-full flex-col items-center justify-center  lg:max-w-7xl">
        <ProfileHome />
        <div className="text-md flex w-full justify-center py-4 px-4 font-cairo shadow-sm  shadow-gray-900 md:gap-16">
          <Link
            className={`flex items-center gap-x-2 px-4 py-1 text-white  ${
              !under ? 'text-orange-400 shadow-xl shadow-gray-900' : ''
            }`}
            to=""
          >
            <span className="">home</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 px-4 py-1 text-white  ${
              under === 'about'
                ? 'text-orange-400 shadow-xl shadow-gray-900'
                : ''
            }`}
            to="about"
          >
            <span className="">about</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 px-4 py-1 text-white ${
              under === 'favorites'
                ? 'text-orange-400 shadow-xl shadow-gray-900'
                : ''
            }`}
            to={`favorites`}
          >
            <span className="">favorites</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 px-4 py-1 text-white ${
              under === 'history'
                ? 'text-orange-400 shadow-xl shadow-gray-900'
                : ''
            }`}
            to={`history`}
          >
            <span className="">history</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 px-4 py-1 text-white ${
              under === 'requests'
                ? 'text-orange-400 shadow-xl shadow-gray-900'
                : ''
            }`}
            to={`requests`}
          >
            <span className="">requests</span>
          </Link>
        </div>

        <ScrollToTop />
        <Outlet />
      </div>
      <div>
        <div className="py-4"></div>
        <div
          className="w-full shadow-sm shadow-gray-800"
          style={{ backgroundColor: '#231f20' }}
        >
          <Footer className="max-w-7xl" />
        </div>
      </div>
    </>
  );
};

export default Profile;
