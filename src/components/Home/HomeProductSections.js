import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MockImages } from '../../mockdata/productImages';
import LoadingSpinner from '../Utils/LoadingSpinner';
import ModalOverlay from '../Utils/ModalOverlay';
import HomeProductSection from './HomeProductSection';

// make fetch calls
// get 4 latest products
// get 4 most popular products
// get 4 recently viewed products

// image is just for testing purposes it should be the complete product object from the get API request
// meaning when the user clicks on the product we will pass in the product object to the next component (productCard -> productDetails)
// we can save it as state (like current products)

const HomeProductSections = () => {
  const [isLoading] = useState(false);

  return (
    <div className="p-0 md:p-16">
      {Object.keys(MockImages).map((key) => (
        <HomeProductSection
          title={key}
          products={MockImages[key]}
          key={uuidv4()}
        />
      ))}
      {isLoading ? (
        <ModalOverlay>
          <LoadingSpinner />
        </ModalOverlay>
      ) : (
        ''
      )}
    </div>
  );
};

export default HomeProductSections;
