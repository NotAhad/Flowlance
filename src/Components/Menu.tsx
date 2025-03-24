import { Link } from "react-router-dom";
import { menu } from "../Data";

const Menu = () => {
  return (
    <div>
      {menu.map((item) => (
        <div className="flex flex-col gap-[10px]">
          {item.listItems.map((listItem) => (
            <Link
              to={listItem.url}
              className="flex items-center justify-center lg:justify-start gap-[10px] p-[10px] -ml-[7px] lg:hover:bg-indigo-900 hover:rounded-[5px]"
              key={listItem.id}
            >
              <img
                className="min-w-[24px] min-h-[24px] mr-4 lg:mr-0"
                src={listItem.icon}
                alt=""
              />
              <span className="hidden lg:block">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
