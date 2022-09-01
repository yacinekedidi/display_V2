import { useState } from 'react';

const Characteristics = () => {
  const [characteristics, setCharacteristics] = useState({
    style: '',
    motif: [],
    appearance: '',
    options: [],
    room: [],
    designer: '',
    width: '',
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
            {/* input */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
