import {
  faEllipsisVertical,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFetchItems } from '../../hooks/useFetchItems';
import { API_ENDPOINTS } from '../../Utils/constants';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import LoadingWithModal from '../../Utils/LoadingWithModal';
import ModalOverlay from '../../Utils/ModalOverlay';
import BanModal from './BanModal';
import UserCard from './UserCard';

const AccountsList = ({ type = 'user' }) => {
  const isUser = type === 'user';
  const [openMenu, setOpenMenu] = useState(null);
  const [banningUser, setBanningUser] = useState(null);
  const [isBanningUser, setIsBanningUser] = useState(false);
  const {
    items,
    page,
    fetchItems,
    isLoading,
    setSearchedItems,
    searchedItems,
  } = useFetchItems(
    isUser ? `${API_ENDPOINTS.users}` : `${API_ENDPOINTS.sellers}`
  );

  const handleChange = (e) => {
    setSearchedItems(() =>
      items.filter((item) => {
        if (isUser) return item.username.includes(e.target.value);
        return item.name.includes(e.target.value);
      })
    );
  };

  const handleClickEvt = useCallback((e) => {
    if (!e.target.closest('.btn__menu')) setOpenMenu(null);
  }, []);

  const handleKeyDownEvt = useCallback(
    (e) => {
      if (e.key === 'Escape' && openMenu !== null) setOpenMenu(null);
    },
    [openMenu]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickEvt);
    document.addEventListener('keydown', handleKeyDownEvt);

    return () => {
      document.removeEventListener('click', handleClickEvt);
      document.removeEventListener('keydown', handleKeyDownEvt);
    };
  }, [handleClickEvt, handleKeyDownEvt]);

  if (isLoading) return <LoadingWithModal />;

  return (
    <div className="w-full">
      <div className=" my-8 flex w-full justify-center">
        <div className="relative mt-2 w-72">
          <input
            className="w-full rounded-md bg-transparent  bg-gray-900 p-2 shadow-md shadow-black outline-none placeholder:text-sm placeholder:opacity-70"
            placeholder={`Search the currently loaded ${
              isUser ? 'users' : 'sellers'
            }...`}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
            icon={faSearch}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={searchedItems.length}
        next={fetchItems}
        hasMore={!!page.current}
        loader={<LoadingSpinner />}
      >
        {!page.current ? (
          <p className="w-full p-2 text-right font-sans text-xs text-orange-200">
            {searchedItems.length} {isUser ? 'users' : 'sellers'}
          </p>
        ) : null}
        <div className="grid grid-cols-1 place-items-center justify-center justify-items-center gap-x-16 gap-y-20 overflow-auto p-4 font-sans sm:grid-cols-3 md:grid-cols-4">
          {!searchedItems.length && !page.current ? (
            <div>No {isUser ? 'users' : 'sellers'} available!</div>
          ) : (
            searchedItems.map((item) => (
              <div className="group flex gap-2 p-4" key={item._id}>
                <UserCard item={item} isUser={isUser} />
                <button
                  className="btn__menu relative hidden self-start group-hover:block"
                  onClick={() =>
                    setOpenMenu((prev) => (item._id !== prev ? item._id : null))
                  }
                >
                  <FontAwesomeIcon
                    className="text-white hover:opacity-80"
                    icon={faEllipsisVertical}
                  />
                  <ul
                    className={`absolute right-0 gap-2 py-2 text-left  ${
                      openMenu === item._id ? 'flex' : 'hidden'
                    }  w-28 flex-col bg-gray-900 text-xs shadow-sm shadow-black`}
                  >
                    <li
                      className="p-2 hover:bg-gray-600"
                      onClick={() => {
                        setIsBanningUser(true);
                        setBanningUser(item);
                        console.log(
                          `ban ${isUser ? item.username : item.name}`
                        );
                      }}
                    >
                      Ban user
                    </li>
                    <li
                      className="p-2 hover:bg-gray-600"
                      onClick={() =>
                        console.log(
                          `message $${isUser ? item.username : item.name}`
                        )
                      }
                    >
                      Message user
                    </li>
                  </ul>
                </button>
              </div>
            ))
          )}
        </div>
      </InfiniteScroll>
      {isBanningUser ? (
        <ModalOverlay IsOpen={isBanningUser} setIsOpen={setIsBanningUser}>
          <BanModal
            setIsBanningUser={setIsBanningUser}
            banningUser={banningUser}
            isUser={isUser}
          />
        </ModalOverlay>
      ) : null}
    </div>
  );
};

export default AccountsList;
