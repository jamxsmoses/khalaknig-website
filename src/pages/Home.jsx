import Button from "../components/Button";
import "animate.css";
import WhyChooseUs from "../components/whyChooseUs";
import quality from "../assets/quality.png";
import imports from "../assets/imports.png";
import custom from "../assets/custom.png";
import trust from "../assets/trust.png";
import sales from "../assets/sale.png";
import ServicesBtn from "../components/servicesBtn";
import charcoalImg from "../assets/Services Images/charcoal.jpg";
import yamImg from "../assets/Services Images/yam.png";
import introImg from "../assets/introImg.jpg";
import machinery from "../assets/Services Images/machinery.png";
import automobile from "../assets/Services Images/automobile.png";
import utensils from "../assets/Services Images/utensils.png";
import textiles from "../assets/Services Images/textile.png";
import electronics from "../assets/Services Images/electronics.png";
import gadgets from "../assets/Services Images/gadgets.png";
import CallToAction from "../components/CallToAction";
import mission from "./About Us/mission.png";
import values from "./About Us/values.png";

export default function Home() {
  const scrollToSection = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="home box-border w-full">
        <div className="box-border flex flex-col items-center justify-center hero w-[100%] h-[100vh]">
          <div className="box-border flex flex-col items-center justify-center hero2 w-[100%] h-[100%]">
            <div className="flex flex-col items-center gap-[18px] justify-center w-[100%] animate__animated animate__fadeInUp">
              <h1 className="xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[70%] w-[75%] text-white font-bold xl:text-[60px] lg:text-[55px] md:text-[50px] sm:text-[40px] text-[30px] text-center">
                Premium Imports/Exports, Delivered to You
              </h1>
              <p className="text-white xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] xl:w-[35%] lg:w-[40%] md:w-[60%] sm:w-[55%] w-[70%] text-center">
                We specialize in bulk exports of agricultural produce, imports
                of electronics, textiles, and more – all sourced directly from
                the UK.
              </p>

              <div className="flex mt-[20px] gap-x-[10px]">
                <Button
                  title="Our Services"
                  to={scrollToSection}
                  color="#fff"
                  textColor="black"
                />
                <Button
                  title="Contact Us"
                  to="/contact"
                  color="#f03c2e"
                  textColor="white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="w-full py-[70px] box-border">
          <div className="xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[95%] w-[95%] gap-[80px] m-auto flex items-center xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
            <div
              style={{
                backgroundImage: `URL(${introImg})`,
                backgroundPosition: "left top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="mt-[-80px] border border-blue-600 border-[10px] overflow-hidden xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[70%] w-[80%] m-auto xl:h-[600px] lg:h-[500px] md:h-[450px] sm:h-[600px] h-[500px] overflow-hidden"
            ></div>
            <div className="animate__animated animate__fadeInUp xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[90%] w-[90%] m-auto box-border">
              <h1 className="border-b border-b-[1px] pb-[5px] border-b-solid border-b-black xl:text-left lg:text-left md:text-left sm:text-center text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px]">
                Welcome to Khalak Nigeria Limited<br></br>Your Trusted Partner
                for Premium UK Imports
              </h1>
              <p className="xl:text-left lg:text-left md:text-left sm:text-center text-center xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] mt-[14px]">
                At Khalak Nigeria Limited, we specialize in sourcing and
                delivering high-quality, grade-A products from the United
                Kingdom to meet the needs of businesses and individuals across
                countries. Whether you’re looking for agricultural materials,
                electronics, textiles, or specialized items, we are your
                one-stop solution for premium imports.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full box-border py-[200px] box-border bg-[#001125]">
        <div className="xl:w-[60%] lg:w-[60%] md:w-[80%] sm:w-[95%] w-[95%] box-border lg:w-[70%] md:w-[80%] sm:w-[95%] w-[95%] m-auto">
          <h1 className="xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] m-auto border-b border-b-[1px] pb-[8px] border-b-solid border-b-white text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-white">
            Why Choose Use?
          </h1>
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[70%] w-[70%] mx-auto mt-[100px] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-[60px]">
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
              title="Trusted Partnerships"
              description="With years of experience, we’ve built strong relationships with UK suppliers, ensuring timely delivery and exceptional service."
            />
            <WhyChooseUs
              image={sales}
              title="Clearance Sales"
              description="Take advantage of exclusive clearance deals on premium UK products."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="services1 w-full box-border py-[200px] box-border bg-white"
      >
        <div className="w-full">
          <h1 className="xl:w-[150px] lg:w-[150px] md:w-[140px] sm:w-[130px] w-[130px] m-auto border-b border-b-[1px] pb-[5px] border-b-solid border-b-black text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-black">
            Our Services
          </h1>
          <div className="servicesContainer w-[70%] mx-auto flex justify-center gap-x-[50px] gap-y-[50px] mt-[50px]">
            <ServicesBtn
              title="Export of Agricultural Materials"
              img={charcoalImg}
            />
            <ServicesBtn img={yamImg} title="Export of Agricultural Produce" />
            <ServicesBtn
              img={textiles}
              title="Import of UK Textiles and Fabrics"
            />
            <ServicesBtn img={electronics} title="Import of Electronics" />
            <ServicesBtn img={gadgets} title="Import of Gadgets" />
            <ServicesBtn img={utensils} title="Import of Kitchen Utensils" />
            <ServicesBtn img={automobile} title="Import of Automobiles" />
            <ServicesBtn
              img={machinery}
              title="Import of Farm Equipment and Machinery"
            />
            <div className="rounded-[10px] overflow-hidden service xl:w-[550px] lg:w-[550px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
              <div className="flex flex-col gap-y-[15px] items-center justify-center w-full h-[240px] bg-[#001125] px-[20px]">
                <h1 className="my-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] mt-[14px]">
                  Custom Sourcing Services
                </h1>
                <p className="text-white text-center xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
                  We specialize in sourcing specific and special items, tailored
                  to your exact requirements.
                </p>
                <div className="">
                  <Button
                    title="Get in Touch"
                    color="#006dee"
                    textColor="#fff"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto py-[50px]">
        <div className="w-full flex justify-center xl:items-center lg:items-center md:items-center sm:items-start items-start gap-x-[30px]">
          <div className="overflow-hidden w-[40%]">
            <img className="abtImg hover:scale-[120%]" src={mission} />
          </div>
          <div className="w-[60%]">
            <h1 className="mb-[10px] font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px]">
              Our Mission
            </h1>
            <p className="leading-[1.3] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
              Our mission is simple: to provide our clients with premium
              products, exceptional service, and unmatched value. Whether you’re
              looking to import UK-grade goods or export locally sourced
              products, we are here to make the process seamless, efficient, and
              cost-effective.
              <br></br> <br></br>We believe that quality should never be
              compromised, and we are committed to delivering products that meet
              the highest standards of excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto pb-[50px]">
        <div className="w-full flex justify-center xl:items-center lg:items-center md:items-center sm:items-start items-start gap-x-[30px]">
          <div className="w-[60%]">
            <h1 className="mb-[10px] font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px]">
              Our Values
            </h1>
            <p className="mb-[25px] leading-[1.3] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
              At Khalak Nigeria Limited, our values are at the heart of
              everything we do:
            </p>
            <ul className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] list-disc leading-[1.3]">
              <li className="mb-[10px]">
                <b>Quality First:</b> We source only the best products, ensuring
                they meet international standards and exceed customer
                expectations.
              </li>
              <li className="mb-[10px]">
                <b>Customer-Centric Approach:</b> Your needs come first. We
                listen, adapt, and deliver tailored solutions to meet your
                unique requirements.
              </li>
              <li className="mb-[10px]">
                <b>Integrity and Transparency:</b> We believe in building trust
                through honesty, transparency, and ethical business practices.
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
          <div className="overflow-hidden w-[40%]">
            <img className="hover:scale-[120%] abtImg" src={values} />
          </div>
        </div>
      </div>

      <div className="xl:w-[60%] py-[70px] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto pb-[50px]">
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
    </>
  );
}
