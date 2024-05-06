import { useState, PropsWithChildren, ReactNode } from "react";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import image from "../../../assets/logo.png";
import Sidebar from "@/Components/Sidebar";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Authenticated({
    user,
    header,
    children,
    title,
}: PropsWithChildren<{ user: User; header?: ReactNode; title: string }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div className="bg-gray-200 flex flex-col">
            <nav className="bg-white shadow-sm rounded-lg mx-4 mt-3 py-1 fixed w-[99%] -left-2 ">
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
                                            <div className="flex relative">
                                                <BellIcon className="w-5" />
                                                <span className="absolute flex h-2 w-2 -top-[1px] left-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="w-[1px] h-10 bg-gray-500"></span>
                                        <Dropdown.Trigger>
                                            <button className="w-9 h-9 rounded-full bg-pink-500 overflow-hidden flex items-center justify-center">
                                                <img src={image} alt="" />
                                            </button>
                                        </Dropdown.Trigger>
                                    </span>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
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

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("home.index")}
                            active={route().current("home.index")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-wrap pt-[82px] m-1 gap-5 me-5">
                <div className="hidden sm:flex">
                    <Sidebar className="fixed top-24 left-3" />
                </div>
                <main className="flex-grow mt-5 mb-3 ps-[72px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
