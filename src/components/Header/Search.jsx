import { useContext } from "react";
import ProductContext from "../../contextApi/ProductsContext";

const Search = () => {
  const { searchProducts } = useContext(ProductContext);
  
  return (
    <div className="search-container">
      <div>
        <i className="ri-search-line" />
          <input 
            type="search" 
            placeholder="Search Plant" 
            onChange={searchProducts}
          />
        <img
          src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1729322603/search_ly2wfb.png"
          alt="search"
        />
      </div>
    </div>
  );
};

export default Search;
