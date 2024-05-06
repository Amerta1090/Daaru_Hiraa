import { HomeIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import {
    BanknotesIcon,
    BookmarkIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

type Props = {
    className?: string;
};

const Sidebar = (props: Props) => {
    const { className } = props;
    return (
        <div
            className={`h-[360px] w-[65px] bg-white mx-1 mt-2 rounded-lg flex flex-col flex-wrap gap-3 items-center justify-start pt-4 pb-4 text-black shadow-xl ${className}`}
        >
            <Link
                href={route("home.index")}
                disabled={route().current("home.index")}
                className={`group cursor-pointer hover:bg-black rounded-lg hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home.index")
                        ? "bg-black text-white hover:cursor-not-allowed"
                        : ""
                } `}
                aria-disabled={route().current("home.index")}
            >
                <HomeIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-lg flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Dashboard
                </p>
            </Link>
            <button
                className={`group cursor-pointer  hover:bg-black rounded-lg hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home") ? "bg-black text-white" : ""
                }`}
            >
                <BanknotesIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-lg flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Denda
                </p>
            </button>
            <button
                className={`group cursor-pointer  hover:bg-black rounded-lg hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home") ? "bg-black text-white" : ""
                }`}
            >
                <HomeIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-lg flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Jadwal Solat
                </p>
            </button>
            <Link
                href={route("progress.index")}
                className={`group cursor-pointer  hover:bg-black rounded-lg hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("progress.index")
                        ? "bg-black text-white"
                        : ""
                }`}
            >
                <BookOpenIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-lg flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Progress
                </p>
            </Link>
            <Link
                href={route("piket.index")}
                className={`group cursor-pointer  hover:bg-black rounded-lg hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("piket.index") ? "bg-black text-white" : ""
                }`}
            >
                <CalendarDaysIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-lg flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Jadwal Piket
                </p>
            </Link>
            <button
                className={`group cursor-pointer  hover:bg-black rounded-lg hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home") ? "bg-black text-white" : ""
                }`}
            >
                <BookmarkIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-lg flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Panduan
                </p>
            </button>
        </div>
    );
};

export default Sidebar;
