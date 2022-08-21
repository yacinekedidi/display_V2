import React, { useCallback, useEffect } from "react";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";
// useLocation
import { v4 as uuidv4 } from "uuid";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductCard from "./ProductCard";
import { manyImages } from "../../mockdata/productImages";
import ScrollToTop from "../Utils/ScrollToTop";

// useSearchParams
// sort the products by default depending on the query param
// droplist for sort (latest, most popular, recenlty viewed) => fetch data with the selected option
// recently viewed might be implemented in local storage

const ProductsList = () => {
  // const { search } = useLocation();
  // console.log(search);
  const options = [
    { value: "latest", label: "latest" },
    { value: "popular", label: "popular" },
    { value: "viewed", label: "viewed" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      padding: ".01rem",
      cursor: "pointer",
    }),
    control: (_, { selectProps: { width } }) => ({
      // none of react-select's styles are passed to <Control />
      display: "flex",
      opacity: "1",
      cursor: "pointer",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const defaultValue = { value: "latest", label: "latest" };
  const [searchParams, setSearchParams] = useSearchParams();
  // const searchTerm = searchParams.get("sort") || "";
  console.log(searchParams);
  const handleQuery = useCallback(
    (e) => {
      const sort = e.value || "latest";
      if (sort) setSearchParams({ sort });
    },
    [setSearchParams]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleQuery("");
  }, [handleQuery]);

  return (
    <>
      <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
        <Header sticky={false} />
        <div className="flex w-full justify-end">
          <Select
            styles={customStyles}
            options={options}
            defaultValue={defaultValue}
            onChange={handleQuery}
          />
        </div>
        <div
          className="my-8 flex flex-col-reverse rounded-sm  shadow-sm shadow-orange-200 drop-shadow-md lg:flex-row"
          style={{ backgroundColor: "rgb(26,21,21)" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-20 p-8 font-sans ">
            {manyImages().map(({ image }, index) => (
              <ProductCard image={image} key={uuidv4()} index={index} />
            ))}
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default ProductsList;
