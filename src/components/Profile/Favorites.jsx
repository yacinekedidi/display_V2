import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

// const products = [
//   {
//     id: 1,
//     productName: 'Nike SuperRep Go',
//     image:
//       'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
//     seller: 'Nike',
//   },
//   {
//     id: 2,
//     productName: 'Headset',
//     image:
//       'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80',
//     seller: 'Dr Dre',
//   },
//   {
//     id: 3,
//     productName: 'Camera',
//     image:
//       'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80',
//     seller: 'SONY',
//   },

//   {
//     id: 4,
//     productName: 'Backpack',
//     image:
//       'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
//     seller: 'NIKON',
//   },
//   {
//     id: 5,
//     productName: 'Nike SuperRep Go',
//     image:
//       'https://images.unsplash.com/photo-1585845786337-2b2b17c55fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
//     seller: 'Nike',
//   },
//   {
//     id: 6,
//     productName: 'Headset',
//     image:
//       'https://images.unsplash.com/photo-1530630458144-014709e10016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
//     seller: 'Dr Dre',
//   },
//   {
//     id: 7,
//     productName: 'Camera',
//     image:
//       'https://images.unsplash.com/photo-1552046122-03184de85e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
//     seller: 'SONY',
//   },

//   {
//     id: 8,
//     productName: 'Backpack',
//     image:
//       'https://images.unsplash.com/photo-1613255348289-1407e4f2f980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80',
//     seller: 'NIKON',
//   },
// ];

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  const handleClick = (productId) => {
    // console.log(productId);
    axios
      .delete(
        `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}/favorites/${productId}`
      )
      .then((res) =>
        setProducts((prev) =>
          prev.filter((product) => productId !== product._id)
        )
      )
      .catch((err) => console.error(err));
  };

  // ${user.me.user_id}
  // 61e8098b63becc1f2d5bc7e9 yass
  // 61e809b542bcd1cf883f0ba9 med
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}`
        );
        setFavorites(response.data?.favorites);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [pathname]);

  useEffect(() => {
    (async () => {
      const endpoints = favorites.map(
        (product_id) =>
          `https://pure-plains-38823.herokuapp.com/products/${product_id}`
      );
      const res = await Promise.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );
      setProducts(res.map((result) => result.data));
      setIsLoading(false);
    })();
  }, [favorites]);

  if (isLoading || !products.length)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <div
      className="container m-0 w-screen rounded-b-lg p-2 shadow-sm shadow-orange-200 sm:mb-4 md:w-full"
      style={{ backgroundColor: '#231f20' }}
    >
      <div className="grid w-full gap-6 md:grid-cols-2  lg:grid-cols-4">
        {/* card */}

        {products.map((product) => (
          <div
            className=" relative flex flex-col items-center p-6"
            key={product._id}
          >
            <div className="absolute left-0 top-10 cursor-pointer ">
              <FontAwesomeIcon
                className={`text-red-600 hover:text-white`}
                onClick={() => handleClick(product._id)}
                icon={faHeart}
                size="lg"
              />
            </div>
            <div className="p-2"></div>
            <Link to={`/products/${product._id}`} key={product._id}>
              <div className="p-2">
                {/* backgroundimage = loader */}
                <div className="">
                  <img
                    className="transition hover:scale-110 "
                    src={product.pics_url[0]}
                    alt=""
                  />
                </div>
              </div>
            </Link>
            <div className="p-4"></div>
            <div
              className="text-md absolute bottom-0  flex w-[95%] justify-center rounded-md
                        bg-orange-400 py-1 font-cairo hover:opacity-80"
            >
              <button className="text-white">Request price options</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
