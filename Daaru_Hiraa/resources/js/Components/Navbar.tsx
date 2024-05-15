import { Link } from "@inertiajs/react";
import image from "../../../assets/logo.png";
import Dropdown from "./Dropdown";
import { BellIcon } from "@heroicons/react/24/outline";
import { User } from "@/types";
import ModalNotify from "./ModalNotify";
import { PropsWithChildren, useEffect, useState } from "react";

const Navbar = ({
    user,
    title,
    notifications,
}: PropsWithChildren<{
    user: User;
    title?: string;
    notifications: any;
}>) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [isModal, setIsModal] = useState(false);

    // console.log(notifications); // {data: notifications.data};

    return (
        <nav className="bg-transparent mx-4 mt-3 py-1 fixed w-[99%] -left-2 px-1 bg-white rounded-xl">
            <div className="mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/" className="block w-9">
                                <img src={image} alt="" />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ms-5 sm:flex sm:justify-center sm:items-center">
                            <h1 className="text-2xl font-bold text-gray-600">
                                {title}
                            </h1>
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <span className="flex rounded-md justify-center items-center gap-3">
                                    <div className="flex flex-col items-end text-gray-600">
                                        <p>{user.name}</p>

                                        {/* Bell Icon */}
                                        <button
                                            className="flex relative"
                                            onClick={() => setIsModal(true)}
                                        >
                                            <BellIcon className="w-5 cursor-pointer" />

                                            <span className="absolute flex h-2 w-2 -top-[1px] left-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                            </span>
                                        </button>
                                        {/* END Bell Icon */}
                                        <div
                                            className="fixed inset-0 z-40 bg-black bg-opacity-50 invisible"
                                            onClick={() => setIsModal(false)}
                                            style={{
                                                display: isModal
                                                    ? "block"
                                                    : "none",
                                            }}
                                        ></div>
                                    </div>
                                    <span className="w-[1px] h-10 bg-gray-500"></span>
                                    <Dropdown.Trigger>
                                        <button className="w-10 h-10 rounded-full bg-pink-500 overflow-hidden flex items-center justify-center">
                                            <img src={image} alt="" />
                                        </button>
                                    </Dropdown.Trigger>
                                </span>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <ModalNotify
                notifications={notifications}
                isModal={isModal}
                setIsModal={setIsModal}
            />
        </nav>
    );
};

export default Navbar;
