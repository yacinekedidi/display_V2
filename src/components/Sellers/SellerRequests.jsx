import React from 'react';
import { useOutletContext } from 'react-router-dom';

const SellerRequests = () => {
  const [seller] = useOutletContext();

  return <div>SellerRequests</div>;
};

export default SellerRequests;
