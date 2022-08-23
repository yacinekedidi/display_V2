import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';
// useLocation
import { v4 as uuidv4 } from 'uuid';
import { manyImages, MockImages } from '../../mockdata/productImages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../Utils/ScrollToTop';
import ProductCard from './ProductCard';

// useSearchParams
// sort the products by default depending on the query param
// droplist for sort (latest, most popular, recenlty viewed) => fetch data with the selected option
// recently viewed might be implemented in local storage

const ProductsList = () => {
  // const { search } = useLocation();
  // console.log(search);
  const [items, setItems] = useState(
    Array.from({ length: 20 }).fill({
      image:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
    })
  );
  const [page, setPage] = useState(0);
  const totalPages = 10;
  const options = [
    { value: 'latest', label: 'latest' },
    { value: 'popular', label: 'popular' },
    { value: 'viewed', label: 'viewed' },
  ];

  // console.log(items);
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // const i = page * 20 + 1;
    // setPage((prev) => prev + 1);
    setPage((prev) => prev + 1);

    setTimeout(() => {
      setItems((prev) =>
        prev.concat(
          Array.from({ length: 20 }).fill({
            image:
              'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
          })
        )
      );
    }, 1500);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      padding: '.01rem',
      cursor: 'pointer',
    }),
    control: (_, { selectProps: { width } }) => ({
      // none of react-select's styles are passed to <Control />
      display: 'flex',
      opacity: '1',
      cursor: 'pointer',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const defaultValue = { value: 'latest', label: 'latest' };
  const [searchParams, setSearchParams] = useSearchParams();
  // const searchTerm = searchParams.get("sort") || "";
  const handleQuery = useCallback(
    (e) => {
      const sort = e.value || 'latest';
      if (sort) setSearchParams({ sort });
    },
    [setSearchParams]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleQuery('');
  }, [handleQuery]);

  return (
    <>
      <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
        <Header sticky={false} />
        <div className="flex w-full justify-end">
          <Select
            styles={customStyles}
            options={options}
            defaultValue={defaultValue}
            onChange={handleQuery}
          />
        </div>
        <div
          className="my-8 flex flex-col-reverse rounded-sm  shadow-sm shadow-orange-200 drop-shadow-md lg:flex-row"
          style={{ backgroundColor: 'rgb(26,21,21)' }}
        >
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={page < totalPages}
            loader={<h4>Loading...</h4>}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-20 p-8 font-sans ">
              {items.map(({ image }, index) => (
                <ProductCard image={image} key={uuidv4()} index={index} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default ProductsList;
