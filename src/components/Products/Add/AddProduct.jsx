import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import BasicInfo from './BasicInfo';
import Characteristics from './Characteristics';
import Description from './Description';

const AddProduct = ({ addingProduct, setIsAddingProduct }) => {
  // const [user] = useContext(UserContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    pics_url: [],
    category: '',
    descriptions: '',
    tags: [],
    characteristics: {},
    seller_name: 'humble',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddingProduct(false);

    // need to be a seller
    // axios.post('https://pure-plains-38823.herokuapp.com/products', {...product, seller_id: user.me.id});
    axios
      .post('https://pure-plains-38823.herokuapp.com/products', {
        ...product,
      })
      .then(() => navigate('/'));
  };

  return (
    <form className="w-full max-w-7xl" onSubmit={handleSubmit}>
      <div>
        <h1
          className="bg-gradient-to-br from-orange-700 to-white bg-clip-text py-2 font-cairo text-2xl font-black uppercase 
                       text-transparent transition-all duration-75"
        >
          creating new Product...
        </h1>
        <BasicInfo
          product={product}
          setProduct={setProduct}
          setIsAddingProduct={setIsAddingProduct}
        />
      </div>
      {/* ProductMoreInfo */}
      <div className="mx-auto mb-10 flex flex-col justify-center gap-10 font-sans md:flex-row ">
        <Characteristics product={product} setProduct={setProduct} />
        <Description product={product} setProduct={setProduct} />
      </div>
    </form>
  );
};

export default AddProduct;
