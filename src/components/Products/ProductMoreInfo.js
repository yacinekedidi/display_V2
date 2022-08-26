import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MockProduct } from '../../mockdata/productImages';

const ProductMoreInfo = () => {
  return (
    <div className="mx-auto mb-10 flex flex-col justify-center gap-10 font-sans md:flex-row ">
      <div className="mb-10 flex flex-col-reverse gap-10 bg-orange-300 py-16 px-24 font-sans shadow-sm shadow-gray-400 md:flex-row">
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
            <div className="flex border-spacing-y-4 border-b-8 border-b-neutral-900 p-2">
              <span className="w-1/2 font-bold">Style:</span>
              <span>{MockProduct.style}</span>
            </div>
            <div className="flex border-b-8 border-b-orange-200  p-2">
              <span className="w-1/2 font-bold" key={uuidv4()}>
                Motif:
              </span>
              <span>{MockProduct.motif.join(', ')}</span>
            </div>
            <div className="flex border-b-8 border-b-neutral-900 p-2">
              <span className="w-1/2 font-bold">Appearance:</span>
              <span>{MockProduct.appearance}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b-8 border-b-orange-200 p-2 ">
              <span className="font-bold">Options:</span>
              <span>{MockProduct.options.join(', ')}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b-8 border-b-neutral-900 p-2">
              <span className="font-bold">Room/use:</span>
              <span>{MockProduct.room.join(', ')}</span>
            </div>
            <div className="flex border-b-8 border-b-orange-200 p-2">
              <span className="w-1/2 font-bold">Designer:</span>
              <span>by {MockProduct.designer}</span>
            </div>
            <div className="flex border-b-8 border-b-neutral-900 p-2">
              <span className="w-1/2 font-bold">Width:</span>
              <span>{MockProduct.width}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 flex flex-col-reverse gap-10 bg-orange-300 py-16 px-24 font-sans shadow-sm shadow-gray-400 md:flex-row">
        <div className="p-2">
          <div className="flex flex-col gap-y-4">
            <h1
              className="text-md p-2 font-bold uppercase tracking-wide
              after:right-0 after:my-0 after:block after:w-[6rem] after:border-b-4 after:border-black after:pt-1 sm:text-2xl"
            >
              Description
            </h1>
            <div className="p-4 text-justify text-sm leading-loose tracking-wide lg:text-lg">
              {MockProduct.desciption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductMoreInfo;
