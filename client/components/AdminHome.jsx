import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products';
// import Product from "./product";
import Fade from 'react-reveal/Fade';
import { fetchUsers } from '../store/users';
import AdminUsers from './AdminUsers';
import AdminProducts from './AdminProducts';

const AdminHome = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const products = useSelector(state => state.products);

  const handleProductsClick = () => {
    dispatch(fetchProducts());
  };

  const handleUsersClick = () => {
    dispatch(fetchUsers(users));
  };

  let first25 = users.slice(0, 25);
  let products25 = products.slice(0, 25);
  console.log('products', products);

  return (
    <div>
      <div className="justify-content-center m-2">
        <div className="d-inline-block"></div>
        <Fade>
          <div className="align-content-around flex-wrap row m-2">
            <h1>HELLO ADMIN</h1>
            <div className="row">
              <button type="button" onClick={handleUsersClick}>
                Users
              </button>
              <button type="button" onClick={handleProductsClick}>
                Products
              </button>
            </div>

            {/* {first25.map(user => {
              return <AdminUsers key={user.id} user={user} />;
            })} */}
          </div>
        </Fade>
        <div>
          {products25.map(product => (
            <AdminProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

// {first25.map(product => {
//   return <ProductAdmin key={product.id} product={product} />;
// })}
