import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-blue-600 py-[100px]">
        <div className="xl:w-[70%] lg:w-[70%] md:w-[85%] sm:w-[90%] w-[88%] flex justify-between items-start m-auto">
          <div className="flex-1">
            <h1 className="xl:text-[12px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[10px] font-[400] text-white font-[800] mb-[10px] uppercase">
              About Us
            </h1>
            <p className="leading-[1.3] text-white xl:text-[11px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[9px]">
              At Khalak Nigeria Limited, we specialize in sourcing and
              delivering high-quality, grade-A products from the United Kingdom
              to meet the needs of businesses and individuals across countries.
              Whether you’re looking for agricultural materials, electronics,
              textiles, or specialized items, we are your one-stop solution for
              premium imports.
            </p>
            <button
              style={{ transitionDuration: "0.3s" }}
              onClick={() => navigate("/about-us")}
              className="mt-[15px] hover:bg-[#001024] hover:text-white text-[#001024] rounded-[3px] px-[8px] py-[3px] bg-white font-[500] xl:text-[11px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[9px]"
            >
              Learn More
            </button>
          </div>
          <div className="xl:flex-[0.8] lg:flex-[0.8] md:flex-[0.7] sm:flex-[0.5] flex-[0.5]"></div>
          <div className="xl:flex-[1] lg:flex-[1] md:flex-[0.8] sm:flex-[0.8] flex-[0.7]">
            <div>
              <h1 className="xl:text-[12px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[10px] font-[400] text-white font-[800] mb-[10px] uppercase">
                Quick Links
              </h1>
              <div>
                <ul className="leading-[2] text-white uppercase xl:text-[11px] lg:text-[11px] md:text-[10px] sm:text-[9px] font-[400] text-[9px]">
                  <li className="border-b hover:!text-[#001024]">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="border-b hover:!text-[#001024]">
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li className="border-b hover:!text-[#001024]">
                    <Link to={"/what-we-do"}>What We Do</Link>
                  </li>
                  <li className="border-b hover:!text-[#001024]">
                    <Link to={"/portfolio"}>Portfolio</Link>
                  </li>
                  <li className="hover:!text-[#001024]">
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[10px] bg-[#001024] flex items-center justify-center">
        <p className="text-white xl:text-[14px] lg:xl:text-[13px] md:xl:text-[12px] sm:xl:text-[11px] text-[10px]">
          Khalak Nigeria Limited | © 2025
        </p>
      </div>
    </>
  );
}

export default Footer;
