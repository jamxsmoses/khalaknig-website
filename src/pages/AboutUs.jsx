import mission from "./About Us/mission.png";
import vision from "./About Us/vision.png";
import values from "./About Us/values.png";
import charcoalImg from "../assets/Services Images/charcoal.jpg";
import yamImg from "../assets/Services Images/yam.png";
import machinery from "../assets/Services Images/machinery.png";
import automobile from "../assets/Services Images/automobile.png";
import utensils from "../assets/Services Images/utensils.png";
import textiles from "../assets/Services Images/textile.png";
import electronics from "../assets/Services Images/electronics.png";
import gadgets from "../assets/Services Images/gadgets.png";
import CallToAction from "../components/CallToAction";
import "animate.css";
import WhyChooseUs from "../components/whyChooseUs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import quality from "../assets/quality.png";
import imports from "../assets/imports.png";
import custom from "../assets/custom.png";
import trust from "../assets/trust.png";
import sales from "../assets/sale.png";
import { useNavigate } from "react-router-dom";

function AboutUs(prop) {
  const navigate = useNavigate();
  const setActiveService = prop.setActiveService;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Trigger on route change

  function handleClick(num) {
    // event.preventDefault();
    setActiveService(num);
    navigate("/what-we-do");
  }

  return (
    <div className="w-full bg-white flex items-end">
      <div className="w-full pt-[10vh]">
        <div className="w-full m-auto bg-[#008bf2] text-center mt-[10px] py-[100px]">
          <h1 className="animate__animated animate__fadeInUp text-white xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[18px] text-[17px]">
            Who We Are
          </h1>
          <p className="animate__animated animate__fadeInUp xl:w-[50%] lg:w-[55%] md:w-[70%] sm:w-[90%] w-[90%] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] text-white text-center leading-[1.4] m-auto">
            At Khalak Nigeria Limited, we specialize in sourcing and delivering
            high-quality, grade-A products from the United Kingdom to meet the
            needs of businesses and individuals across countries. Whether you’re
            looking for agricultural materials, electronics, textiles, or
            specialized items, we are your one-stop solution for premium
            imports.
            <br></br>
            <br></br>
            We are more than just an import and export company – we are your
            gateway to premium products. With a commitment to quality,
            reliability, and customer satisfaction, we hope to build a
            reputation as a trusted partner for businesses and individuals.
          </p>
        </div>
        <div className="animate__animated animate__fadeInLeft xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto pt-[100px]">
          <div className="w-full flex justify-center xl:items-center lg:items-center md:items-center sm:items-start items-start gap-x-[30px]">
            <div className="overflow-hidden w-[40%]">
              <img className="abtImg hover:scale-[120%]" src={mission} />
            </div>
            <div className="w-[60%]">
              <h1 className="mb-[15px] font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px]">
                Our Mission
              </h1>

              <hr />
              <p className="mt-[15px] leading-[1.3] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
                Our mission is simple: to provide our clients with premium
                products, exceptional service, and unmatched value. Whether
                you’re looking to import UK-grade goods or export locally
                sourced products, we are here to make the process seamless,
                efficient, and cost-effective.
                <br></br> <br></br>We believe that quality should never be
                compromised, and we are committed to delivering products that
                meet the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] xl:pt-[20px] lg:pt-[20px] md:pt-[20px] sm:pt-[50px] pt-[50px] m-auto">
          <div className="w-full flex justify-center xl:items-center lg:items-center md:items-center sm:items-start items-start gap-x-[30px]">
            <div className="w-[60%] text-right">
              <h1 className="mb-[15px] font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px]">
                Our Vision
              </h1>
              <hr />
              <p className="mt-[15px] leading-[1.3] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
                As we look to the future, our goal is to continue expanding our
                reach, innovating our processes, and delivering even greater
                value to our clients. We aim to become the leading import and
                export company in Nigeria, known for our quality, reliability,
                and customer-first approach.
              </p>
            </div>
            <div className="overflow-hidden w-[40%]">
              <img className="abtImg hover:scale-[120%]" src={vision} />
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInLeft xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto xl:pt-[20px] lg:pt-[20px] md:pt-[20px] sm:pt-[50px] pt-[50px] pb-[100px]">
          <div className="w-full flex justify-center xl:items-center lg:items-center md:items-center sm:items-start items-start gap-x-[30px]">
            <div className="overflow-hidden w-[40%]">
              <img className="hover:scale-[120%] abtImg" src={values} />
            </div>
            <div className="w-[60%]">
              <h1 className="mb-[10px] font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px]">
                Our Values
              </h1>
              <p className="mb-[10px] leading-[1.3] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
                At Khalak Nigeria Limited, our values are at the heart of
                everything we do:
              </p>
              <hr />
              <ul className="mt-[10px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] leading-[1.3]">
                <li className="mb-[10px]">
                  <b>Quality First:</b> We source only the best products,
                  ensuring they meet international standards and exceed customer
                  expectations.
                </li>
                <li className="mb-[10px]">
                  <b>Customer-Centric Approach:</b> Your needs come first. We
                  listen, adapt, and deliver tailored solutions to meet your
                  unique requirements.
                </li>
                <li className="mb-[10px]">
                  <b>Integrity and Transparency:</b> We believe in building
                  trust through honesty, transparency, and ethical business
                  practices.
                </li>
                <li className="mb-[10px]">
                  <b>Innovation and Efficiency:</b> We leverage the latest
                  technology and best practices to streamline our operations and
                  deliver results faster.
                </li>
                <li>
                  <b>Sustainability:</b> We are committed to eco-friendly
                  practices, from sourcing to packaging, to minimize our
                  environmental impact.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className=" services1 w-full box-border py-[100px] box-border bg-[#d4edff]">
          <div className="w-full">
            <h1 className="animate__animated animate__fadeInUp xl:w-[150px] lg:w-[150px] md:w-[140px] sm:w-[130px] w-[130px] m-auto border-b border-b-[1px] pb-[5px] border-b-solid border-b-black text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-black">
              What We Do
            </h1>
            <div className="animate__animated animate__fadeInUp servicesContainer w-[70%] mx-auto flex justify-center gap-x-[50px] gap-y-[50px] mt-[50px]">
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={charcoalImg} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Export of Agricultural Materials
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(1)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={yamImg} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Export of Agricultural Produce
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(2)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={textiles} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Import of UK Textiles and Fabrics
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(3)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={electronics} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Import of Electronics
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(4)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={gadgets} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Import of Gadgets
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(5)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={utensils} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Import of Kitchen Utensils
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(6)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={automobile} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Import of Automobils
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(7)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
                  <img src={machinery} alt="" />
                </div>
                <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
                  <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
                    Import of Farm Equipment/Machinery
                  </h1>
                  <div className="">
                    <button
                      onClick={() => handleClick(8)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-hidden service xl:w-[550px] lg:w-[550px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
                <div className="flex flex-col gap-y-[15px] items-center justify-center w-full h-[240px] bg-[#001125] px-[20px]">
                  <h1 className="my-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] mt-[14px]">
                    Custom Sourcing Services
                  </h1>
                  <p className="text-white text-center xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
                    We specialize in sourcing specific and special items,
                    tailored to your exact requirements.
                  </p>
                  <div className="">
                    <button
                      onClick={() => handleClick(9)}
                      className="bg-blue-600 text-white button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full box-border xl:py-[100px] lg:py-[100px] md:py-[100px] sm:py-[100px] py-[100px] box-border bg-[#001125]">
          <div className="xl:w-[60%] lg:w-[60%] md:w-[80%] sm:w-[95%] w-[95%] box-border lg:w-[70%] md:w-[80%] sm:w-[95%] w-[95%] m-auto">
            <h1 className="xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] m-auto border-b border-b-[1px] pb-[8px] border-b-solid border-b-white text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-white">
              Why Choose Use?
            </h1>
            <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[70%] w-[70%] mx-auto xl:mt-[100px] lg:mt-[100px] md:mt-[100px] sm:mt-[50px] mt-[50px] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-[60px]">
              <WhyChooseUs
                image={quality}
                title="Grade-A Quality Assurance"
                description="All our products are sourced directly from the UK, ensuring the highest standards of quality and reliability."
              />
              <WhyChooseUs
                image={imports}
                title="Bulk Import/Export Expertise"
                description="We specialize in bulk imports, offering competitive pricing and seamless logistics for businesses."
              />
              <WhyChooseUs
                image={custom}
                title="Custom Sourcing"
                description="Need something specific? We source special items tailored to your unique requirements."
              />
            </div>
            <div className="w-[70%] mx-auto mt-[50px] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-[40px]">
              <WhyChooseUs
                image={trust}
                title="Transparency and Trust"
                description="We believe in building trust through honesty, clear communication, and ethical business practices."
              />
              <WhyChooseUs
                image={sales}
                title="Clearance Sales"
                description="Take advantage of exclusive clearance deals on premium UK products."
              />
            </div>
          </div>
        </section>
        <div className="xl:w-[60%] py-[100px] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto pb-[50px]">
          <h1 className="mb-[10px] text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px]">
            Join Us on Our Journey
          </h1>
          <hr />
          <br />
          <p className="text-center xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
            Whether you’re a business looking to import premium UK products or a
            local producer, we invite you to partner with us. Together, we can
            achieve great things.
          </p>
          <div className="text-center">
            <CallToAction
              title=""
              description="Contact us today to learn more about our services or to discuss your needs. We look forward to working with you!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
