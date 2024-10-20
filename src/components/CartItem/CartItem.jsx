import { useContext } from "react";
import ProductContext from "../../contextApi/ProductsContext";

const CartItem = ({ product }) => {
  const { removeCartItem } = useContext(ProductContext);

  return (
    <div className="cart-item">
      <div className="cart-thumbnail-wrapper">
        <img src={product.thumbnail} alt="rating" />
      </div>
      <div className="cart-details-wrapper">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="cart-rating-wrapper">
          <img
            src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1729334692/rating_r97sqa.png"
            alt="rating"
            className="rating"
          />
          <p>{product.rating}</p>
        </div>
        <div className="cart-price-details">
          <span className="cart-discount-price">
            Rs. {product.discountPrice}
          </span>
          <span className="cart-price">Rs. {product.price}</span>
        </div>
        <div className="cart-btn-wrapper">
          <button onClick={() => removeCartItem(product.id)}>
            <i className="ri-delete-bin-line"></i>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
