import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MockProduct } from "../../mockdata/productImages";

const ProductMoreInfo = () => {
  return (
    <div className="mx-auto mb-10 flex flex-col justify-center gap-10 font-sans md:flex-row">
      <div className="flex w-full flex-col flex-wrap bg-orange-300 font-sans shadow-sm shadow-gray-400 md:w-1/2">
        <div className="p-2">
          <div className="flex justify-around">
            <h1 className="mb-4 p-2 text-2xl">Characteristics</h1>
          </div>
          <div className="grid grid-cols-1 content-between gap-6  p-4 ">
            <div className="flex border-spacing-y-4 border-b-8 border-b-neutral-900 p-2">
              <span className="w-1/2 font-bold">Style:</span>
              <span>{MockProduct.style}</span>
            </div>
            <div className="flex border-b-8 border-b-orange-200  p-2">
              <span className="w-1/2 font-bold" key={uuidv4()}>
                Motif:
              </span>
              <span>{MockProduct.motif.join(", ")}</span>
            </div>
            <div className="flex border-b-8 border-b-neutral-900 p-2">
              <span className="w-1/2 font-bold">Appearance:</span>
              <span>{MockProduct.appearance}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b-8 border-b-orange-200 p-2 ">
              <span className="font-bold">Options:</span>
              <span>{MockProduct.options.join(", ")}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b-8 border-b-neutral-900 p-2">
              <span className="font-bold">Room/use:</span>
              <span>{MockProduct.room.join(", ")}</span>
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
      <div className="flex w-full flex-col bg-orange-300 font-sans shadow-sm shadow-gray-400 md:w-1/2 ">
        <div className="p-2">
          <div className="flex flex-col justify-around">
            <h1 className="mb-4 p-2 text-center text-2xl">Description</h1>
            <div className="p-4 text-justify text-sm leading-loose">
              {MockProduct.desciption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductMoreInfo;
