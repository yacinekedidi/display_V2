import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({
  showSearchModal = false,
  showSearchDraw = () => {},
  focus = false,
}) => {
  //   console.log(showSearchModal);
  // const styles = ``;
  return (
    <div className="w-100 relative m-4 p-2">
      <input
        style={{ backgroundImage: `url(${faSearch})` }}
        className="placeholder:font-mono peer my-2 mx-0 box-border rounded-xl border-2 border-solid border-gray-600 bg-transparent 
        py-1 px-8 text-white outline-none duration-500 placeholder:text-lg placeholder:opacity-50 focus:border-orange-200 
        focus:placeholder:opacity-100 md:px-16 lg:px-72"
        type="text"
        placeholder="Search a product or a seller..."
        autoComplete="off"
        onBlur={showSearchDraw}
        onClick={showSearchDraw}
        autoFocus={focus}
      />
      <button className="absolute top-3 right-2 p-2 opacity-50 transition-all peer-focus:opacity-100">
        <FontAwesomeIcon
          icon={faSearch}
          className={`text-sm text-orange-200`}
        />
      </button>
    </div>
  );
};

export default SearchInput;
