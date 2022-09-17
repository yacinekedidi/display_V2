import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getUser from '../../apis/getUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

// const getRequestedProducts = async (requestIds) => {
//   try {
//     const endpoints = requestIds.map(
//       (product_id) =>
//         `https://pure-plains-38823.herokuapp.com/products/${product_id}`
//     );
//     const response = await Promise.all(
//       endpoints.map((endpoint) => axios.get(endpoint))
//     );
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const useGetRequestedProducts = (requestIds) => {
//   const [requestedProducts, setRequestsProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getRequestedProducts(requestIds).then((prods) => {
//       setRequestsProducts(prods);
//       setLoading(false);
//     });
//   }, [requestIds]);

//   return { requestedProducts, loading };
// };

// const useGetUserRequests = () => {
//   const [requestsIds, setRequestsIds] = useState([]);

//   useEffect(() => {
//     getUser()
//       .then((res) => {
//         setRequestsIds(res.requests);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return { requestsIds };
// };

const Requests = () => {
  // const { username } = useParams();
  // const { requestsIds } = useGetUserRequests();
  // console.log(requestsIds);
  // const { requestedProducts, loading } = useGetRequestedProducts(requestsIds);
  // console.log(requestedProducts);

  // if (loading)
  //   return (
  //     <ModalOverlay>
  //       <LoadingSpinner />
  //     </ModalOverlay>
  //   );
  return <div>Requests</div>;
};

export default Requests;
