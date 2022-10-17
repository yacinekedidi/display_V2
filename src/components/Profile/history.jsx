import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link, useLocation, useParams } from 'react-router-dom';
import { deleteAllRecentlyViewedProducts } from '../../apis/deleteAllRecentlyViewedProducts';
import { deleteRecentlyViewedProduct } from '../../apis/deleteRecentlyViewedProduct';
import { useAuth } from '../../contexts/user-context';
import { useGetUserViewedProducts } from '../../hooks/useGetUserViewedProducts';
import { useGetUserViewedProductsIds } from '../../hooks/useGetUserViewedProductsIds';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

const ProductsViewed = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { username } = useParams();
  const { viewedProductsIds } = useGetUserViewedProductsIds(pathname, username);
  const {
    products = [],
    setProducts,
    isLoading,
  } = useGetUserViewedProducts(viewedProductsIds);

  const handleClickClearAll = () => {
    deleteAllRecentlyViewedProducts(username)
      .then((products) => setProducts(products))
      .catch(console.error);
  };

  const handleClick = (productId) => {
    deleteRecentlyViewedProduct(productId, username)
      .then(() =>
        setProducts((prev) =>
          prev.filter((product) => productId !== product._id)
        )
      )
      .catch(console.error);
  };

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <div
      className="container m-0 w-screen rounded-b-lg p-2 shadow-md shadow-gray-900 sm:mb-4 md:w-full"
      style={{ backgroundColor: '#231f20' }}
    >
      {user?.me?.role === 'user' ? (
        <div className="flex items-center justify-end gap-1">
          <p className="font-cairo text-xs font-thin text-orange-200">
            clear all
          </p>
          <DeleteOutlineIcon
            className="cursor-pointer text-center text-orange-200 hover:text-orange-600"
            onClick={handleClickClearAll}
          />
        </div>
      ) : null}
      <div className="grid w-full gap-6 md:grid-cols-2  lg:grid-cols-4">
        {products.length
          ? products?.map((product) => (
              <div
                className=" relative flex flex-col items-center p-6"
                key={product._id}
              >
                {user?.me?.role ? (
                  <div className="absolute left-0 top-10 cursor-pointer ">
                    <DeleteOutlineIcon
                      className="text-orange-200 hover:text-orange-600"
                      onClick={() => handleClick(product._id)}
                    />
                  </div>
                ) : null}
                <div className="p-2"></div>
                <Link to={`/products/${product._id}`} key={product._id}>
                  <div className="p-2">
                    <div className="">
                      <img
                        className="transition hover:scale-110 "
                        src={product?.pics_url?.[0]}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
                <div className="p-4"></div>
                {user?.me?.role === 'user' ? (
                  <div
                    className="text-md absolute bottom-0  flex w-[95%] justify-center rounded-md
                        bg-orange-400 py-1 font-cairo hover:opacity-80"
                  >
                    <button className="text-white">
                      Request price options
                    </button>
                  </div>
                ) : null}
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default ProductsViewed;
