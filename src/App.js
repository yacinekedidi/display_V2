import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Messages from './components/Messages/Messages';
import Notifications from './components/Notifications/Notifications';
import ProductProfile from './components/Products/ProductProfile';
import ProductsList from './components/Products/ProductsList';
import About from './components/Profile/About';
import Favorites from './components/Profile/Favorites';
import Profile from './components/Profile/Profile';
import Requests from './components/Profile/Requests';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  console.log(user?.user);
  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path=":username" element={<Profile />}>
            <Route path="about" element={<About />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="requests" element={<Requests />} />
          </Route>
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:productId" element={<ProductProfile />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
