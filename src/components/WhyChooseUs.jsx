function WhyChooseUs(prop) {
  return (
    <div className="wcuCont px-[15px] flex flex-col items-center">
      <img src={prop.image} className="w-[80px]" />
      <h2 className="font-semibold text-center text-[#018af2] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] mt-[14px]">
        {prop.title}
      </h2>
      <p className="text-white text-center xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] mt-[14px]">
        {prop.description}
      </p>
    </div>
  );
}

export default WhyChooseUs;
