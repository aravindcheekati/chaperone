import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const  Layout = ({children}) => {
    return (
    <>
        <Header />
        <main className="main">
            <section className="container">
                {children}
            </section>
        </main>
        <Footer />
    </>
    )
}

export default Layout