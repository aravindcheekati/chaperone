import ProductContext from "../../contextApi/ProductsContext";
import { useContext } from "react";

const Modal = () => {
  const { productDetails, setModal, addToCart } = useContext(ProductContext);

  return (
    <div className="modal">
      <div className="model-container">
        <div className="card">
          <div className="card-header">
            <div className="card-favourite">
              <button onClick={setModal}>
                <i className="ri-close-large-line" />
              </button>
            </div>
            <div className="modal-card-img-wrapper">
              <img src={productDetails.thumbnail} alt={productDetails.name} />
            </div>
          </div>
          <div className="card-footer">
            <h2 className="product-title">{productDetails.name}</h2>
            <p className="product-description">{productDetails.description}</p>
            <div className="product-rating">
              <img
                src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1729334692/rating_r97sqa.png"
                alt="rating"
              />
              <span>{productDetails.rating}</span>
            </div>
            <div className="product-price">
              <span className="price">₹ {productDetails.price}</span>
              <span className="discount-price">
                ₹ {productDetails.discountPrice}
              </span>
            </div>
            <div>
              <button 
                className="rent-btn confirm-btn"
                onClick={() => addToCart(productDetails.id)}
                >Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
