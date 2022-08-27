import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Messages from './components/Messages/Messages';
import { client } from './components/Messages/stream';
import Notifications from './components/Notifications/Notifications';
import ProductProfile from './components/Products/ProductProfile';
import ProductsList from './components/Products/ProductsList';
import About from './components/Profile/About';
import Favorites from './components/Profile/Favorites';
import Profile from './components/Profile/Profile';
import Requests from './components/Profile/Requests';
import { connectClient } from './components/Utils/connectClient';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  // console.log(user);
  const cookies = new Cookies();
  const authToken = cookies.get('token');
  useEffect(() => {
    if (!client._getConnectionID()) {
      authToken &&
        authToken.length &&
        (async () => {
          try {
            const client = await connectClient(cookies, authToken);
            setUser(client);
          } catch (err) {
            console.error(err);
          }
        })();
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
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
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
