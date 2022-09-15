import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { useState } from 'react';

const Characteristics = ({
  changedProduct,
  setChangedProduct,
  MenuProps,
  getStyles,
  theme,
}) => {
  const [characteristicProp, setCharacteristicProp] = useState('');
  const [characteristicVal, setCharacteristicVal] = useState('');

  const handleAddCharacteristic = (e) => {
    setChangedProduct((prev) => ({
      ...prev,
      characteristics: {
        ...prev.characteristics,
        ...{ [characteristicProp]: characteristicVal },
      },
    }));
    setCharacteristicProp('');
    setCharacteristicVal('');
  };

  const handleDeleteCharacteristic = (property) => {
    setChangedProduct((prev) => {
      delete prev.characteristics[property];
      return { ...prev };
    });
  };

  return (
    <div className="mb-10 flex min-w-[50%]  flex-col-reverse gap-10 bg-orange-200 py-8 px-12 font-sans shadow-sm shadow-gray-400 md:flex-row lg:p-0">
      <div className="p-2">
        <div className="flex">
          <h1
            className="tracking-widefont-bold text-md mb-4 p-2 font-bold uppercase tracking-wide  after:right-0 
      after:my-0 after:block after:w-[6rem] after:border-b-4 after:border-black after:pt-1 sm:text-2xl"
          >
            Characteristics
          </h1>
        </div>
        <div className="grid grid-cols-1 content-between gap-6 p-4 ">
          {changedProduct?.characteristics &&
            Object.keys(changedProduct.characteristics).map((property) => {
              return (
                <div
                  className="flex flex-wrap justify-between gap-2 border-b-8 border-b-orange-200 p-2 "
                  key={property}
                >
                  <span className="font-bold">{property}</span>
                  <input
                    className="px-2 font-cairo text-black placeholder:font-cairo"
                    style={{
                      background: 'rgba( 255, 255, 255, 0.25 )',
                      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                      backdropFilter: 'blur( 4px )',
                      borderRadius: '10px',
                      border: '1px solid rgba( 255, 255, 255, 0.18 )',
                    }}
                    defaultValue={changedProduct.characteristics[property]}
                    onChange={(e) => {
                      setChangedProduct((prev) => ({
                        ...prev,
                        characteristics: {
                          ...prev.characteristics,
                          ...{ [property]: e.target.value },
                        },
                      }));
                    }}
                  />
                  <DeleteOutlineIcon
                    className="cursor-pointer hover:text-orange-600"
                    onClick={() => handleDeleteCharacteristic(property)}
                  />
                </div>
              );
            })}
          <div className="flex gap-2 px-4">
            <input
              className="px-2 font-cairo font-bold text-black placeholder:font-cairo"
              placeholder="Characteristic property..."
              style={{
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 4px )',
                borderRadius: '10px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
              }}
              value={characteristicProp}
              onChange={(e) => {
                setCharacteristicProp(e.target.value);
              }}
            />
            :
            <input
              placeholder="Characteristic value..."
              className="px-2 font-cairo text-black placeholder:font-cairo"
              style={{
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 4px )',
                borderRadius: '10px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
              }}
              value={characteristicVal}
              onChange={(e) => {
                setCharacteristicVal(e.target.value);
              }}
            />
            {characteristicVal.length && characteristicProp.length ? (
              <AddCircleOutlineIcon
                className="cursor-pointer hover:text-orange-600"
                onClick={handleAddCharacteristic}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
