import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import UseGetUser from '../../hooks/useGetUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import ScrollToTop from '../../Utils/ScrollToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AddProduct from './Add/AddProduct';
import ProductCard from './ProductCard';

// recently viewed might be implemented in local storage

const options = [
  { value: 'latest', label: 'latest' },
  { value: 'popular', label: 'popular' },
  { value: 'viewed', label: 'viewed' },
];

const sortWith = {
  latest: 'created_at',
  popular: 'favorite_count',
  viewed: 'views',
};

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchOption, setSearchOption] = useState({
    value: searchParams.get('sort'),
    label: searchParams.get('sort'),
  });
  const [addingProduct, setIsAddingProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const LIMIT = useRef(20);
  const page = useRef(0);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { user } = UseGetUser();

  // const renderCount = useRef(0);

  const fetchMoreData = () => {
    (async () => {
      try {
        const params = {
          sort: sortWith[searchOption.value],
          limit: LIMIT.current,
          reverse: -1,
        };
        const res = await axios.get(
          `https://pure-plains-38823.herokuapp.com/products/page/${page.current}`,
          {
            params,
          }
        );
        // console.log(res.data.length, LIMIT, page.current + 1);
        setHasMore(
          (res.data.length + items.length) /
            (LIMIT.current * (page.current + 1)) >=
            1
        );

        if (res.data.length) {
          // setPage((prev) => prev + 1);
          page.current += 1;
          setItems((prev) => [...prev, ...res.data]);
        }
        setIsLoading(false);
        // else {
        //   page.current = 0;
        // }
      } catch (err) {}
    })();
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

  const handleQuery = (e) => {
    setSearchOption({
      value: e.value,
      label: e.value,
    });
    setSearchParams({ sort: e.value });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    fetchMoreData();

    return () => {
      page.current = 0;
      setItems([]);
    };
  }, [searchParams]);

  // seller_name = user.me.username

  if (isLoading || !Object.keys(user).length)
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
                <button
                  className="rounded-md 
                p-0.5 font-cairo font-extrabold  hover:opacity-80"
                  style={{ color: 'rgb(26,21,21)' }}
                >
                  <AddCircleOutlineIcon
                    className="text-white hover:text-orange-600"
                    fontSize="large"
                    onClick={() => {
                      setIsAddingProduct(true);
                    }}
                  />
                </button>
              </div>
            </div>

            <div
              className="relative my-8 flex flex-col-reverse rounded-sm  shadow-sm shadow-orange-200 drop-shadow-md lg:flex-row"
              style={{ backgroundColor: 'rgb(26,21,21)' }}
            >
              <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
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
                        key={uuidv4()}
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
