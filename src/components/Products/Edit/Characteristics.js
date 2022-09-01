import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

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

const Characteristics = ({ product, MenuProps, getStyles, theme }) => {
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
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
  );
};

export default Characteristics;
