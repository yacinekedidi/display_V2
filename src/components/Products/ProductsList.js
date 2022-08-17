import React, { useCallback, useEffect } from "react";
import Select from "react-select";
import { useLocation, useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// useSearchParams
// sort the products by default depending on the query param
// droplist for sort (latest, most popular, recenlty viewed) => fetch data with the selected option
// recently viewed might be implemented in local storage

const ProductsList = () => {
  const { search } = useLocation();
  // console.log(search);
  const options = [
    { value: "latest", label: "latest" },
    { value: "popular", label: "popular" },
    { value: "recent", label: "recent" },
  ];
  const defaultValue = { value: "latest", label: "latest" };
  const [searchParams, setSearchParams] = useSearchParams();
  // const searchTerm = searchParams.get("sort") || "";

  const handleQuery = useCallback(
    (e) => {
      const sort = e.value || "latest";
      if (sort) setSearchParams({ sort });
    },
    [setSearchParams]
  );

  useEffect(() => {
    handleQuery("");
  }, [handleQuery]);

  return (
    <>
      <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
        <Header />
        <Select
          options={options}
          defaultValue={defaultValue}
          onChange={handleQuery}
        />
        <div className="text-white">ProductsList</div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsList;
