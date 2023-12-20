import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavbarItem = ({ link, icon, title }) => {
  return (
    <div className="pt-3 pb-2">
      <a
        href={link}
        className="flex flex-row items-center justify-center gap-1 group"
      >
        <Icon
          icon={icon}
          width={20}
          className="text-textPrimary/60 child1 group-hover:text-textPrimary transition-all duration-200 ease-linear"
        />
        <p className="text-textPrimary/60 child2 group-hover:text-textPrimary text-[16px] transition-all duration-200 ease-linear">
          {title}
        </p>
      </a>
    </div>
  );
};
export default NavbarItem;
