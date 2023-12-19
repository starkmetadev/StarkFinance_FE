import { Icon } from "@iconify/react";

const Header = () => {
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
          <div className="pt-3 pb-2">
            <a
              href=""
              className="flex flex-row items-center justify-center gap-1 group"
            >
              <Icon
                icon="wpf:coins"
                width={20}
                className="text-textPrimary/60 child1 group-hover:text-textPrimary transition-all duration-200 ease-linear"
              />
              <p className="text-textPrimary/60 child2 group-hover:text-textPrimary text-[16px] transition-all duration-200 ease-linear">
                Staking
              </p>
            </a>
          </div>
          <div className="pt-3 pb-2">
            <a
              href=""
              className="flex flex-row items-center justify-center gap-1 group"
            >
              <Icon
                icon="bi:currency-exchange"
                width={20}
                className="text-textPrimary/60 child1 group-hover:text-textPrimary transition-all duration-200 ease-linear"
              />
              <p className="text-textPrimary/60 child2 group-hover:text-textPrimary text-[16px] transition-all duration-200 ease-linear">
                Swap
              </p>
            </a>
          </div>
          <div className="pt-3 pb-2">
            <a
              href=""
              className="flex flex-row items-center justify-center gap-1"
            >
              <Icon icon="wpf:coins" width={20} className="text-textPrimary" />
              <p className="text-textPrimary text-[16px]">Staking</p>
            </a>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Header;
