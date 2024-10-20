import { useState, useEffect } from "react"
import ProductContext from "./ProductsContext"
import ProductsData from "../data/products.json"

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState(null)
    const [toggleModal, setToggleModal] = useState(false)
    const [cart, setCart] = useState([])

    // Fetch Products
    useEffect(() => {
        setProducts(ProductsData)
    }, [])

    // WhiteList Products
    const whiteList = (id) => {
        const whiteListProducts = products.map((product) => {
            if(product.id !== id)
                return product
            return {...product, isFavourite: !product.isFavourite}
        })
        setProducts(whiteListProducts)
    }

    // Get Single Product
    const fetchProductDetails = (id) => {
        const [product] = products.filter((item) => item.id === id)
        setProductDetails(product)
    }

    // Modal Code
    const setModal = (id) => {
        setToggleModal(!toggleModal)
        id && fetchProductDetails(id)
    }

    // Add to Cart
    const addToCart = (id) => {
        const cartItems = products.filter((item) => item.id === id)
        setCart([...cart, ...cartItems])
        setToggleModal(!toggleModal)
    }
    
    // Remove Cart Item
    const removeCartItem = (id) => {
        const cartItems = cart.filter((item) => item.id !== id )
        setCart(cartItems)
    }

    // Search Products 
    const searchProducts = (e) => {
        const value = e.target.value.toLowerCase()
        if(value !== '') {
            const searchItems = products.filter((item) => item.name.toLowerCase().includes(value))
            setProducts(searchItems)
        } else {
            setProducts(ProductsData)
        }
    }

    return (
        <ProductContext.Provider 
            value={
                    {   products, 
                        setProducts, 
                        whiteList, 
                        fetchProductDetails, 
                        productDetails,
                        setModal,
                        toggleModal,
                        addToCart,
                        cart,
                        removeCartItem,
                        searchProducts
                    }
                }
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider