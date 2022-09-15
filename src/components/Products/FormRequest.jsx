import CloseIcon from '@mui/icons-material/Close';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextareaAutosize,
} from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useSendEmailToUser from '../../hooks/useSendEmailToUser';
import FormRequestSuccess from './FormRequestSuccess';

const FormRequest = ({ product, seller, user, handleFormModal }) => {
  const [textarea, setTextArea] = useState('');
  const [docChecked, setDocChecked] = useState(false);
  const [telChecked, setTelChecked] = useState(false);
  const [data, setData] = useState({});
  const { isSent } = useSendEmailToUser(data);

  const handleChange = (e) => {
    setTextArea(e.target.value);
  };

  // we need to also send an email to the seller

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({
      service_id: 'service_m0zdqz6',
      template_id: 'template_a57ek7r',
      user_id: 'zxYZASRbzkvbCWkC9',
      template_params: {
        to_email: 'hdanimeclips11@gmail.com',
        to_name: user.firstName,
        product_title: product.title,
        seller_name: seller.name,
        message: textarea,
        recieve_doc: docChecked
          ? '✅ receive documentation'
          : '❌ receive documentation',
        recieve_call: telChecked
          ? '✅ receive a phone call'
          : '❌ receive telephone call',
      },
    });
  };

  return (
    <div className="max-h-7xl scrollbar relative  mx-auto h-full w-full max-w-7xl overflow-auto bg-orange-200">
      <CloseIcon
        className="absolute top-0 right-0 cursor-pointer text-orange-200 hover:text-orange-600"
        fontSize="large"
        onClick={handleFormModal}
      />
      {isSent ? (
        <FormRequestSuccess product={product} user={user} />
      ) : (
        <form
          className=" flex h-full w-full flex-col items-center justify-between gap-y-4"
          onSubmit={handleSubmit}
        >
          <div
            className="flex w-full items-center justify-center rounded-sm py-4 font-sans text-3xl font-black tracking-wide
           text-orange-200  shadow-sm shadow-orange-400"
            style={{ backgroundColor: '#231f20' }}
          >
            Request Price Options
          </div>

          <div
            className="flex w-3/4 items-center justify-center gap-8 rounded-sm bg-white shadow-sm shadow-orange-400"
            style={{ backgroundColor: '#231f20' }}
          >
            <div className="flex flex-col gap-y-4 p-4">
              <div>
                <p className="py-4 font-cairo text-white">
                  Is there any additional information you would like to share
                  with the seller? (optional)
                </p>

                <TextareaAutosize
                  name="message"
                  value={textarea}
                  onChange={handleChange}
                  className="w-full rounded-md bg-orange-200 p-2 py-4 text-xl shadow-sm shadow-orange-200 
                placeholder:font-cairo placeholder:text-gray-900"
                  placeholder="Hello, I would like to know the price for..."
                  aria-label="minimum height"
                  minRows={3}
                />
                <div className="flex flex-col items-start gap-y-2">
                  <p className="pt-4 pb-1 font-cairo text-white">
                    I would also like to:
                  </p>
                  <FormGroup className="text-white">
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="text-orange-200"
                          sx={{
                            color: 'orange',
                            '&.Mui-checked': {
                              color: 'orange',
                            },
                          }}
                          // defaultChecked
                          checked={docChecked}
                          onChange={() => setDocChecked((prev) => !prev)}
                        />
                      }
                      label="recieve documentation"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: 'orange',
                            '&.Mui-checked': {
                              color: 'orange',
                            },
                          }}
                          checked={telChecked}
                          onChange={() => setTelChecked((prev) => !prev)}
                        />
                      }
                      label="be contacted by telephone"
                    />
                  </FormGroup>
                </div>
                <div className="p-4 text-center">
                  <button
                    type="submit"
                    className="rounded-md bg-gray-900 px-6  py-1 font-cairo text-lg font-extrabold 
                tracking-wide text-orange-200 shadow-md shadow-orange-200 hover:bg-orange-200 hover:text-gray-900 hover:shadow-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex h-full  w-full flex-wrap items-center justify-center gap-8 self-end  rounded-sm bg-white shadow-sm shadow-orange-400"
            style={{ backgroundColor: '#231f20' }}
          >
            {product.pics_url.map((url) => (
              <img
                className="max-h-7xl h-[300px]"
                src={url}
                alt=""
                key={uuidv4()}
              />
            ))}
            <h1
              className="font-sans text-5xl text-orange-200"
              name="seller_name"
            >
              {seller.name}
            </h1>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormRequest;
