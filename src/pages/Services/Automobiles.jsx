import "animate.css";

function Automobiles() {
  return (
    <div className="w-full pb-[100px]">
      <div className="animate__animated animate__fadeInUp">
        <div className="bg-[#000c18] leading-[1.2] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] box-border text-center text-white font-bold w-full flex justify-center items-center py-[50px] mt-[20px]">
          Importing Premium UK-Used Cars
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp py-[50px] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-x-[60px] box-border">
        <div className="flex xl:h-[370px] lg:h-[350px] md:h-[320px] sm:h-[290px] h-[290px]  xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-full w-full xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <div
            style={{
              backgroundImage: `URL("https://citizenshipper.com/blog/wp-content/uploads/2020/07/Are-cars-shipped-in-Containers-Citizenshipper.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/467817767_3748328302056464_8840373424787484724_n.jpg?stp=cp6_dst-jpg_p180x540_tt6&_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=yFZrX_eby8YQ7kNvgGv2S7u&_nc_oc=Adj1-zAGGLfVKMOHIjtrjMpgwohtA7UVTxA0J-Ej95QZoTpNAAuaRfcx9NDBncHxlxo&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=AKPbrxWzcLmSUzmLfsWvj7z&oh=00_AYDFgnI8nHZwvkvg3UBNYBdWlclnbv4fijuVT_QmG34d4w&oe=67BB47CD")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
          <div
            style={{
              backgroundImage: `URL("https://www.theengineer.co.uk/media/25tpwmc5/wmg_car_transportation.png?width=1002&height=564&v=1d9d79309ffe570")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="hoverImg flex-1 h-full"
          ></div>
        </div>
        <div className="xl:text-left lg:text-left md:text-center sm:text-center text-center xl:w-[50%] lg:w-[50%] md:w-[90%] sm:w-[95%] w-[95%] xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto mx-auto">
          <p className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.4] xl:mt-[0px] lg:mt-[0px] md:mt-[20px] sm:mt-[20px] mt-[20px]">
            At <b>Khalak Nigeria Limited</b>, we specialize in importing
            high-quality, UK-used cars that combine performance, reliability,
            and affordability. Whether you’re a car dealership, a business, or
            an individual, we offer a wide range of vehicles to meet your needs.
          </p>
          <h1 className="xl:text-[18px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[15px] mt-[40px] font-bold underline mb-[20px]">
            Why Choose UK-Used Cars?
          </h1>
          <ul className="xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px] leading-[1.3]">
            <li className="mb-[12px]">
              <b>Quality Assurance:</b> UK-used cars are well-maintained and
              undergo rigorous inspections before export.
            </li>
            <li className="mb-[12px]">
              <b>Wide Selection:</b> From sedans to SUVs, we offer a diverse
              range of makes and models.
            </li>
            <li>
              <b>Cost-Effective:</b> Enjoy premium vehicles at competitive
              prices.
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
            description="We partner with trusted UK dealers to source the best-used cars"
          />
          <Process
            step="2"
            title="Inspection"
            description="Every vehicle is thoroughly inspected to ensure it meets quality and safety standards"
          />
          <Process
            step="3"
            title="Shipping and customs"
            description="We handle all logistics, including shipping and customs clearance"
          />
          <Process
            step="4"
            title="Delivery"
            description="Cars arrives safely and on time, ready for use or resale"
          />
        </div>
      </div>
    </div>
  );
}

export default Automobiles;

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
