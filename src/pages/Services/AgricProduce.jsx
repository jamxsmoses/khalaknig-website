import "animate.css";

function AgricProduce() {
  return (
    <div className="w-full pb-[100px]">
      <div className="animate__animated animate__fadeInUp">
        <div className="bg-[#000c18] leading-[1.2] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] box-border text-center text-white font-bold w-full flex justify-center items-center py-[50px] mt-[20px]">
          Exporting Fresh and Premium Agricultural Produce
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp py-[50px] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-x-[60px] box-border">
        <div className="flex xl:h-[370px] lg:h-[350px] md:h-[320px] sm:h-[290px] h-[290px]  xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-full w-full xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <div
            style={{
              backgroundImage: `URL("https://afrimash.com/wp-content/uploads/2015/11/dried-fish-2.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "30% top",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://labafoods.com/wp-content/uploads/2020/12/yams-1.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://s.alicdn.com/@sc04/kf/Ae9a1f989f8734dfca1eb0e1a5c45197b6.jpg_720x720q50.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
        </div>
        <div className="xl:text-left lg:text-left md:text-center sm:text-center text-center xl:w-[50%] lg:w-[50%] md:w-[90%] sm:w-[95%] w-[95%] xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <p className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.4] xl:mt-[0px] lg:mt-[0px] md:mt-[20px] sm:mt-[20px] mt-[20px]">
            From <b>Yams</b> and <b>Potatoes</b> to <b>Palm Oils</b> and{" "}
            <b>Dried Catfish</b>, <b>Khalak Nigeria Limited</b> is your trusted
            partner for exporting the finest agricultural produce to global
            markets. Our produce is carefully selected, processed, and packaged
            to ensure freshness, quality, and compliance with international
            standards.
          </p>
          <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mt-[40px] font-bold underline mb-[20px]">
            Why Export With Us?
          </h1>
          <ul className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.3]">
            <li className="mb-[12px]">
              <b>Freshness Guaranteed:</b> We use advanced storage and
              transportation methods to preserve the quality of your produce.
            </li>
            <li className="mb-[12px]">
              <b>Wide Variety:</b>From staple crops to specialty items, we offer
              a diverse range of agricultural products.
            </li>
            <li>
              <b>Custom Solutions:</b> We tailor our exports to meet your
              specific requirements, whether you need bulk orders or specialty
              items.
            </li>
          </ul>
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp text-center w-full bg-[#001125] py-[200px] flex flex-col text-white items-center justify-center">
        <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mb-[60px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] mt-[40px] font-bold underline mb-[40px]">
          Our Export Process
        </h1>
        <div className="gap-x-[40px] gap-y-[40px] xl:px-[50px] lg:px-[50px] md:px-[40px] sm:px-[50px] px-[50px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] w-full text-center flex justify-center items-start flex-wrap ">
          <Process
            step="1"
            title="Harvesting and Sourcing"
            description="We work directly with local farmers to source the freshest produce"
          />
          <Process
            step="2"
            title="Processing and Packaging"
            description="Our state-of-the-art facilities ensure proper cleaning, sorting, and packaging"
          />
          <Process
            step="3"
            title="Quality Assurance"
            description="Every shipment is inspected to meet international health and safety standards"
          />
          <Process
            step="4"
            title="Logistics"
            description="We handle shipping, customs, and documentation for hassle-free delivery"
          />
          <Process
            step="5"
            title="Delivery"
            description="Your produce arrives fresh and ready for distribution or retail"
          />
        </div>
      </div>
    </div>
  );
}

export default AgricProduce;

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
