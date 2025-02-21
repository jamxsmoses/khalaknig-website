import ServiceControl from "../components/ServiceControl";
import AgricMaterials from "./Services/AgricMaterials";
import AgricProduce from "./Services/AgricProduce";
import Textiles from "./Services/Textiles";
import Electronics from "./Services/Electronics";
import Gadgets from "./Services/Gadgets";
import Utensils from "./Services/Utensils";
import Automobiles from "./Services/Automobiles";
import Machinery from "./Services/Machinery";
import CustomSourcing from "./Services/CustomSourcing";
import "animate.css";
import CallToAction from "../components/CallToAction";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WhatWeDo(prop) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Trigger on route change

  function contentToShow() {
    if (prop.activeService === 1) {
      return <AgricMaterials />;
    } else if (prop.activeService === 2) {
      return <AgricProduce />;
    } else if (prop.activeService === 3) {
      return <Textiles />;
    } else if (prop.activeService === 4) {
      return <Electronics />;
    } else if (prop.activeService === 5) {
      return <Gadgets />;
    } else if (prop.activeService === 6) {
      return <Utensils />;
    } else if (prop.activeService === 7) {
      return <Automobiles />;
    } else if (prop.activeService === 8) {
      return <Machinery />;
    } else if (prop.activeService === 9) {
      return <CustomSourcing />;
    }
  }

  return (
    <div className="w-full pt-[10vh] bg-white flex items-end">
      <div className="w-full pt-[50px]">
        <div className="w-full text-center">
          <h1 className="xl:w-[130px] lg:w-[130px] md:w-[110px] sm:w-[100px] w-[100px] m-auto border-b border-b-[1px] pb-[8px] border-b-solid border-b-black text-center font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] text-black">
            What We Do
          </h1>
        </div>
        <div className="controls xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] overflow-x-scroll xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-[98%] w-[98%] m-auto xl:h-[70px] lg:h-[70px] md:h-[70px] sm:h-[70px] h-[70px] bg-gray-300 mt-[20px] box-border px-[5px] gap-x-[5px] flex items-center xl:justify-center lg:justify-center md:justify-left sm:justify-left justify-left">
          <div
            onClick={() => prop.setActiveService(1)}
            className={`${
              prop.activeService === 1 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] w-[200px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Agricultural Materials" />
          </div>
          <div
            onClick={() => prop.setActiveService(2)}
            className={`${
              prop.activeService === 2 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Agricultural Produce" />
          </div>
          <div
            onClick={() => prop.setActiveService(3)}
            className={`${
              prop.activeService === 3 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Textiles/Fabrics" />
          </div>
          <div
            onClick={() => prop.setActiveService(4)}
            className={`${
              prop.activeService === 4 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Electronics" />
          </div>
          <div
            onClick={() => prop.setActiveService(5)}
            className={`${
              prop.activeService === 5 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Gadgets" />
          </div>
          <div
            onClick={() => prop.setActiveService(6)}
            className={`${
              prop.activeService === 6 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Kitchen Utensils" />
          </div>
          <div
            onClick={() => prop.setActiveService(7)}
            className={`${
              prop.activeService === 7 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Automobiles" />
          </div>
          <div
            onClick={() => prop.setActiveService(8)}
            className={`${
              prop.activeService === 8 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Farm Equipment/Machinery" />
          </div>
          <div
            onClick={() => prop.setActiveService(9)}
            className={`${
              prop.activeService === 9 ? "activeInner" : ""
            } inner xl:w-[200px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[150px] box-border px-[10px] h-[85%] flex text-center justify-center items-center rounded-[5px]`}
          >
            <ServiceControl title="Custom Sourcing Services" />
          </div>
        </div>
        <div className="xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-[98%] w-[98%] m-auto">
          {contentToShow()}
        </div>
        <div className="relative w-full pb-[50px]">
          <div className="animate__animated animate__fadeInUp xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[80%] w-[80%] m-auto text-center ">
            <h1 className="mb-[20px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] font-bold underline">
              Why Choose us?
            </h1>
            <ul className="leading-[1.5] text-center xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[13px] text-[13px]">
              <li className="mb-[15px]">
                <b>Global Expertise:</b>
                <br></br> We have years of experience in international trade,
                ensuring smooth and efficient operations.
              </li>
              <li className="mb-[15px]">
                <b>Quality Assurance:</b>
                <br></br> Every product we import or export meets the highest
                standards of quality.
              </li>
              <li className="mb-[15px]">
                <b>Customer-Centric Approach:</b>
                <br></br> We tailor our services to meet your unique needs,
                providing personalized solutions.
              </li>
              <li>
                <b>Reliable Logistics:</b>
                <br></br> Our team handles all aspects of shipping, customs, and
                delivery, so you don’t have to.
              </li>
            </ul>
          </div>
        </div>
        <div className="xl:w-[70%] lg:w-[75%] md: w-[85%] sm:w-[95%] w-[95%] m-auto text-center pb-[100px]">
          <CallToAction
            title="Reach Out To US"
            description="Is there something you would like to discuss with us? Send us a message and we will respond as soon as possible."
          />
        </div>
      </div>
    </div>
  );
}
