import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getUser from '../../../apis/getUser';
import DescriptionFormatted from '../../../Utils/DescriptionFormatted';
import LoadingSpinner from '../../../Utils/LoadingSpinner';
import ModalOverlay from '../../../Utils/ModalOverlay';

const addRecentlySearchedProduct = async (recentlySearched, uid) => {
  const response = await axios.patch(
    `https://pure-plains-38823.herokuapp.com/users/${uid}/search/${recentlySearched}`
  );

  return response.data;
};

const useAddRecentlySearchedProduct = (recentlySearched, user) => {
  const [newUser, setnewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (user?.me?.id.length && recentlySearched?.length)
      addRecentlySearchedProduct(recentlySearched, user.me.id)
        .then((user) => setnewUser(user))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    else {
      getUser(user.me.id).then((u) => setnewUser(u));
      setIsLoading(false);
    }
  }, [user, recentlySearched]);

  return { newUser, isLoading, isError };
};

const SearchResults = ({
  user,
  results,
  recentlySearched,
  setSearch,
  showSearchDraw,
}) => {
  const { newUser, isLoading, isError } = useAddRecentlySearchedProduct(
    recentlySearched,
    user
  );

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );

  if (isError) return <div>Something went wrong!</div>;

  return (
    <>
      <div className="w-100 flex gap-4 py-1.5 px-4">
        {newUser?.recently_searched?.map((searched, index) => (
          <p
            key={index}
            className="cursor-pointer flex-wrap rounded-full border-2 border-orange-200 px-4 py-1 font-cairo 
          text-lg text-orange-200 hover:bg-blue-gray-900"
            onClick={() => setSearch(searched)}
          >
            {searched}
          </p>
        ))}
      </div>
      <div className="scrollbar flex flex-col gap-4 overflow-y-auto p-2 text-orange-200">
        {results.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            onClick={() => {
              showSearchDraw();
              // here
            }}
          >
            <div className="flex cursor-pointer  flex-col bg-gray-900  shadow-sm shadow-orange-100 hover:bg-gray-800 sm:flex-row">
              <div className="w-32">
                <img
                  className="object-cover"
                  src={product.pics_url.length > 0 ? product.pics_url[0] : ''}
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col  px-4">
                <div className="font-cairo text-2xl ">{product.title}</div>

                <div className="text-md py-2 text-justify font-sans text-white">
                  {product.descriptions.length > 10 ? (
                    <DescriptionFormatted description={product.descriptions} />
                  ) : (
                    product.descriptions
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
