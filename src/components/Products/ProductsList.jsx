import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';
import getProductsByPage from '../../apis/getProductsByPage';
import { useAuth } from '../../contexts/user-context';
import useGetProductsByPage from '../../hooks/useGetProductsByPage';
import UseGetUser from '../../hooks/useGetUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import ScrollToTop from '../../Utils/ScrollToTop';
import useUtils from '../../Utils/useUtils';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AddProduct from './Add/AddProduct';
import ProductCard from './ProductCard';

// recently viewed might be implemented in local storage

const ProductsList = () => {
  const { customStyles, options } = useUtils();
  const [searchParams, setSearchParams] = useSearchParams();
  const [addingProduct, setIsAddingProduct] = useState(false);

  const { user } = UseGetUser();
  const { items, isLoading, hasMore, setSearchOption, searchOption } =
    useGetProductsByPage(searchParams);

  const handleQuery = (e) => {
    setSearchOption({
      value: e.value,
      label: e.value,
    });
    setSearchParams({ sort: e.value });
  };

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  // if (!items.length) return 'EMPTY';
  return (
    <>
      <Header className="max-w-7xl" sticky={true} />
      <div className=" m-auto flex w-full flex-col items-center justify-center lg:max-w-7xl">
        {addingProduct ? (
          <AddProduct
            addingProduct={addingProduct}
            setIsAddingProduct={setIsAddingProduct}
          />
        ) : (
          <>
            <div className=" flex  items-center self-end ">
              <div className="flex w-full justify-end">
                <Select
                  styles={customStyles}
                  options={options}
                  value={searchOption}
                  onChange={handleQuery}
                />
              </div>
              <div>
                <Tooltip title="Add product">
                  <button
                    className="rounded-md 
                p-0.5 font-cairo font-extrabold  hover:opacity-80"
                    style={{ color: 'rgb(26,21,21)' }}
                    onClick={() => {
                      setIsAddingProduct(true);
                    }}
                  >
                    <AddCircleOutlineIcon
                      className="text-white hover:text-orange-600"
                      fontSize="large"
                    />
                  </button>
                </Tooltip>
              </div>
            </div>

            <div
              className="relative my-8 flex flex-col-reverse rounded-sm  shadow-sm shadow-orange-200 drop-shadow-md lg:flex-row"
              style={{ backgroundColor: 'rgb(26,21,21)' }}
            >
              <InfiniteScroll
                dataLength={items.length}
                next={getProductsByPage}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
              >
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-20 p-4 font-sans ">
                  {items.map((item, index) => {
                    // console.log(item);
                    return (
                      <ProductCard
                        // image={item.pics_url ? item.pics_url[0] : ''}
                        product={item}
                        user={user}
                        key={item._id}
                        itemId={item._id}
                        index={index}
                      />
                    );
                  })}
                </div>
              </InfiniteScroll>
            </div>
          </>
        )}

        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default ProductsList;
