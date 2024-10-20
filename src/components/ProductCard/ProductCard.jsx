import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../contextApi/ProductsContext";

const ProductCard = ({ product }) => {
  const {whiteList, fetchProductDetails, setModal} = useContext(ProductContext)
  const navigate = useNavigate()

  const viewProduct = () => {
    fetchProductDetails(product.id)
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-img-wrapper">
          <div className="card-favourite">
            <button onClick={() => whiteList(product.id)}>
              {product.isFavourite
                ? <i className="ri-heart-fill" style={{ color: "#f00e5d" }} />
                : <i className="ri-heart-line" />}
            </button>
          </div>
          <img src={product.thumbnail} alt={product.name} />
          <button onClick={viewProduct}>View Product</button>
        </div>
      </div>
      <div className="card-footer">
        <h2 className="product-title">
          {product.name}
        </h2>
        <p className="product-description">
          {product.description}
        </p>
        <div className="product-rating">
          <img
            src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1729334692/rating_r97sqa.png"
            alt="rating"
          />
          <span>
            {product.rating}
          </span>
        </div>
        <div className="product-price">
          <span className="price">
            ₹ {product.price}
          </span>
          <span className="discount-price">
            ₹ {product.discountPrice}
          </span>
        </div>
        <div className="btn-wrapper">
          <button className="cart-btn" onClick={() => setModal(product.id)}>
            <i className="ri-add-line" />
            Add to cart
            <i className="ri-subtract-line" />
          </button>
          <button className="rent-btn">Buy on rent</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
