import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Career" },
];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" />
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p  className="text-[#36485C] font-medium" key={index}>
                {item.name}
                </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <div className="hidden lg:block font-medium text-[#36485c] pr-[56px]">Open an Account</div>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="profile" />
          <span className="hidden font-medium text-[#36485c] lg:block">
            Sign In
          </span>
        </div>
        <Image src={Menu} alt="menu button" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
