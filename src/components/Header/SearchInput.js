import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MockProduct } from '../../mockdata/productImages';
import SearchResults from './SearchResults';

const SearchInput = ({
  showSearchModal = false,
  showSearchDraw = () => {},
  focus = false,
}) => {
  const [dropdownIsOpen, setDropDownIsOpen] = useState(false);
  const [categoryOption, setCategoryOption] = useState('All categories');

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([MockProduct]);

  const handleDropdown = () => {
    setDropDownIsOpen((prev) => !prev);
  };

  const handleOptionChange = (e) => {
    setCategoryOption(e.target.textContent);
    setDropDownIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // axios
    //   .get(`http://pure-plains-38823.herokuapp.com/products/category/${categoryOption}`)
    //   .then((data) => console.log(data));
    // axios
    //   .get(`http://pure-plains-38823.herokuapp.com/products/title/${search}`)
    //   .then((data) => console.log(data));
  }, [search, categoryOption]);

  return !showSearchModal ? (
    <div className="relative flex items-center">
      <input
        placeholder="Search..."
        className="w-8 cursor-pointer rounded-lg border-[1px] border-orange-200 bg-black bg-transparent p-0.5 shadow-sm 
        shadow-orange-200 placeholder:py-1 placeholder:px-8 placeholder:font-cairo
        hover:bg-gray-900 sm:w-full"
        onClick={showSearchDraw}
      />
      <SearchIcon
        className="text-orange-20 absolute left-[1rem] top-1/2 -translate-x-1/2  -translate-y-1/2 cursor-pointer text-orange-200"
        fontSize="small"
        onClick={showSearchDraw}
      />
    </div>
  ) : (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="relative flex flex-col-reverse sm:flex-row">
          <label
            htmlFor="search-dropdown"
            className="sr-only mb-2 text-sm font-medium  "
          >
            All categories
          </label>
          <button
            onClick={handleDropdown}
            className="z-10 inline-flex w-1/2 flex-shrink-0 items-center rounded-tl-lg border-b  border-b-orange-200 
           bg-gray-900 
          bg-transparent py-2.5 px-4 text-center font-cairo text-xl font-medium text-orange-200 hover:bg-orange-200
           hover:text-gray-900 sm:w-fit
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
            className={`z-10  m-0 flex outline-none ${
              dropdownIsOpen ? 'block' : 'hidden'
            }  w-44 divide-y divide-orange-300 text-orange-300 shadow`}
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
              className=" top-0 whitespace-nowrap bg-black py-1 text-sm text-orange-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  onClick={handleOptionChange}
                  className="inline-flex w-full  py-2 px-4 hover:bg-orange-200 hover:text-gray-900"
                >
                  All categories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOptionChange}
                  className="inline-flex w-full py-2 px-4 hover:bg-orange-200 hover:text-gray-900"
                >
                  Electronics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOptionChange}
                  className="inline-flex w-full py-2 px-4 hover:bg-orange-200 hover:text-gray-900"
                >
                  Sports
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOptionChange}
                  className="inline-flex w-full py-2 px-4 hover:bg-orange-200 hover:text-gray-900"
                >
                  Arts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOptionChange}
                  className="inline-flex w-full py-2 px-4 hover:bg-orange-200 hover:text-gray-900"
                >
                  Design
                </button>
              </li>
            </ul>
          </div>
          <div className="relative w-full ">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full rounded-tr-lg border border-r-0 border-l border-t-0 border-orange-300  bg-black bg-transparent
             py-6 px-14 text-lg text-orange-200
            outline-none "
              placeholder="Search Products, Brands..."
              required
              autoFocus
              autoComplete="off"
              onChange={handleChange}
            />
            <button
              className="focus:ring-orange-30 absolute top-0 -left-2 rounded-r-lg  p-6 text-xl font-medium
             text-orange-200 hover:opacity-80"
            >
              <svg
                aria-hidden="true"
                className="h-7 w-7"
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
      <SearchResults results={results} />
    </>
  );
};

export default SearchInput;
