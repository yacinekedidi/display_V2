import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

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

const SellerProducts = () => {
  const [seller] = useOutletContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        // ${seller.name}
        `https://pure-plains-38823.herokuapp.com/products/seller/${seller.name}`
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, [seller]);

  return (
    <div
      className="static top-0 flex h-full w-full max-w-7xl  justify-center bg-transparent p-4 shadow-sm shadow-gray-100 lg:absolute "
      // style={{ backgroundColor: '#231f20' }}
    >
      <div className="flex h-full w-full flex-col items-center p-8">
        <div className="grid w-full gap-6 backdrop-blur-sm md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              className="group relative flex flex-col items-center p-6"
              key={product._id}
            >
              <div className="absolute left-0 top-10 cursor-pointer hover:opacity-80">
                <FontAwesomeIcon
                  className="text-red-600"
                  icon={faHeart}
                  size="lg"
                />
              </div>
              <div className="p-2"></div>
              <Link to={`/products/${product._id}`} key={product._id}>
                <div className=" p-2">
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
              {/* <div className="p-2"></div>
              <div
                className="text-md absolute  bottom-0 hidden w-full justify-center  rounded-md bg-gray-50
                        py-1 font-cairo font-black hover:opacity-80  group-hover:flex"
              >
                <button className="">Enea</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;