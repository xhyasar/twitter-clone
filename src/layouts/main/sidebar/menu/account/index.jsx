import {Popover} from "@headlessui/react";
import {useAccount} from "~/store/auth/hooks.js";

export default function Account() {
    const account = useAccount();

    return (
        <div className="mt-auto">
            <Popover>
                <Popover.Button
                    className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex"
                >
                    Test
                    <img src={account?.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3">
                        {account.fullName}
                    </div>
                </Popover.Button>
                <Popover.Panel>
                    acilacak ekran
                </Popover.Panel>
            </Popover>
        </div>
    )
}