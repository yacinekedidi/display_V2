import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SearchInput = ({
  showSearchModal = false,
  showSearchDraw = () => {},
  focus = false,
}) => {
  const [dropdownIsOpen, setDropDownIsOpen] = useState(false);
  const [categoryOption, setCategoryOption] = useState('All categories');

  const handleDropdown = () => {
    setDropDownIsOpen((prev) => !prev);
  };

  const handleOptionChange = (e) => {
    setCategoryOption(e.target.textContent);
    setDropDownIsOpen(false);
  };

  return !showSearchModal ? (
    <div className="flex items-center">
      <button
        onClick={showSearchDraw}
        className="rounded-full stroke-orange-400 p-2.5"
      >
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  ) : (
    <form className="w-full ">
      <div className="relative flex flex-col-reverse sm:flex-row">
        <label
          htmlFor="search-dropdown"
          className="sr-only mb-2 text-sm font-medium  "
        >
          All categories
        </label>
        <button
          onClick={handleDropdown}
          className="z-10 inline-flex w-1/2 flex-shrink-0 items-center rounded-r-full border border-gray-300 
          bg-transparent py-2.5 px-4 text-center text-sm font-medium text-black
           hover:bg-orange-200 sm:w-fit sm:rounded-r-none sm:rounded-l-full
          "
          type="button"
        >
          {categoryOption}{' '}
          <svg
            aria-hidden="true"
            className="ml-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`absolute inset-x-auto top-20 z-10 m-0 rounded outline-none sm:top-11 ${
            dropdownIsOpen ? 'block' : 'hidden'
          }  w-44 divide-y divide-gray-100 rounded-full  text-white shadow`}
          style={
            {
              // position: 'absolute',
              // inset: 'auto auto 0px 0px',
              // margin: '0px',
              // transform: 'translate3d(897px, 5637px, 0px)',
            }
          }
        >
          <ul
            className="py-1 text-sm text-black "
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                onClick={handleOptionChange}
                className="inline-flex w-full py-2 px-4 hover:bg-orange-200"
              >
                All categories
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleOptionChange}
                className="inline-flex w-full py-2 px-4 hover:bg-orange-200"
              >
                Electronics
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleOptionChange}
                className="inline-flex w-full py-2 px-4 hover:bg-orange-200"
              >
                Sports
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleOptionChange}
                className="inline-flex w-full py-2 px-4 hover:bg-orange-200"
              >
                Arts
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleOptionChange}
                className="inline-flex w-full py-2 px-4 hover:bg-orange-200"
              >
                Design
              </button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50
             bg-transparent p-2.5 text-sm text-black
            outline-none "
            placeholder="Search Products, Brands..."
            required
            autoFocus
            autoComplete="off"
          />
          <button
            type="submit"
            className="focus:ring-orange-30 absolute top-0 right-0 rounded-r-lg  bg-gray-200 p-2.5 text-sm font-medium
             text-black hover:bg-orange-200 "
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
