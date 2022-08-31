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
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
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

const options = [
  'printed',
  'washable',
  'fire-retardant',
  'custom',
  'water-repellent',
  'acoustic',
  'abrasion-resistant',
  '1',
  '2',
  '3',
];

const rooms = [
  'living rooms',
  'bedrooms',
  'dining rooms',
  'offices',
  "girl's room",
  "boy's room",
  "teenager's room",
  'bathrooms',
  'kitchens',
  'outdoor use',
  '1',
  '2',
  '3',
];

const motifs = ['1', '2', '3', '4', 'panoramic', 'geometric'];

const sellerNames = ['N.O.W. Edizioni', 'NIKE', 'ADDIDAS', 'LENOVO'];

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
  const [tagName, settagName] = useState([
    ...product.motif,
    ...product.appearance,
  ]); //tags
  const [title, setTitle] = useState(product.name);
  const [titleNote, setTitleNote] = useState(product.name_note);
  const [sellerName, setSellerName] = useState(product.seller);
  const [imageUrls, setImageUrls] = useState(product.images_url);
  const [selectedImage, setSelectedImage] = useState(0);
  const [newImageUrl, setNewImageUrl] = useState('');

  const [description, setDescription] = useState(product.desciption);
  const [characteristics, setCharacteristics] = useState({
    style: product.style,
    motif: product.motif,
    appearance: product.appearance,
    options: product.options,
    room: product.room,
    designer: product.designer,
    width: product.width,
  });

  const handleChangeCharteristics = (event) => {
    event.preventDefault();
    const who = event.target.name;
    console.log(who);
    setCharacteristics((prev) => ({ ...prev, [who]: event.target.value }));
  };

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

  const handleChangeSeller = (event) => {
    event.preventDefault();
    setSellerName(event.target.value);
  };

  return (
    <>
      <>
        <h1 className="self-start py-2 font-sans text-4xl text-white">
          Editing...
        </h1>
        <div
          className={`relative mb-10 flex flex-col-reverse gap-10 bg-orange-200 py-16 px-24 font-sans shadow-sm shadow-gray-400 md:flex-row`}
        >
          <div
            className={`flex w-full ${
              imageUrls.length ? 'flex-shrink-0' : ''
            }  flex-col justify-center gap-4 md:w-1/2`}
          >
            <div>
              <img
                className=""
                src={
                  imageUrls[selectedImage]
                    ? imageUrls[selectedImage]
                    : imageUrls[0]
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
                    className="p-2 font-cairo text-black placeholder:font-cairo"
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
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
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

            <div>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      <span className="font-bold">Sold by</span>
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sellerName}
                      label="Seller name"
                      onChange={handleChangeSeller}
                    >
                      {sellerNames.map((sn) => (
                        <MenuItem value={sn} key={sn}>
                          {sn}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
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
                  setIsEditing(false);
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
      </>
      {/* ProductMoreInfo */}
      <div className="mx-auto mb-10 flex flex-col justify-center gap-10 font-sans md:flex-row ">
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
              <div className="flex border-spacing-y-4  border-b-gray-900 p-2">
                {/* <span className="w-1/2 font-bold">Style:</span> */}
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Style"
                    variant="outlined"
                    value={characteristics.style}
                    InputLabelProps={{
                      shrink: characteristics.style ? true : false,
                    }}
                    name="style"
                    onChange={handleChangeCharteristics}
                  />
                </Box>
              </div>
              <div className="flex  border-b-orange-300  p-2">
                {/* <span>{product.motif.join(', ')}</span> */}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">
                    <span className="font-bold">Motifs</span>
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={characteristics.motif}
                    onChange={handleChangeCharteristics}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    name="motif"
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {motifs.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, characteristics.motif, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="flex  border-b-gray-900 p-2">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="appearance"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: characteristics.appearance ? true : false,
                    }}
                    value={characteristics.appearance}
                    name="appearance"
                    onChange={handleChangeCharteristics}
                  />
                </Box>
              </div>
              <div className="flex flex-wrap justify-between gap-2  border-b-orange-300 p-2 ">
                {/* <span className="font-bold">Options:</span> */}
                {/* <span>{product.options.join(', ')}</span> */}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">
                    <span className="font-bold">Options</span>
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={characteristics.options}
                    onChange={handleChangeCharteristics}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    name="options"
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {options.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, characteristics.options, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="flex flex-wrap justify-between gap-2  border-b-gray-900 p-2">
                {/* <span className="font-bold">Room/use:</span>
                <span>{product.room.join(', ')}</span> */}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">
                    <span className="font-bold">Rooms</span>
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={characteristics.room}
                    onChange={handleChangeCharteristics}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    name="room"
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {rooms.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, characteristics.room, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="flex  border-b-orange-300 p-2">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Designer"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: characteristics.designer ? true : false,
                    }}
                    value={characteristics.designer}
                    name="designer"
                    onChange={handleChangeCharteristics}
                  />
                </Box>
              </div>
              <div className="flex  border-b-gray-900 p-2">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Width"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: characteristics.width ? true : false,
                    }}
                    value={characteristics.width}
                    name="width"
                    onChange={handleChangeCharteristics}
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 flex min-w-[50%] flex-col-reverse  gap-10 bg-orange-200 py-8 px-12 font-sans shadow-sm shadow-gray-400 md:flex-row lg:p-0">
          <div className="p-2">
            <div className="flex flex-col items-center gap-y-4">
              <h1
                className="text-md self-start p-2 font-bold uppercase tracking-wide
                after:right-0 after:my-0 after:block after:w-[6rem] after:border-b-4 after:border-black after:pt-1 sm:text-2xl"
              >
                Description
              </h1>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': {
                    m: 1,
                    width: '45ch',
                    padding: '1rem .5rem',
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  className="h-full w-full text-justify font-cairo text-sm leading-loose tracking-widest  text-black lg:text-lg"
                  placeholder="product description..."
                  fullWidth
                  multiline
                  value={description}
                  variant="standard"
                  onChange={(e) => {
                    e.preventDefault();
                    setDescription(e.target.value);
                  }}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
