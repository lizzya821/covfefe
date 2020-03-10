import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProducts } from "../store/products";
import Product from "./product";
import Fade from "react-reveal/Fade";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const productFilter = useSelector(state => state.productFilter);
  useEffect(() => {
    dispatch(filterProducts(productFilter));
  }, []);
  let first10 = products.slice(0, 10);
  return (
    <div className="justify-content-center m-2">
      <div className="d-flex">
        <Fade>
          <div style={{ display: "inline-block" }}>
            <div className="row m-2">
              {first10.map(product => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AllProducts;
