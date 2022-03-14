/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as productAPI from './api/product.api';

const DetailProduct = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    productAPI.fetchProductsDetails(id).then(result => setData(result));
    console.log('ini get detail');
  }, []);
  return (
    <div>
      <img src={data?.image} alt="image" />
      <p>{data?.description}</p>
    </div>
  );
};

export default DetailProduct;
