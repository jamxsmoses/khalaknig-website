import Button from "./Button";

function ServicesBtn(prop) {
  return (
    <>
      <div className="rounded-[10px] overflow-hidden service xl:w-[250px] lg:w-[250px] md:w-[270px] sm:w-[290px] w-[290px] text-center flex flex-col items-center justify-center">
        <div className="serviceBgImg w-full h-[200px] overflow-hidden flex justify-center itmes-center">
          <img src={prop.img} alt="" />
        </div>
        <div className="flex flex-col gap-y-[5px] items-center justify-center w-full h-[140px] bg-[#001125] px-[20px]">
          <h1 className="m-[0px] text-white font-semibold text-center px-[20px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]">
            {prop.title}
          </h1>
          <p className="text-white text-center xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px]">
            {prop.description}
          </p>
          <div className="">
            <Button title="Learn More" color="#006dee" textColor="#fff" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesBtn;
