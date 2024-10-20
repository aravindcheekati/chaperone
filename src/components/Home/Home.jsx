import { useContext, useState } from "react";
import ProductContext from "../../contextApi/ProductsContext";
import Layout from "../../layouts/Layout";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import HeroSection from "../HeroSection/HeroSection";
import Carousel from "../Carousel/Carousel";
import FilterSidebar from "../FilterSidebar/FilterSidebar";

const Home = () => {
  const { products, toggleModal } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState(12);

  // Pagination
  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 12);
  };

  return (
    <>
      <Layout>
        <HeroSection />
        <Carousel />
        <div className="wrapper">
          <FilterSidebar />
          <div className="products-wrapper">
            <div className="product-sort-wrapper">
              <span>{products.length} Products</span>
              <div>
                SORT BY
                <button className="sort-btn">
                  <i className="ri-arrow-down-s-line" />
                </button>
              </div>
            </div>
            <div className="products-list">
              {products.slice(0, visibleProducts).map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
            {visibleProducts < products.length && (
              <div className="pagination">
                <button onClick={handleViewMore}>View More</button>
              </div>
            )}
          </div>
        </div>
      </Layout>
      {toggleModal && <Modal />}
    </>
  );
};

export default Home;
