import React from "react";
import Image from "next/image";
import Check from "../../public/assets/check.svg";

const Pricing = () => {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-center font-medium text-2xl lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[48px] text-center lg:text-[18px]">No hidden fees!</p>
      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-[24px]">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px]">
              Free Trial
            </h3>
            <p className="pt-[12px]">Perfect for testing the waters</p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$ <span className="text-[#5f7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 ">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#432BEB] font-medium">
            Start Trial
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px]">
         Business
            </h3>
            <p className="pt-[12px] text-white">Perfect for small businesses</p>
            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              500$ <span className="text-white">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-white">
              <li className="flex items-center  gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
              <li className="flex items-center  gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
              <li className="flex items-center  gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor si amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#432BEB] font-medium">
            Get Started
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px]">
              Enterprise
            </h3>
            <p className="pt-[12px]">Perfect for big companies</p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              Custom
            </h2>

            <p className="pt-4 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo aperiam, maxime quos repellat blanditiis.</p>
            <p className="pt-2 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit! Vitae odio consequatur voluptas quia.</p>

          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#432BEB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
