const Header = () => {
  return (
    <>
      <div className=" bg-primary w-full py-3 px-5 flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-3">
            <img src="./favicon.ico" alt="logo" className="w-12" />
            <span className="w-[2px] h-full bg-slate-400" />
            <h1 className="text-textPrimary font-chakra text-[26px] font-semibold">
              STARKFI
            </h1>
          </div>
          <div className="flex flex-row gap-2">
            <span className=""></span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Header;
