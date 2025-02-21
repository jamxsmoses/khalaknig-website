import "./button.css";
import "animate.css";
import { Link } from "react-router-dom";

export default function Button(prop) {
  return (
    <>
      <button
        style={{ backgroundColor: `${prop.color}`, color: `${prop.textColor}` }}
        className="button xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[110px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[12px] rounded-[5px] text-[#1e0008] leading-none px-[12px] py-[10px] font-medium"
      >
        <Link to={prop.to}>{prop.title}</Link>
      </button>
    </>
  );
}
