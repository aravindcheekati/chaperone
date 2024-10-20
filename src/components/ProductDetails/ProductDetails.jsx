import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "../../layouts/Layout"
import ProductContext from "../../contextApi/ProductsContext"

const ProductDetails = () => {
    const {productDetails} = useContext(ProductContext)
    const navigate = useNavigate()

    // If ProductDetails is Null then redirect to Homepage
    if(!productDetails) {
        return navigate("/")
    }

    return (
        <Layout>
            <div className="product_details_wrapper">
                <h2>Thank you</h2>
                <p>Thank you for your interest in <span style={{fontWeight: "bold"}}>{productDetails.name}</span>!</p>
                <button 
                    className="cart-btn"
                    onClick={() => navigate("/")}
                >Continue Shopping</button>
            </div>
        </Layout>
    )
}

export default ProductDetails