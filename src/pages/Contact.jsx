import "animate.css";
import call from "./Contact/call.png";
import address from "./Contact/address.png";
import mail from "./Contact/mail.png";
import CallToAction from "../components/CallToAction";
import MyMap from "../components/Map";

export default function Contact() {
  return (
    <div className="w-full bg-white flex justify-center items-center pt-[10%] pb-[100px]">
      <div className="pt-[100px] xl:w-[70%] lg:w-[75%] md: w-[85%] sm:w-[95%] w-[95%] m-auto text-center">
        <h1 className="animate__animated animate__fadeInUp xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] font-bold mb-[10px]">
          Contact US
        </h1>
        <h2 className="animate__animated animate__fadeInUp xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] mb-[5px]">
          {`We're here to help`}
        </h2>
        <hr />
        <br />
        <div className="mt-[50px] flex xl:justify-between lg:justify-center md:justify-center sm:justify-center justify-center xl:gap-x-[0px] lg:gap-x-[40px] md:gap-x-[30px] sm:gap-x-[30px] gap-x-[30px] xl:gap-x-[0px] lg:gap-y-[50px] md:gap-y-[50px] sm:gap-6-[60px] gap-y-[60px] items-start flex-wrap">
          <div className="relative animate__animated animate__fadeInUp xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] w-[230px] xl:h-[300px] lg:h-[270px] md:h-[250px] sm:h-[230px] h-[230px] bg-blue-100 text-left xl:p-[50px] lg:p-[50px] md:p-[35px] sm:p-[30px] p-[30px]">
            <div className="iconBox flex justify-center items-center  w-[50px] h-[50px] bg-blue-600 rounded-[50%] absolute xl:top-[-9%] lg:top-[-9%] md:top-[-11%] sm:top-[-12%] top-[-12%] left-[50%]">
              <img src={call} className="w-[70%] h-auto" />
            </div>
            <div className="flex flex-col justify-center w-full h-full contact-box overflow-scroll">
              <h1 className="mb-[10px]">Call Us</h1>
              <p className="font-bold text-blue-600 xl:text-[11px] lg:text-[11px] md:text-[9px] sm:text-[8px] text-[8px]">
                Nigerian Contact
              </p>
              <ul className="mb-[10px] leading-[1.4] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-[11px]">
                <li>(+234) 803 8672 755</li>
                <li>(+234) 805 6446 181</li>
              </ul>
              <p className="font-bold text-blue-600 xl:text-[11px] lg:text-[11px] md:text-[9px] sm:text-[8px] text-[8px]">
                UK Contact
              </p>
              <ul className="leading-[1.4] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-[11px]">
                <li>(+44) 789 9746 735</li>
              </ul>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInUp xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] w-[230px] xl:h-[300px] lg:h-[270px] md:h-[250px] sm:h-[230px] h-[230px] bg-blue-100 text-left xl:p-[50px] lg:p-[50px] md:p-[35px] sm:p-[30px] p-[30px]">
            <div className="iconBox flex justify-center items-center  w-[50px] h-[50px] bg-blue-600 rounded-[50%] absolute xl:top-[-9%] lg:top-[-9%] md:top-[-11%] sm:top-[-12%] top-[-12%] left-[50%]">
              <img src={address} className="w-[70%] h-auto" />
            </div>
            <div className="flex flex-col w-full h-full contact-box overflow-scroll">
              <h1 className="mb-[10px]">Visit Us</h1>
              <p className="font-bold text-blue-600 xl:text-[11px] lg:text-[11px] md:text-[9px] sm:text-[8px] text-[8px]">
                Nigerian Offices
              </p>
              <ul className="ml-[20px] list-disc mb-[10px] leading-[1.4] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-[11px]">
                <li>Plot 69, Owuru/Farm Road, Rumowha, ENEKA, Rivers State.</li>
                <li>27 Enji Dam Area, 40 Room, Offa, Kwara State.</li>
              </ul>
              <p className="font-bold text-blue-600 xl:text-[11px] lg:text-[11px] md:text-[9px] sm:text-[8px] text-[8px]">
                UK Office
              </p>
              <ul className="ml-[20px] list-disc leading-[1.4] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-[11px]">
                <li>
                  35 Dunford Drive Hexthorpe, Doncaster. United Kingdom. DN4
                  0GF.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInUp xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] w-[230px] xl:h-[300px] lg:h-[270px] md:h-[250px] sm:h-[230px] h-[230px] bg-blue-100 text-left xl:p-[50px] lg:p-[50px] md:p-[35px] sm:p-[30px] p-[30px]">
            <div className="iconBox flex justify-center items-center w-[50px] h-[50px] bg-blue-600 rounded-[50%] absolute xl:top-[-9%] lg:top-[-9%] md:top-[-11%] sm:top-[-12%] top-[-12%] left-[50%]">
              <img src={mail} className="w-[70%] h-auto" />
            </div>
            <div className="flex flex-col justify-center w-full h-full contact-box overflow-scroll">
              <h1 className="mb-[10px]">Email Us</h1>
              <p className="font-bold text-blue-600 xl:text-[11px] lg:text-[11px] md:text-[9px] sm:text-[8px] text-[8px]">
                Mail 1
              </p>
              <ul className="mb-[10px] leading-[1.4] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-[11px]">
                <li>info@khalaknig.com</li>
              </ul>
              <p className="mt-10px] font-bold text-blue-600 xl:text-[11px] lg:text-[11px] md:text-[9px] sm:text-[8px] text-[8px]">
                Mail 2
              </p>
              <ul className="mb-[10px] leading-[1.4] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-[11px]">
                <li>bashbello@khalaknig.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-[80px] animate__animated animate__fadeInUp xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] font-bold mb-[10px]">
            Find Us On Map
          </h1>
          <hr />
          <div className="animate__animated animate__fadeInUp flex justify-center gap-x-[20px] mt-[20px]">
            <h3 className="mb-[10px]">UK ADDRESS</h3>
          </div>
          <div className="animate__animated animate__fadeInUp">
            <MyMap />
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <CallToAction
            title="Reach Out To US"
            description="Is there something you would like to discuss with us? Send us a message and we will respond as soon as possible."
          />
        </div>
      </div>
    </div>
  );
}
