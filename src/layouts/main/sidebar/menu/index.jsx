import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {mainMenu} from "~/utils/const.jsx";



export default function Menu (){
    return (
        <nav className="mt-0.5 mb-1">
            {mainMenu.map((menu) => (
                <NavLink key={menu.path} to={menu.path} className="py-1 block group">
            {({isActive}) => (
                <div
                    className={classNames("p-3 rounded-full  inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors", {
                        "font-bold": isActive
                    })}>
                    {!isActive && menu.icon.passive}
                    {isActive && menu.icon.active}
                    <div className="pr-4 text-xl ">
                        {menu.title}
                    </div>
                </div>
            )}
        </NavLink>
            ))}
        </nav>
    )};