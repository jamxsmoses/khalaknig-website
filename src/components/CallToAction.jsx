import { useState } from "react";

export default function CallToAction(prop) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cee62661-8642-44f7-8ef6-7e6be12782fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => {
        setResult("");
      }, 1500);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Unable to Submit Form");
    }
  };

  return (
    <div className="w-full mt-[50px]">
      <div>
        <h1 className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[16px] font-bold mb-[10px]">
          {prop.title}
        </h1>
        <h2 className="m-auto xl:w-[55%] lg:w-[65%] md:w-[75%] sm:w-[85%] w-[85%] animate__animated animate__fadeInUp xl:text-[13px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[11px] mb-[5px]">
          {`${prop.description}`}
        </h2>
        <hr />
        <br />
        <form
          onSubmit={onSubmit}
          className="mb-[20px] bg-blue-400 xl:p-[40px] lg:p-[40px] md:p-[30px] sm:p-[30px] p-[30px] contactForm flex flex-col rounded-[10px] xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[95%] w-[95%] m-auto text-left"
        >
          <label className="mb-[2px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]">
            Name
          </label>
          <input
            name="name"
            required
            className="rounded-[4px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] text-[10px] mb-[10px] border outline-none border-none p-[12px] bg-white"
            type="text"
            placeholder="Enter your name"
          />
          <label className="mb-[2px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]">
            Email
          </label>
          <input
            name="email"
            required
            className="rounded-[4px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] text-[10px] mb-[10px] border outline-none border-none p-[12px] bg-white"
            type="email"
            placeholder="Enter your mail"
          />
          <label className="mb-[2px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]">
            Phone No.
          </label>
          <input
            name="phone"
            required
            className="rounded-[4px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] text-[10px] mb-[10px] border outline-none border-none p-[12px] bg-white"
            type="text"
            placeholder="Enter your phone number"
          />
          <label className="mb-[2px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]">
            Message
          </label>
          <textarea
            name="message"
            required
            placeholder="Enter your message"
            className="h-[120px] rounded-[4px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] text-[10px] mb-[10px] border outline-none border-none p-[12px] bg-white"
          />
          <button
            type="submit"
            className="rounded-[4px] py-[5px] text-white bg-blue-600 xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]"
          >
            Send Message
          </button>
        </form>
        <span
          className={`${
            result === "Form Submitted Successfully"
              ? "text-green-600"
              : "text-red-600"
          } mt-[100px]`}
        >
          {result}
        </span>
      </div>
    </div>
  );
}
