import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Header(prop) {
  // Function to toggle navbar with hamburger button
  const navigate = useNavigate();
  const toggleNavbar = () => {
    prop.setIsOpen(!prop.isOpen);
  };

  // Function to close navbar when navlink is clicked
  const closeNavbar = () => {
    prop.setIsOpen(false);
  };

  const location = useLocation();

  return (
    <div
      className={`header ${
        location.pathname === "/" ? "" : "bg-[#001125]"
      } box-border w-full h-[10vh] absolute top-[0px] left-[0px] flex justify-center items-center`}
    >
      <div className="box-border xl:w-[80%] lg:w-[80%] md:xl:w-[80%] sm:xl:w-[90%] w-[90%] m-auto flex justify-between items-center">
        <div className="logoCont xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] w-[100px] h-full flex items-center">
          <img
            onClick={() => navigate("/")}
            src={logo}
            className="w-full h-auto cursor-pointer"
          />
        </div>

        {/* Big Screen Nav */}
        <div className="navbar xl:block lg:block md:block sm:hidden hidden">
          <ul className="flex xl:gap-x-[40px] lg:gap-x-[35px] md:gap-x-[30px] sm:gap-x-[20px] gap-x-[20px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] text-white">
            <li className={location.pathname === "/" ? "activeNav" : ""}>
              <Link to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li
              className={location.pathname === "/about-us" ? "activeNav" : ""}
            >
              <Link to="/about-us" onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li
              className={location.pathname === "/what-we-do" ? "activeNav" : ""}
            >
              <Link to="/what-we-do" onClick={closeNavbar}>
                What We Do
              </Link>
            </li>
            <li
              className={location.pathname === "/portfolio" ? "activeNav" : ""}
            >
              <Link to="/portfolio" onClick={closeNavbar}>
                Portfolio
              </Link>
            </li>
            <li className={location.pathname === "/contact" ? "activeNav" : ""}>
              <Link to="contact" onClick={closeNavbar}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Nav */}

        {/* Hamburger */}
        <div className="menu-cont2 xl:hidden lg:hidden md:hidden sm:block block box-border flex items-center justify-end">
          <div
            className="menu-icon xl:w-[35px] xl:h-[30px] lg:w-[35px] lg:h-[30px] md:w-[32px] md:h-[27px] sm:w-[28px] sm:h-[23px] w-[25px] h-[20px]"
            onClick={toggleNavbar}
          >
            <span
              className="ln1"
              style={{
                position: `${!prop.isOpen ? "static" : "absolute"}`,
                top: "50%",
                left: "0%",
                transform: `${!prop.isOpen ? "" : "rotate(45deg)"}`,
              }}
            ></span>
            <span
              className="ln2"
              style={{
                display: `${!prop.isOpen ? "block" : "none"}`,
              }}
            ></span>
            <span
              className="ln3"
              style={{
                position: `${!prop.isOpen ? "static" : "absolute"}`,
                top: "50%",
                left: "0%",
                transform: `${!prop.isOpen ? "" : "rotate(-45deg)"}`,
              }}
            ></span>
          </div>
        </div>

        {/* Mobile Navlinks */}
        <div
          className={`mobileNav xl:hidden lg:hidden md:hidden sm:fixed fixed w-[100%] h-[100vh] fixed bg-[#001125] top-0 ${
            prop.isOpen ? "open" : "close"
          }`}
        >
          <div className="w-full h-full flex justify-center items-start pt-[20vh]">
            <ul className="flex flex-col text-center gap-y-[50px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[12px] text-[11px] text-white">
              <li className={location.pathname === "/" ? "activeNav" : ""}>
                <Link to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li
                className={location.pathname === "/about-us" ? "activeNav" : ""}
              >
                <Link to="about-us" onClick={closeNavbar}>
                  About Us
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/what-we-do" ? "activeNav" : ""
                }
              >
                <Link to="what-we-do" onClick={closeNavbar}>
                  What We Do
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/portfolio" ? "activeNav" : ""
                }
              >
                <Link to="portfolio" onClick={closeNavbar}>
                  Portfolio
                </Link>
              </li>
              <li
                className={location.pathname === "/contact" ? "activeNav" : ""}
              >
                <Link to="contact" onClick={closeNavbar}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
