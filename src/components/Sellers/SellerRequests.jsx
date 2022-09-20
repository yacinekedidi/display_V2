import React from 'react';
import { useOutletContext } from 'react-router-dom';
import UseGetSellerProductsByName from '../../hooks/UseGetSellerProductsByName';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import RequestCard from '../Profile/RequestCard';
import RequestOverviewInfo from './RequestOverviewInfo';

const SellerRequests = () => {
  const [seller] = useOutletContext();
  const { requestedProds, loading } = UseGetSellerProductsByName(seller);
  if (loading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <div
      className="static top-0 flex w-full max-w-7xl flex-col  justify-center gap-y-4 bg-transparent p-4 shadow-sm
    shadow-gray-100 lg:absolute"
    >
      {requestedProds.map((reqProd) => (
        <div className="flex w-full gap-4 backdrop-blur-md">
          <div className="w-[25%] p-4 shadow-sm shadow-orange-200">
            <RequestCard
              product={reqProd.product}
              requests={reqProd.requests}
            />
          </div>
          <div className="w-[75%] p-4  shadow-sm shadow-orange-200">
            {reqProd.requests.map((req) => (
              <RequestOverviewInfo userId={req.user_id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellerRequests;
