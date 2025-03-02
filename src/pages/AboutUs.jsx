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
          <h1 className="mb-[10px] animate__animated animate__fadeInUp text-white xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[18px] text-[17px]">
            Who We Are
          </h1>
          <p className="animate__animated animate__fadeInUp xl:w-[50%] lg:w-[55%] md:w-[70%] sm:w-[90%] w-[90%] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] text-white text-center leading-[1.4] m-auto">
            At Khalak Nigeria Limited, we specialize in delivering high-quality,
            sustainably sourced charcoal to clients worldwide. With a commitment
            to quality, sustainability, and customer satisfaction, we are your
            trusted partner for premium charcoal exports.
            <br></br>
            <br></br>
            As a leading exporter of charcoal, we combine ethical sourcing
            practices, advanced processing techniques, and seamless logistics to
            provide a product that meets the highest standards of excellence.
            Whether you’re a wholesaler, retailer, or industrial user, our
            charcoal is designed to deliver unmatched performance and
            reliability.
            <br></br>
            <br></br>
            We are more than just a charcoal export company – we are your
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
                Our mission is to be the global leader in charcoal exports by
                providing a product that is not only high-quality but also
                environmentally responsible. <br></br>
                <br></br>We aim to empower businesses and communities by
                delivering charcoal that meets the highest standards of
                excellence.
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
                At <b>Khalak Nigeria Limited</b>, we envision becoming the
                global leader in sustainable charcoal exports, recognized for
                our commitment to quality, innovation, and environmental
                responsibility. <br></br>
                <br></br>
                <b>Our goal is to:</b>
                <br></br>
                <ul>
                  <li className="mb-[10px]">
                    <b>Empower Businesses:</b> Provide premium charcoal that
                    helps our clients thrive in their markets.
                  </li>
                  <li className="mb-[10px]">
                    <b>Promote Sustainability:</b> Lead the way in eco-friendly
                    practices, from sourcing to packaging, to create a positive
                    impact on the environment.
                  </li>
                  <li className="mb-[10px]">
                    <b>Expand Global Reach:</b> Build strong partnerships with
                    clients and suppliers worldwide, making our charcoal a
                    trusted choice in every corner of the globe.
                  </li>
                  <li>
                    <b>Innovate Continuously:</b> Stay ahead of industry trends
                    by adopting advanced technologies and processes that enhance
                    product quality and customer satisfaction.
                  </li>
                </ul>
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
                  <b>Quality First:</b> Every batch of charcoal is carefully
                  processed and inspected to ensure it meets international
                  standards.
                </li>
                <li className="mb-[10px]">
                  <b>Sustainability:</b> We prioritize eco-friendly practices,
                  from sourcing to packaging, to minimize our environmental
                  impact.
                </li>
                <li className="mb-[10px]">
                  <b>Customer-Centric Approach:</b> Your needs come first. We
                  work closely with you to deliver tailored solutions.
                </li>
                <li className="mb-[10px]">
                  <b>Transparency and Trust:</b> We believe in building
                  long-term relationships through honesty, clear communication,
                  and ethical business practices.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Export Process */}
        <div className="animate__animated animate__fadeInUp text-center w-full bg-[#001125] py-[100px] flex flex-col text-white items-center justify-center">
          <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mb-[60px]  mt-[40px] font-bold underline mb-[40px]">
            Our Export Process
          </h1>
          <div className="gap-x-[40px] gap-y-[40px] xl:px-[50px] lg:px-[50px] md:px-[40px] sm:px-[20px] px-[20px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] w-full text-center flex justify-center items-start flex-wrap ">
            <ProcessLeft
              img="https://www.icirnigeria.org/wp-content/uploads/2019/02/Charcoal-factory5.jpg"
              step="1"
              title="Sourcing"
              description="We work with trusted local suppliers to source the best
              agricultural materials"
            />
            <ProcessRight
              img="https://www.icirnigeria.org/wp-content/uploads/2019/02/Charcoal-factory7.jpg"
              step="2"
              title="Quality Control"
              description="Every product undergoes rigorous quality checks to ensure it meets
              international standards"
            />
            <ProcessLeft
              img="https://dailytrust.com/wp-content/uploads/2020/03/charcoal-export.jpg"
              step="3"
              title="Packaging"
              description="We use durable, eco-friendly packaging to protect your goods
              during transit"
            />
            <ProcessRight
              img={charcoalImg}
              step="4"
              title="Logistics"
              description="Our team handles all aspects of shipping, customs clearance, and
              documentation"
            />
            <ProcessLeft
              img="https://gaviglobal.com/wp-content/uploads/2020/10/20200730_163953-768x1024.jpg"
              step="5"
              title="Delivery"
              description="Your materials arrive on time and in perfect condition, ready for
              use or resale"
            />
          </div>
        </div>

        <section className=" services1 w-full box-border py-[100px] box-border">
          <div className="w-full">
            <h1 className="mb-[5px] animate__animated animate__fadeInUp xl:w-[150px] lg:w-[150px] md:w-[140px] sm:w-[130px] w-[130px] m-auto border-b border-b-[1px] pb-[5px] border-b-solid border-b-black text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-black">
              Our Services
            </h1>
            <p className="text-center xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-[12px]">
              In addition to charcoal exports, we also offer a range of services
            </p>
            <div className="animate__animated animate__fadeInUp servicesContainer w-[70%] mx-auto flex justify-center gap-x-[50px] gap-y-[50px] mt-[50px]">
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
              Why Choose Us?
            </h1>
            <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[70%] w-[70%] mx-auto xl:mt-[100px] lg:mt-[100px] md:mt-[100px] sm:mt-[50px] mt-[50px] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-[60px]">
              <WhyChooseUs
                image={quality}
                title="Premium Quality"
                description="Our charcoal is sourced from trusted suppliers and processed to ensure durability, efficiency, and consistency."
              />
              <WhyChooseUs
                image={imports}
                title="Sustainable Practices"
                description="We are committed to eco-friendly sourcing and production methods"
              />
              <WhyChooseUs
                image={custom}
                title="Global Reach"
                description="We export to markets worldwide, providing seamless logistics and timely delivery."
              />
            </div>
            <div className="w-[70%] mx-auto mt-[50px] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-[40px]">
              <WhyChooseUs
                image={trust}
                title="Customer-Focused Service"
                description="From initial inquiry to final delivery, we prioritize your satisfaction."
              />
              <WhyChooseUs
                image={sales}
                title="Reliable Delivery"
                description="With a focus on efficiency and precision, we ensure your orders are delivered on time, every time."
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

