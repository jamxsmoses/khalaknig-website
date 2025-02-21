import "animate.css";

function Machinery() {
  return (
    <div className="w-full pb-[100px]">
      <div className="animate__animated animate__fadeInUp">
        <div className="bg-[#000c18] leading-[1.2] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] box-border text-center text-white font-bold w-full flex justify-center items-center py-[50px] mt-[20px]">
          Importing UK-Grade Farm Equipment and Machinery
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp py-[50px] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-x-[60px] box-border">
        <div className="flex xl:h-[370px] lg:h-[350px] md:h-[320px] sm:h-[290px] h-[290px]  xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-full w-full xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <div
            style={{
              backgroundImage: `URL("https://static.wixstatic.com/media/bfaaf3_caf76b9be1544554b34fd83b56c3fcd6~mv2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bfaaf3_caf76b9be1544554b34fd83b56c3fcd6~mv2.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://www.trucksandtractors.co.uk/images/products/medium/transport-haulage-of-fork-trucks-tractors-plant-and-machinery-throughout-uk_1445260375_2.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://powerhouseqld.com.au/wp-content/uploads/2024/03/a-tractor-being-prepared-for-shipping.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
        </div>
        <div className="xl:text-left lg:text-left md:text-center sm:text-center text-center xl:w-[50%] lg:w-[50%] md:w-[90%] sm:w-[95%] w-[95%] xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <p className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.4] xl:mt-[0px] lg:mt-[0px] md:mt-[20px] sm:mt-[20px] mt-[20px]">
            Boost your agricultural productivity with UK-grade farm equipment
            and machinery imported by Khalak Nigeria Limited. From tractors to
            harvesters, we provide durable, high-performance tools designed to
            meet the demands of modern farming.
          </p>
          <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mt-[40px] font-bold underline mb-[20px]">
            Why Choose Our Farm Equipment?
          </h1>
          <ul className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.3]">
            <li className="mb-[12px]">
              <b>Superior Quality:</b> UK machinery is known for its durability
              and advanced technology.
            </li>
            <li className="mb-[12px]">
              <b>Efficiency:</b> Our equipment is designed to maximize
              productivity and reduce labor costs.
            </li>
            <li>
              <b>Bulk Import Savings:</b> Perfect for large-scale farming
              operations and distributors.
            </li>
          </ul>
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp text-center w-full bg-[#001125] py-[200px] flex flex-col text-white items-center justify-center">
        <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mb-[60px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] mt-[40px] font-bold underline mb-[40px]">
          Our Import Process
        </h1>
        <div className="gap-x-[40px] gap-y-[40px] xl:px-[50px] lg:px-[50px] md:px-[40px] sm:px-[50px] px-[50px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] w-full text-center flex justify-center items-start flex-wrap ">
          <Process
            step="1"
            title="Sourcing"
            description="We work with leading UK manufacturers to bring you the best farm equipment"
          />
          <Process
            step="2"
            title="Quality Control"
            description="Every machine is tested to ensure it meets UK standards"
          />
          <Process
            step="3"
            title="Logistics"
            description="We handle shipping, customs, and delivery for a hassle-free experience"
          />
          <Process
            step="4"
            title="Delivery"
            description="Your equipment arrives safely and on time, ready to transform your farming operations"
          />
        </div>
      </div>
    </div>
  );
}

export default Machinery;

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
        <p className="leading-[1.3]">{prop.description}</p>
      </div>
    </>
  );
}
