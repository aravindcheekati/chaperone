import { useContext, useState } from "react"
import ProductContext from "../../contextApi/ProductsContext"
import Cart from "../Cart/Cart"

const Navbar = () => {
    const [toggleCart, setToggleCart] = useState(false)
    const {cart} = useContext(ProductContext)

    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                {/* LOGO CONTAINER */}
                <div className="logo">
                    <img src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1729321253/chaperone_sa59aq.png" alt="chaperone-logo" />
                    <h1 className="website-name">Chaperone</h1>
                </div>
                
                {/* NAV LINKS */}
                <div></div>

                {/* PROFILE */}
                <div className="profile-items-wrapper">
                    <div className="profile-item">
                        <button>
                            <i className="ri-user-line"></i>
                        </button>
                        <span>My Profile</span>
                    </div>
                    <div className="profile-item">
                        <button onClick={() => setToggleCart(true)}>
                            <i className="ri-shopping-cart-line"></i>
                            <div>{cart.length}</div>
                        </button>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
            {toggleCart && <Cart setToggleCart={setToggleCart} />}
        </nav>
    )
}

export default Navbar