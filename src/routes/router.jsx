import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';

const BannedList = lazy(() => import('../components/Admin/BannedList'));
const Dashboard = lazy(() => import('../components/Admin/Dashboard'));
const DashboardHome = lazy(() => import('../components/Admin/DashboardHome'));
const Flags = lazy(() => import('../components/Admin/Flags'));
const Logs = lazy(() => import('../components/Admin/Logs'));
const Sellers = lazy(() => import('../components/Admin/Sellers'));
const Users = lazy(() => import('../components/Admin/Users'));
const Category = lazy(() => import('../components/Categories/Category'));
const Messages = lazy(() => import('../components/Chatroom/Messages/Messages'));
const NotificationsSeller = lazy(() =>
  import('../components/Notifications/seller/NotificationsSeller')
);
const Notifications = lazy(() =>
  import('../components/Notifications/user/Notifications')
);
const ProductProfile = lazy(() =>
  import('../components/Products/ProductProfile')
);
const ProductsList = lazy(() => import('../components/Products/ProductsList'));
const About = lazy(() => import('../components/Profile/About'));
const Favorites = lazy(() => import('../components/Profile/Favorites'));
const Following = lazy(() => import('../components/Profile/Following'));
const ProductsViewed = lazy(() => import('../components/Profile/history'));
const Profile = lazy(() => import('../components/Profile/Profile'));
const RequestDetails = lazy(() =>
  import('../components/Profile/RequestDetails')
);
const Requests = lazy(() => import('../components/Profile/Requests'));
const Plan = lazy(() => import('../components/Sellers/Plan'));
const Seller = lazy(() => import('../components/Sellers/Seller'));
const SellerAbout = lazy(() => import('../components/Sellers/SellerAbout'));
const SellerFollowersList = lazy(() =>
  import('../components/Sellers/SellerFollowersList')
);
const SellerProducts = lazy(() =>
  import('../components/Sellers/SellerProducts')
);
const SellerRequests = lazy(() =>
  import('../components/Sellers/SellerRequests')
);
const NotFound = lazy(() => import('../Utils/NotFound'));
const AdminPrivateRoute = lazy(() => import('./AdminPrivateRoute'));
const SellerPrivateRoute = lazy(() => import('./SellerPrivateRoute'));
const UserPrivateRoute = lazy(() => import('./UserPrivateRoute'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: 'admin/:adminId/dashboard',
    element: (
      <AdminPrivateRoute>
        <Dashboard />
      </AdminPrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <DashboardHome />,
      },
      {
        path: 'logs',
        element: <Logs />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'sellers',
        element: <Sellers />,
      },
      {
        path: 'flags',
        element: <Flags />,
      },
      {
        path: 'banned',
        element: <BannedList />,
      },
    ],
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
      {
        path: 'following',
        element: (
          <UserPrivateRoute>
            <Following />
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
        path: 'plan',
        element: (
          <SellerPrivateRoute>
            <Plan />
          </SellerPrivateRoute>
        ),
      },
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
      {
        path: 'followers',
        element: (
          <SellerPrivateRoute>
            <SellerFollowersList />
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
    path: 'user/:username/notifications',
    element: (
      <UserPrivateRoute>
        <Notifications />
      </UserPrivateRoute>
    ),
  },
  {
    path: 'seller/:sellername/notifications',
    element: (
      <SellerPrivateRoute>
        <NotificationsSeller />
      </SellerPrivateRoute>
    ),
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
