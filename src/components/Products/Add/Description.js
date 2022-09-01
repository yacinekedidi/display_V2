import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const Description = () => {
  const [description, setDescription] = useState('');

  return (
    <div
      className="mb-10 flex min-w-[50%] flex-col-reverse  gap-10 bg-orange-200 py-8 px-12 font-sans shadow-sm 
                  shadow-gray-400 md:flex-row lg:p-0"
    >
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
                width: '38ch',
                padding: '1rem .5rem',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              // className="text-justify font-cairo text-sm leading-loose tracking-widest text-white lg:text-lg"
              fullWidth
              placeholder="product description..."
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
  );
};

export default Description;
