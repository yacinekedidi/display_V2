import {
  faCaretDown,
  faCaretUp,
  faClose,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { API_ENDPOINTS, headers } from '../../Utils/constants';
import getFormattedName from '../../Utils/formatFullname';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

const initialStateEditable = {
  fullname: false,
  Email: false,
  'Phone Number': false,
};

const initialStateFields = {
  Fullname: '',
  Email: '',
  'Phone Number': '',
  'Last seen': '',
};

const editUser = async (changes, uid) => {
  const response = await axios.patch(
    `${API_ENDPOINTS.users}/${uid}`,
    changes,
    headers
  );
  return response.data;
};

const deleteUser = async (uid) => {
  const response = await axios.delete(`${API_ENDPOINTS.auth}/eraseUser/${uid}`);
  return response.data;
};

const About = () => {
  const [isEditable, setIsEditable] = useState(initialStateEditable);
  const [isOpenDanger, setIsOpenDanger] = useState(false);
  const context = useOutletContext();
  const user = context?.user;
  const u = context?.u;
  const logout = context?.logout;
  const isLoading = context?.isLoading;
  const [about, setAbout] = useState({
    original: initialStateFields,
    edited: initialStateFields,
  });

  const handleClick = (fieldToEdit) => {
    setIsEditable((prev) => {
      if (prev[fieldToEdit]) {
        return { ...prev, [fieldToEdit]: false };
      }

      return { ...prev, [fieldToEdit]: true };
    });
  };

  const handleClickSave = () => {
    const changes = {
      fullName: about.edited.Fullname,
      email: about.edited.Email,
      phone_number: about.edited['Phone Number'],
    };
    editUser(changes, user._id).catch(console.error);
  };

  const handleClickDeleteUser = () => {
    deleteUser(user._id)
      .then(() => logout())
      .catch(console.error);
  };

  useEffect(() => {
    let abouts = {
      Fullname: getFormattedName(user?.fullName),
      Email: user?.email,
      'Phone Number': user?.phone_number,
    };
    if (Object.keys(u).length)
      abouts = {
        ...abouts,
        'Last seen': moment(u?.me.last_active).fromNow(),
      };

    setAbout({ original: abouts, edited: abouts });
  }, [user, u]);

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <div className="w-full py-4">
      <div className="mb-1 flex justify-end gap-x-6 rounded-md p-4 font-cairo text-sm uppercase text-black shadow-sm shadow-black">
        {Object.keys(about.original).find(
          (key) => about.original[key] !== about.edited[key]
        ) ? (
          <button
            className="rounded-md bg-gray-500 px-2"
            onClick={() =>
              setAbout((prev) => ({ ...prev, edited: prev.original }))
            }
          >
            reset
          </button>
        ) : null}
        {Object.values(isEditable).some((value) => value) ? (
          <button
            className="rounded-md bg-gray-500 px-2"
            onClick={() => setIsEditable(initialStateEditable)}
          >
            close
          </button>
        ) : null}
        {Object.keys(about.original).find(
          (key) => about.original[key] !== about.edited[key]
        ) ? (
          <button
            className="rounded-md bg-gray-500 px-2"
            onClick={handleClickSave}
          >
            save{' '}
          </button>
        ) : null}
      </div>
      {Object.keys(about.edited).map((info, index) => (
        <div
          className="flex w-full justify-center  p-4 text-white shadow-md shadow-black md:max-w-7xl"
          style={{ backgroundColor: '#231f20' }}
          key={index}
        >
          <span className="w-[45vw]text-orange-300 md:w-[20vw]">{info}:</span>
          <div className="flex w-[45vw] gap-x-4 md:w-[20vw]">
            {!isEditable[info] || info === 'Last seen' ? (
              <span>{about.edited[info]}</span>
            ) : (
              <input
                className="w-full rounded-md bg-orange-300 font-cairo text-black shadow-sm shadow-black  placeholder:font-cairo"
                value={about.edited[info]}
                autoFocus
                onChange={(e) =>
                  setAbout((prev) => ({
                    ...prev,
                    edited: { ...prev.edited, [info]: e.target.value },
                  }))
                }
              />
            )}
            {u?.me?.role === 'user' && info !== 'Last seen' ? (
              <button
                className="bg-transparent px-1 shadow-sm shadow-black"
                onClick={() => handleClick(info)}
              >
                {isEditable[info] ? (
                  <FontAwesomeIcon icon={faClose} size="sm" color="orange" />
                ) : (
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="sm"
                    color="orange"
                  />
                )}
              </button>
            ) : null}
          </div>
        </div>
      ))}
      {u?.me?.role === 'user' && u?.me?.id === user._id ? (
        <div className="flex w-full flex-col items-center">
          <div className="mt-4 flex w-full flex-col items-center gap-4  shadow-sm shadow-red-400 sm:w-1/2 lg:w-1/4">
            <div className="flex items-center justify-between">
              <p className="w-full px-4 py-1 text-center  font-sans text-xl uppercase text-red-400 ">
                danger zone
              </p>
              <FontAwesomeIcon
                className="cursor-pointer text-white hover:text-red-600"
                onClick={() => setIsOpenDanger((prev) => !prev)}
                icon={isOpenDanger ? faCaretUp : faCaretDown}
              />
            </div>
            {isOpenDanger ? (
              <div className="w-full">
                <p className="text-cairo w-full p-4 text-sm text-white">
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
                <div className="w-full text-center">
                  <button
                    onClick={handleClickDeleteUser}
                    className="w-full whitespace-nowrap py-2 font-sans text-sm text-white shadow-sm shadow-red-600 
                          hover:bg-transparent hover:text-red-600"
                  >
                    delete your account
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default About;
