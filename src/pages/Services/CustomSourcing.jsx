import "animate.css";

function CustomSourcing() {
  return (
    <div className="w-full pb-[100px]">
      <div className="animate__animated animate__fadeInUp">
        <div className="bg-[#000c18] leading-[1.2] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] box-border text-center text-white font-bold w-full flex justify-center items-center py-[50px] mt-[20px]">
          Custom Sourcing – Your Partner for Specialized Imports
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp py-[50px] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-x-[60px] box-border">
        <div className="text-center xl:w-[70%] lg:w-[70%] md:w-[90%] sm:w-[95%] w-[95%] mx-auto">
          <p className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.4] xl:mt-[0px] lg:mt-[0px] md:mt-[20px] sm:mt-[20px] mt-[20px]">
            At Khalak Nigeria Limited, we understand that every business has
            unique needs. That’s why we offer custom sourcing services to help
            you find specific and special items. Whether it’s a rare product, a
            specific brand, or a bulk order, we’ve got you covered.
          </p>
          <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mt-[40px] font-bold underline mb-[20px]">
            Why Choose Our Custom Sourcing Services?
          </h1>
          <ul className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.3]">
            <li className="mb-[12px]">
              <b>Tailored Solutions:</b> We work closely with you to understand
              your requirements and deliver exactly what you need.
            </li>
            <li className="mb-[12px]">
              <b>Strong Network:</b> Our strong relationships with trusted
              suppliers give us access to a wide range of products.
            </li>
            <li>
              <b>End-to-End Service:</b> From sourcing to delivery, we handle
              every step of the process.
            </li>
          </ul>
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp text-center w-full bg-[#001125] py-[200px] flex flex-col text-white items-center justify-center">
        <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mb-[60px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] mt-[40px] font-bold underline mb-[40px]">
          Our Custom Sourcing Process
        </h1>
        <div className="gap-x-[40px] gap-y-[40px] xl:px-[50px] lg:px-[50px] md:px-[40px] sm:px-[50px] px-[50px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] w-full text-center flex justify-center items-start flex-wrap ">
          <Process
            step="1"
            title="Consultation"
            description="We discuss your needs and provide a tailored sourcing plan"
          />
          <Process
            step="2"
            title="Sourcing"
            description="We leverage our UK network to find the best products for you"
          />
          <Process
            step="3"
            title="Quality Assurance"
            description="Every item is inspected to ensure it meets your specifications"
          />
          <Process
            step="4"
            title="Logistics"
            description="We handle shipping, customs, and delivery for a seamless experience"
          />
          <Process
            step="5"
            title="Delivery"
            description="Your custom-sourced items arrive safely and on time, ready for use or resale"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomSourcing;

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
