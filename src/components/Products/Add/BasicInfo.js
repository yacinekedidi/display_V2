import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

const tags = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
  'panoramic',
  'geometric',
  'fabric look',
];

function getStyles(name, tagName, theme) {
  return {
    fontWeight:
      tagName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BasicInfo = ({ setIsAddingProduct }) => {
  const theme = useTheme();
  const [tagName, settagName] = useState([]); //tags
  const [title, setTitle] = useState('');
  const [titleNote, setTitleNote] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [newImageUrl, setNewImageUrl] = useState('');

  const handleImageSelect = (idx) => {
    setSelectedImage(idx);
  };

  const handleChangeChips = (event) => {
    const {
      target: { value },
    } = event;
    settagName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleChangeTitleNote = (event) => {
    event.preventDefault();
    setTitleNote(event.target.value);
  };

  const handleChangeNewUrl = (event) => {
    event.preventDefault();
    setNewImageUrl(event.target.value);
  };

  return (
    <div
      className={`relative mb-10 flex flex-col-reverse gap-10 bg-orange-200 py-16 px-24 font-sans shadow-sm 
      shadow-gray-400 md:flex-row`}
    >
      <div
        className={`flex  ${
          imageUrls.length ? 'flex-shrink-0' : ''
        }  flex-col justify-center gap-4 md:w-1/2`}
      >
        <div>
          <img
            className=""
            src={
              imageUrls[selectedImage] ? imageUrls[selectedImage] : imageUrls[0]
            }
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-1">
          {imageUrls.map((url, idx) => (
            <>
              <div className="relative mx-auto">
                <img
                  className={` h-16 w-24 cursor-pointer border-2 shadow-sm hover:border-gray-900 ${
                    selectedImage === idx ? 'border-4 border-gray-900' : ''
                  } hover:shadow-lg`}
                  src={url}
                  alt=""
                  key={uuidv4()}
                  onClick={() => {
                    handleImageSelect(idx);
                  }}
                />
                <span className="absolute -top-1 -right-1 my-0.5 mx-1.5 text-lg">
                  <HighlightOffIcon
                    className="cursor-pointer text-black hover:opacity-40"
                    onClick={(e) => {
                      setImageUrls((prev) =>
                        imageUrls.filter((u) => u !== url)
                      );
                    }}
                  />
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
      <div
        className={`flex  w-full ${
          imageUrls.length ? 'flex-shrink-0 md:w-1/2' : ''
        } flex-col gap-8 `}
      >
        <div className="text-3xl md:w-full">
          <div className="flex flex-col gap-2">
            <div>
              <input
                className=" p-2 font-cairo text-black placeholder:font-cairo"
                placeholder="product title..."
                style={{
                  background: 'rgba( 255, 255, 255, 0.25 )',
                  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                  backdropFilter: 'blur( 4px )',
                  borderRadius: '10px',
                  border: '1px solid rgba( 255, 255, 255, 0.18 )',
                }}
                value={title}
                onChange={handleChange}
              />
            </div>
            <input
              className="p-2 font-cairo uppercase text-black"
              style={{
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 4px )',
                borderRadius: '10px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
              }}
              value={titleNote}
              onChange={handleChangeTitleNote}
            />
          </div>
        </div>
        <div>
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">
                <span className="font-bold">Tags</span>
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={tagName}
                onChange={handleChangeChips}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {tags.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, tagName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="">
          <div className="flex items-center text-lg">
            <input
              className="m-2 w-full p-2 text-black placeholder:font-cairo"
              style={{
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 4px )',
                borderRadius: '10px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
              }}
              placeholder="add an image url"
              onChange={handleChangeNewUrl}
              // onKeyDown={(event) => {
              //   console.log(event.target.value);
              //   if (event.key === 'Enter') {
              //     setNewImageUrl(event.target.value);
              //   }
              // }}
            />
            <AddCircleOutlineIcon
              className="cursor-pointer hover:text-orange-600"
              onClick={(e) => {
                const isImage = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(
                  newImageUrl
                );
                const isAlreadyThere = imageUrls.includes(newImageUrl);
                if (newImageUrl && !isAlreadyThere && isImage) {
                  setImageUrls((prev) => [...prev, newImageUrl]);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="absolute top-0 right-0 m-2 rounded-md 
    p-0.5 font-cairo font-extrabold  hover:opacity-80"
          style={{ color: 'rgb(26,21,21)' }}
        >
          <CancelOutlinedIcon
            className="text-black hover:text-orange-600"
            fontSize="large"
            onClick={() => {
              setIsAddingProduct(false);
            }}
          />
        </button>
        <button
          className="absolute top-0 right-10 m-2 rounded-md 
    p-0.5 font-cairo font-extrabold  hover:opacity-80"
          style={{ color: 'rgb(26,21,21)' }}
        >
          <SaveOutlinedIcon
            className="text-black hover:text-orange-600"
            fontSize="large"
          />
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
