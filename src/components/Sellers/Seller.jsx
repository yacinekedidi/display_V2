import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useGetSeller } from '../../hooks/useGetSeller';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import ScrollToTop from '../../Utils/ScrollToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SellerHome from './SellerHome';

const Seller = () => {
  const { pathname } = useLocation();
  const { sellername } = useParams();

  const { seller, loading } = useGetSeller(sellername);

  const under =
    pathname.split('/').length > 3 ? pathname.split('/').slice(-1)[0] : null;

  if (loading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <>
      <Header />
      <div className="m-auto mb-40 flex w-full flex-col items-center justify-center  lg:max-w-7xl">
        <div className=" w-full p-4">
          <SellerHome seller={seller} />
        </div>
        <div className="text-md flex w-full justify-center py-2 font-cairo shadow-sm  shadow-gray-900 md:gap-16">
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
            to={{ pathname: 'about' }}
          >
            <span className="">about</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 px-4 py-1 text-white ${
              under === 'products'
                ? 'text-orange-400 shadow-xl shadow-gray-900'
                : ''
            }`}
            to={{ pathname: 'products' }}
          >
            <span className="">products</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 px-4 py-1 text-white ${
              under === 'requests'
                ? 'text-orange-400 shadow-xl shadow-gray-900'
                : ''
            }`}
            to={{ pathname: 'requests' }}
          >
            <span className="">requests</span>
          </Link>
        </div>

        <ScrollToTop />
        <>
          <div className="relative m-4 h-full w-full max-w-7xl">
            <div className="-z-10  hidden w-full lg:block">
              <img
                className="object-cover"
                // need a generic placeholder in case the seller doesn't have one
                src={
                  seller.banner_url ||
                  'https://images.unsplash.com/photo-1631477076114-9123f721b9dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                }
                alt="logo"
              />
            </div>
            <Outlet context={[seller]} />
          </div>
        </>
      </div>
      <Footer className="max-w-7xl" />
    </>
  );
};

export default Seller;
