import React from "react";

const CategoryDraw = ({ categoriesIsOpen }) => {
  return (
    <div className="header__categories">
      {" "}
      {categoriesIsOpen ? (
        <div className="header__categoriesDraw">category1</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CategoryDraw;
