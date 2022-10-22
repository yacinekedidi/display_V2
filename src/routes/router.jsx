import { createBrowserRouter } from 'react-router-dom';
import Category from '../components/Categories/Category';
import Messages from '../components/Chatroom/Messages/Messages';
import Home from '../components/Home/Home';
import Notifications from '../components/Notifications/Notifications';
import ProductProfile from '../components/Products/ProductProfile';
import ProductsList from '../components/Products/ProductsList';
import About from '../components/Profile/About';
import Favorites from '../components/Profile/Favorites';
import ProductsViewed from '../components/Profile/history';
import Profile from '../components/Profile/Profile';
import RequestDetails from '../components/Profile/RequestDetails';
import Requests from '../components/Profile/Requests';
import Seller from '../components/Sellers/Seller';
import SellerAbout from '../components/Sellers/SellerAbout';
import SellerProducts from '../components/Sellers/SellerProducts';
import SellerRequests from '../components/Sellers/SellerRequests';
import SellerPrivateRoute from './SellerPrivateRoute';
import UserPrivateRoute from './UserPrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'user/:username',
    element: <Profile />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'favorites',
        element: (
          <UserPrivateRoute>
            <Favorites />
          </UserPrivateRoute>
        ),
      },
      {
        path: 'requests',
        element: (
          <UserPrivateRoute>
            <Requests />
          </UserPrivateRoute>
        ),
      },
      {
        path: 'history',
        element: (
          <UserPrivateRoute>
            <ProductsViewed />
          </UserPrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'seller/:sellername',
    element: <Seller />,
    children: [
      {
        path: 'about',
        element: <SellerAbout />,
      },
      {
        path: 'products',
        element: <SellerProducts />,
      },
      {
        path: 'requests',
        element: (
          <SellerPrivateRoute>
            <SellerRequests />
          </SellerPrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'category/:categoryname',
    element: <Category />,
  },
  {
    path: 'user/:userId/notifications',
    element: <Notifications />,
  },
  {
    path: 'messages',
    element: <Messages />,
  },
  {
    path: 'products',
    element: <ProductsList />,
  },
  {
    path: 'products/:productId',
    element: <ProductProfile />,
  },
  {
    path: 'requests/:productName/:requestId',
    element: <RequestDetails />,
  },
]);

export default router;
