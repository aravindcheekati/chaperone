import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Search from "./Search"

const Header = () => {
  return (
    <>
      <header className="header">
        <TopNavbar />
        <Navbar />
      </header>
      <Search />
    </>
  );
};

export default Header;
