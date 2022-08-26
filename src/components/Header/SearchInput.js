import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SearchInput = ({
  showSearchModal = false,
  showSearchDraw = () => {},
  focus = false,
}) => {
  //   console.log(showSearchModal);
  // const styles = ``;
  return (
    <div className="relative m-4 flex w-full  p-2">
      <input
        style={{ backgroundImage: `url(${faSearch})` }}
        className={`placeholder:font-mono peer my-2 mx-0 box-border rounded-xl border-2 border-solid border-gray-600 bg-transparent 
        py-1 text-white outline-none duration-500  placeholder:text-lg placeholder:opacity-50 
        focus:border-orange-200 focus:placeholder:opacity-100 sm:px-16 ${
          !showSearchModal
            ? 'placeholder:invisible sm:placeholder:visible'
            : 'px-10'
        } lg:px-56`}
        type="text"
        placeholder="Search a product or a seller..."
        autoComplete="off"
        onBlur={showSearchDraw}
        onClick={showSearchDraw}
        autoFocus={focus}
      />
      <button className=" p-2 opacity-50 transition-all peer-focus:opacity-100">
        <FontAwesomeIcon
          icon={faSearch}
          className={`text-sm text-orange-200`}
        />
      </button>
    </div>
  );
};

export default SearchInput;
