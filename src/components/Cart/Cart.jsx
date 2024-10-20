import { useContext } from "react";
import ProductsContext from "../../contextApi/ProductsContext";
import CartItem from "../CartItem/CartItem";

const Cart = ({ setToggleCart }) => {
  const { cart } = useContext(ProductsContext);

  return (
    <section className="cart-section">
      <div className="close-btn-wrapper">
        <button onClick={() => setToggleCart(false)}>
          <i className="ri-close-large-line" />
        </button>
      </div>
      <div className="cart-header">
        <h3>Your Cart</h3>
      </div>
      <div className="cart-items-wrapper">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <CartItem product={product} key={index} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Cart is Empty</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
