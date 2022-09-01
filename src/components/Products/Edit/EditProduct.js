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
      <>
        <h1 className="self-start py-2 font-sans text-4xl text-white">
          Editing...
        </h1>
        <BasicInfo
          product={product}
          MenuProps={MenuProps}
          theme={theme}
          setIsEditing={setIsEditing}
          getStyles={getStyles}
        />
      </>
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
