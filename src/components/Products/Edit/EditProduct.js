import { useTheme } from '@mui/material/styles';
import React from 'react';
import BasicInfo from './BasicInfo';
import Characteristics from './Characteristics';
import Description from './Description';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, tagName, theme) {
  return {
    fontWeight:
      tagName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const EditProduct = ({ product, isEditing, setIsEditing }) => {
  const theme = useTheme();

  return (
    <>
      <div>
        <h1
          className="bg-gradient-to-br from-orange-700 to-white bg-clip-text py-2 font-cairo text-2xl font-black uppercase 
                       text-transparent transition-all duration-75"
        >
          Editing product...
        </h1>
        <BasicInfo
          product={product}
          MenuProps={MenuProps}
          theme={theme}
          setIsEditing={setIsEditing}
          getStyles={getStyles}
        />
      </div>
      {/* ProductMoreInfo */}
      <div className="mx-auto mb-10 flex flex-col justify-center gap-10 font-sans md:flex-row ">
        <Characteristics
          product={product}
          MenuProps={MenuProps}
          getStyles={getStyles}
          theme={theme}
        />
        <Description product={product} />
      </div>
    </>
  );
};

export default EditProduct;
