import emailjs from '@emailjs/browser';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextareaAutosize,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const FormRequest = ({ product, seller, user }) => {
  const [textarea, setTextArea] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [docChecked, setDocChecked] = useState(false);
  const [telChecked, setTelChecked] = useState(false);

  const handleChange = (e) => {
    setTextArea(e.target.value);
  };

  // we need to also send an email to the seller

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
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
    };
    axios
      .post(`https://api.emailjs.com/api/v1.0/email/send`, data)
      .then((res) => setIsSent(true));
  };

  return (
    <div className="max-h-7xl scrollbar  mx-auto h-full w-full max-w-7xl overflow-auto bg-orange-200">
      {isSent ? (
        <div
          className="flex h-full  flex-col items-center justify-center font-sans text-3xl text-orange-200 shadow-sm shadow-orange-400"
          style={{ backgroundColor: '#231f20' }}
        >
          <div>
            we sent your request to seller&nbsp;
            <span className="font-black text-orange-900">
              {product.seller_name}&nbsp;
            </span>
            concerning their product&nbsp;
            <span className="font-black text-orange-900">{product.title}</span>
          </div>
          <p className="text-md font-cairo font-extralight opacity-80">
            watch your email <span className="text-white">{user.email}</span> to
            hear from them!
          </p>
          ✅
        </div>
      ) : (
        // <Success />
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
              <img className="max-h-7xl h-[300px]" src={url} alt="" />
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
