import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Messages from './components/Messages/Messages';
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
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // console.log(user?.user);

  const cookies = new Cookies();
  const authToken = cookies.get('token');

  useEffect(() => {
    if (!authToken) {
      setUserIsLoggedIn(false);
      return;
    }

    const client = connectClient(cookies);
    setUser(client);
    setUserIsLoggedIn(true);
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={[user, setUser]}>
          <div className="m-auto mb-40 flex w-full flex-col items-center justify-center ">
            <Header
              userIsLoggedIn={userIsLoggedIn}
              setUserIsLoggedIn={setUserIsLoggedIn}
            />
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
          </div>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