function ProcessLeft(prop) {
  return (
    <>
      <div className="xl:w-[60%] lg:w-[75%] md:w-[85%] sm:w-full w-full flex gap-x-[30px] item-center m-auto">
        <div className="xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[60%] w-[60%] flex flex-col justify-center items-end text-right gap-y-[10px]">
          <div className="flex items-center justify-center rounded-[50%] w-[40px] h-[40px] border border-1px border-[#018af2]">
            {prop.step}
          </div>
          <h1 className="font-bold mb-[10px] underline text-[#018af2]">
            {prop.title}
          </h1>
          <p>{prop.description}</p>
        </div>
        <div
          style={{
            backgroundImage: `URL("${prop.img}")`,
            backgroundSize: "cover",
            backgroundPosition: "30% top",
            backgroundRepeat: "no-repeat",
          }}
          className="xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[40%] w-[40%] xl:h-[370px] lg:h-[350px] md:h-[320px] sm:h-[290px] h-[290px]"
        ></div>
      </div>
    </>
  );
}

function ProcessRight(prop) {
  return (
    <>
      <div className="xl:w-[60%] lg:w-[75%] md:w-[85%] sm:w-full w-full flex gap-x-[30px] item-center m-auto">
        <div
          style={{
            backgroundImage: `URL("${prop.img}")`,
            backgroundSize: "cover",
            backgroundPosition: "30% top",
            backgroundRepeat: "no-repeat",
          }}
          className="xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[40%] w-[40%] xl:h-[370px] lg:h-[350px] md:h-[320px] sm:h-[290px] h-[290px]"
        ></div>

        <div className="xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[60%] w-[60%] flex flex-col justify-center items-start gap-y-[10px] text-left">
          <div className="flex items-center justify-center rounded-[50%] w-[40px] h-[40px] border border-1px border-[#018af2]">
            {prop.step}
          </div>
          <h1 className="font-bold mb-[10px] underline text-[#018af2]">
            {prop.title}
          </h1>
          <p>{prop.description}</p>
        </div>
      </div>
    </>
  );
}
