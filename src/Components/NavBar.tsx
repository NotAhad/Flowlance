const NavBar = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  return (
    <div className="w-full p-[25px] flex items-center justify-between">
      <p className="line-clamp-1">📅 {formattedDate}</p>
      <div className="flex gap-[25px]">
        <div className="flex items-center gap-[10px]">
          <img
            className="w-[26px] h-[26px] rounded-[4px] object-cover"
            src="/public/noavatar.png"
            alt=""
          />
          <span>AHAD</span>
        </div>
        <div className="flex items-center relative">
          <img src="/public/notifications.svg" alt="" />
          <span className="bg-indigo-900 w-[16px] h-[16px] rounded-[4px] absolute -translate-y-[10px] translate-x-[20px] items-center justify-center flex text-[12px]">
            1
          </span>
        </div>
        <img src="/public/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
