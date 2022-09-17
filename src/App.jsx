import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './components/Categories/Category';
import Messages from './components/Chatroom/Messages/Messages';
import Home from './components/Home/Home';
import Notifications from './components/Notifications/Notifications';
import ProductProfile from './components/Products/ProductProfile';
import ProductsList from './components/Products/ProductsList';
import About from './components/Profile/About';
import Favorites from './components/Profile/Favorites';
import Profile from './components/Profile/Profile';
import Requests from './components/Profile/Requests';
import Seller from './components/Sellers/Seller';
import SellerAbout from './components/Sellers/SellerAbout';
import SellerProducts from './components/Sellers/SellerProducts';
import SellerRequests from './components/Sellers/SellerRequests';
import UseClient from './hooks/useClient';

export const UserContext = createContext();

function App() {
  const [user, setUser, unreadMessages] = UseClient();

  return (
    <>
      <UserContext.Provider value={[user, setUser, unreadMessages]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="user/:username" element={<Profile />}>
              <Route path="about" element={<About />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="requests" element={<Requests />} />
            </Route>
            <Route path="seller/:sellername" element={<Seller />}>
              <Route path="about" element={<SellerAbout />} />
              <Route path="products" element={<SellerProducts />} />
              <Route path="requests" element={<SellerRequests />} />
            </Route>
            <Route path="category/:categoryname" element={<Category />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="products/:productId" element={<ProductProfile />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
