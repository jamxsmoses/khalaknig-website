import mission from "./About Us/mission.png";
import vision from "./About Us/vision.png";
import values from "./About Us/values.png";
import ServicesBtn from "../components/servicesBtn";
import Button from "../components/Button";
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

function AboutUs() {
  return (
    <div className="w-full bg-white flex items-end">
      <div className="w-full pt-[10vh]">
        <div className="animate__animated animate__fadeInUp w-full m-auto bg-white text-center pt-[50px]">
          <h1 className="xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[18px] text-[17px]">
            Who We Are
          </h1>
        </div>
        <div className="animate__animated animate__fadeInUp w-full m-auto bg-[#008bf2] text-center mt-[10px] py-[150px]">
          <p className="xl:w-[50%] lg:w-[55%] md:w-[70%] sm:w-[90%] w-[90%] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] text-white text-center leading-[1.4] m-auto">
            At Khalak Nigeria Limited, we are more than just an import and
            export company – we are your gateway to premium products and
            seamless global trade. With a commitment to quality, reliability,
            and customer satisfaction, we have built a reputation as a trusted
            partner for businesses and individuals.
          </p>

          <h1 className="xl:text-[14px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] text-[#000d1d] mt-[40px] mb-[10px] font-medium w-[100px] m-auto py-[5px] bg-white">
            Our Story
          </h1>
          <p className="xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] xl:w-[50%] lg:w-[55%] md:w-[70%] sm:w-[90%] w-[90%] text-white text-center leading-[1.4] m-auto">
            Khalak Nigeria Limited began with a simple mission: to bridge the
            gap between high-quality UK products and the growing demand for them
            in Nigeria. Over the years, we have expanded our expertise to
            include a wide range of products, from agricultural materials and
            electronics to textiles, automobiles, and farm equipment.
            <br></br>
            <br></br>What started as a small operation has grown into a thriving
            business, thanks to our dedication to excellence, our strong
            relationships with UK suppliers, and our unwavering focus on
            customer needs. Today, we are proud to serve clients across multiple
            industries, helping them access the best products the UK has to
            offer.
          </p>
        </div>
        <div className="animate__animated animate__fadeInLeft xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto pt-[150px]">
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
        <div className="animate__animated animate__fadeInRight xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto">
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
        <div className="animate__animated animate__fadeInLeft xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto pb-[150px]">
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
        <section
          id="services"
          className="animate__animated animate__fadeInUp services1 w-full box-border py-[150px] box-border bg-[#d4edff]"
        >
          <div className="w-full">
            <h1 className="xl:w-[150px] lg:w-[150px] md:w-[140px] sm:w-[130px] w-[130px] m-auto border-b border-b-[1px] pb-[5px] border-b-solid border-b-black text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-black">
              What We Do
            </h1>
            <div className="servicesContainer w-[70%] mx-auto flex justify-center gap-x-[50px] gap-y-[50px] mt-[50px]">
              <ServicesBtn
                title="Export of Agricultural Materials"
                img={charcoalImg}
              />
              <ServicesBtn
                img={yamImg}
                title="Export of Agricultural Produce"
              />
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
                    We specialize in sourcing specific and special items,
                    tailored to your exact requirements.
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
        <div className="animate__animated animate__fadeInUp xl:w-[60%] py-[150px] lg:w-[65%] md:w-[70%] sm:w-[85%] w-[85%] m-auto pb-[50px]">
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
