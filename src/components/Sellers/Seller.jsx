import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import ScrollToTop from '../../Utils/ScrollToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SellerHome from './SellerHome';

const Seller = () => {
  const { pathname } = useLocation();
  const { sellername } = useParams();
  const [seller, setSeller] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pure-plains-38823.herokuapp.com/sellers/name/${sellername}`)
      .then((res) => {
        setSeller(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [sellername]);

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
        <div className="flex gap-4 py-2 font-sans text-sm uppercase">
          <Link
            className={`flex items-center gap-x-2 text-white  ${
              !under ? 'text-orange-400 ' : ''
            }`}
            to=""
          >
            <span className="">Home</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 text-white  ${
              under === 'about' ? 'text-orange-400 ' : ''
            }`}
            to={{ pathname: 'about' }}
          >
            <span className="">About</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 text-white ${
              under === 'products' ? 'text-orange-400 ' : ''
            }`}
            to={{ pathname: 'products' }}
          >
            <span className="">Products</span>
          </Link>
          <Link
            className={`flex items-center gap-x-2 text-white ${
              under === 'requests' ? 'text-orange-400 ' : ''
            }`}
            to={{ pathname: 'requests' }}
          >
            <span className="">Requests</span>
          </Link>
        </div>

        <ScrollToTop />
        <>
          <div className="relative m-4 h-full w-full max-w-7xl">
            <div className="-z-10  hidden w-full lg:block">
              <img
                className="object-cover"
                // need a generic placeholder in case the seller doesn't have one
                src={seller.banner_url}
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
