import React from "react";
import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import greenbutton from "../../public/assets/green-button.svg";
import pinkbutton from "../../public/assets/pink-button.svg";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt={"feature 1 image"}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-indigo-500 lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            Simplify your Sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt={"feature 1 image"}
            className="pt-[24px] sm:hidden"
          />
          <p className="py-6 lg:text-[18px]">
            Our sales monitoring tool helps you track your sales performance in
            real-time. Get instant insights into your sales data and make
            data-driven decisions.
          </p>
          <ul className="flex flex-col gap-y-3 lg;text-[18px]">
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>
          <p className="flex items-center text-indigo-500 gap-x-2 pt-[24px] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={bluebutton} alt={"Learn more"} />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt={"feature 1 image"}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-green-500 lg:text-[18px]">
            Customer support
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            Get in touch with your Customers
          </h1>
          <Image
            src={Feature2}
            alt={"feature 1 image"}
            className="pt-[24px] sm:hidden"
          />
          <p className="py-6 lg:text-[18px]">
            Our sales monitoring tool helps you track your sales performance in
            real-time. Get instant insights into your sales data and make
            data-driven decisions.
          </p>
          <ul className="flex flex-col gap-y-3 lg;text-[18px]">
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>
          <p className="flex items-center  text-green-500 gap-x-2 pt-[24px] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={greenbutton} alt={"Learn more"} />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt={"feature 1 image"}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-pink-600 lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new Subscribers
          </h1>
          <Image
            src={Feature3}
            alt={"feature 1 image"}
            className="pt-[24px] sm:hidden"
          />
          <p className="py-6 lg:text-[18px]">
            Our sales monitoring tool helps you track your sales performance in
            real-time. Get instant insights into your sales data and make
            data-driven decisions.
          </p>
          <div className="flex w-full gap-x-6">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h1 className="text-[20px] font-medium ">100+</h1>
              <p className="">Lorem ipsum dolor sit </p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
            <h1 className="text-[20px] font-medium ">800+</h1>
            <p className="">Conse adipiscing elit </p>
            </div>
          </div>
          <p className="flex items-center text-pink-600 gap-x-2 pt-[24px] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={pinkbutton} alt={"Learn more"} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
