import { Icon } from "@iconify/react";

import NavbarItem from "../components/Navbar/NavbarItem";
import navbarConstants from "../utils/navbarConstants";

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
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Navbar;
