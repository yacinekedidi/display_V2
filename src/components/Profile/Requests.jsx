import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getUser from '../../apis/getUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import RequestCard from './RequestCard';

const getRequestedProducts = async () => {
  try {
    const response = await axios.get(
      `https://pure-plains-38823.herokuapp.com/products?sort=created_at`
    );

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const useGetRequestedProducts = (requestIds) => {
  const [requestedProducts, setRequestsProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!requestIds.length) {
      setLoading(false);
      return;
    }
    getRequestedProducts().then((prods) => {
      setRequestsProducts((prev) => {
        let filtered = [];
        prods.forEach((product) => {
          const requests = product.requests.filter((req) =>
            requestIds.includes(req.id)
          );
          requests.length && filtered.push({ product, requests });
        });
        return filtered;
      });
      setLoading(false);
    });
  }, [requestIds]);

  return { requestedProducts, loading };
};

const useGetUserRequests = (uid) => {
  const [requestsIds, setRequestsIds] = useState([]);

  useEffect(() => {
    getUser(uid)
      .then((res) => {
        setRequestsIds(res.requests);
      })
      .catch((err) => console.log(err));
  }, [uid]);

  return { requestsIds };
};

const Requests = () => {
  const { username: uid } = useParams();
  const { requestsIds } = useGetUserRequests(uid);
  const { requestedProducts, loading } = useGetRequestedProducts(requestsIds);
  console.log(requestedProducts);

  if (loading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <>
      <div className="py-4"></div>
      <div className="h-full w-full max-w-7xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {requestedProducts.map((reqProd) => (
            <RequestCard
              product={reqProd.product}
              requests={reqProd.requests}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Requests;
