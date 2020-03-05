import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/cart";
import CartItem from "./CartItem";
import CheckOut from "./CheckOutButton";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  useEffect(() => {
    user.id && dispatch(fetchCart(user.id));
  }, [user]);
  console.log(cart);
  if (cart.id) {
    return cart.products.length ? (
      <div className="justify-content-center m-2" style={{ width: "100%" }}>
        <Fade cascade>
          <div className="d-flex justify-content-between mt-2 ml-4 mr-4">
            <cite>
              <h3 className="mt-3">Shopping Cart</h3>
            </cite>
          </div>
        </Fade>
        <Fade cascade>
          <div className="d-inline-block">
            <div className="align-content-around flex-wrap row m-2">
              {cart.products.map(cartItem => {
                return <CartItem key={cartItem.id} cartItem={cartItem} />;
              })}
            </div>
          </div>
          {cart.products && <CheckOut product={cart} />}
        </Fade>
      </div>
    ) : (
      <div className="container-fluid text-center mb-mt-2">
        <Fade>
          <p className="p-3">There are no items in your cart.</p>
        </Fade>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
  // return <div>Henlo</div>;
};

export default Cart;