import Logo from "~/layouts/main/sidebar/logo/index.jsx";
import Menu from "~/layouts/main/sidebar/menu/index.jsx";
import Account from "~/layouts/main/sidebar/menu/account/index.jsx";

export default function Sidebar() {
    return (
        <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col ">
            <Logo/>
            <Menu/>
            <Account/>
        </aside>
    )
}