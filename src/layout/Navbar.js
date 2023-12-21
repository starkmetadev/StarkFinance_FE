import { Icon } from "@iconify/react";

import NavbarItem from "../components/Navbar/NavbarItem";
import navbarConstants from "../utils/navbarConstants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" bg-primary w-full py-3 px-8 min-h-[80px] flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2 justify-center">
          <img src="./favicon.ico" alt="logo" className="w-[30px]" />
          <h1 className="text-textPrimary text-[26px] font-semibold">
            STARKFI
          </h1>
        </div>
        <div className="flex flex-row items-center gap-7 justify-center h-full">
          {navbarConstants.map((item, index) => (
            <NavbarItem
              key={index}
              title={item.title}
              link={item.link}
              icon={item.icon}
            />
          ))}
          <div className="pt-3 pb-2">
            <Icon
              icon="basil:other-1-outline"
              width={22}
              height={22}
              className="text-textPrimary/60 hover:text-textPrimary transition-all duration-200 ease-linear cursor-pointer"
            />
          </div>
        </div>
        <div className="">
          <button className="rounded-md text-textPrimary/60 hover:text-textPrimary border-textPrimary/60 hover:border-textPrimary border-[1px] px-5 py-1 transition-all duration-200 ease-linear cursor-pointer">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
