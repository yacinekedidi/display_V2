import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetSellersByCategory from '../../hooks/useGetSellersByCategory';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CategoryMain from './CategoryMain';
import CategorySideBar from './CategorySideBar';

// sidebar (sellername, countries)
// get seller by category endpoint (find seller that has products of that category)
// use product characteristics ? unrealistic without sub-categories
// filter by most favorite/latest/views

const Category = () => {
  const { categoryname } = useParams();
  const { loading = true, sellerNames } = useGetSellersByCategory(categoryname);
  const [selectedSellers, setSelectedSellers] = useState([]);

  if (loading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <>
      <Header />

      <div className="flex justify-center text-orange-200">
        <div className="flex h-full w-full max-w-7xl flex-wrap justify-center gap-x-12 md:w-full md:justify-between lg:flex-nowrap">
          <CategorySideBar
            sellerNames={sellerNames}
            selectedSellers={selectedSellers}
            setSelectedSellers={setSelectedSellers}
          />
          <CategoryMain
            selectedSellers={selectedSellers}
            categoryName={categoryname}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
