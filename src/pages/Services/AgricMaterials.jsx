import charcoal from "./images/charcoal.jpg";
import "animate.css";

function AgricMaterials() {
  return (
    <div className="w-full pb-[100px]">
      <div className="animate__animated animate__fadeInUp">
        <div className="bg-[#000c18] leading-[1.2] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] box-border text-center text-white font-bold w-full flex justify-center items-center py-[50px] mt-[20px]">
          Exporting Premium Agricultural Materials
          <br></br>
          {`(Charcoal)`}
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp py-[50px] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-x-[60px] box-border">
        <div className="flex xl:h-[370px] lg:h-[350px] md:h-[320px] sm:h-[290px] h-[290px]  xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-full w-full xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <div
            style={{
              backgroundImage: `URL("${charcoal}")`,
              backgroundSize: "cover",
              backgroundPosition: "30% top",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://gaviglobal.com/wp-content/uploads/2020/10/20200730_163953-768x1024.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://www.successedgeexportersnetwork.com/wp-content/uploads/2021/01/4.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
        </div>
        <div className="xl:text-left lg:text-left md:text-center sm:text-center text-center xl:w-[50%] lg:w-[50%] md:w-[90%] sm:w-[95%] w-[95%] xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <p className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.4] xl:mt-[0px] lg:mt-[0px] md:mt-[20px] sm:mt-[20px] mt-[20px]">
            At <strong>Khalak Nigeria Limited</strong>, we are proud to be a
            leading exporter of high-quality agricultural materials, including
            charcoal, to international markets. Our products are sourced from
            trusted local suppliers and meet global standards, ensuring
            reliability and sustainability for your business.
          </p>
          <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mt-[40px] font-bold underline mb-[20px]">
            Why Choose Our Materials?
          </h1>
          <ul className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.3]">
            <li className="mb-[12px]">
              <b>Premium Quality:</b> Our charcoal and other materials are
              carefully selected and processed to meet the highest industry
              standards.
            </li>

            <li className="mb-[12px]">
              <b>Sustainable Sourcing:</b> We prioritize eco-friendly practices,
              ensuring our products are both high-quality and environmentally
              responsible.
            </li>
            <li>
              <b>Global Reach:</b> We export to markets worldwide, providing
              seamless logistics and timely delivery.
            </li>
          </ul>
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp text-center w-full bg-[#001125] py-[200px] flex flex-col text-white items-center justify-center">
        <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mb-[60px]  mt-[40px] font-bold underline mb-[40px]">
          Our Export Process
        </h1>
        <div className="gap-x-[40px] gap-y-[40px] xl:px-[50px] lg:px-[50px] md:px-[40px] sm:px-[50px] px-[50px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] w-full text-center flex justify-center items-start flex-wrap ">
          <Process
            step="1"
            title="Sourcing"
            description="We work with trusted local suppliers to source the best
              agricultural materials"
          />
          <Process
            step="2"
            title="Quality Control"
            description="Every product undergoes rigorous quality checks to ensure it meets
              international standards"
          />
          <Process
            step="3"
            title="Packaging"
            description="We use durable, eco-friendly packaging to protect your goods
              during transit"
          />
          <Process
            step="4"
            title="Logistics"
            description="Our team handles all aspects of shipping, customs clearance, and
              documentation"
          />
          <Process
            step="5"
            title="Delivery"
            description="Your materials arrive on time and in perfect condition, ready for
              use or resale"
          />
        </div>
      </div>
    </div>
  );
}

export default AgricMaterials;

function Process(prop) {
  return (
    <>
      <div className="w-[200px] flex flex-col justify-center items-center gap-y-[10px]">
        <div className="flex items-center justify-center rounded-[50%] w-[40px] h-[40px] border border-1px border-[#018af2]">
          {prop.step}
        </div>
        <h1 className="font-bold mb-[10px] underline text-[#018af2]">
          {prop.title}
        </h1>
        <p>{prop.description}</p>
      </div>
    </>
  );
}
