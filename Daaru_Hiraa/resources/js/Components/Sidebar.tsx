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
            className={`h-[360px] w-[65px] bg-white mx-1 mt-2 rounded-md flex flex-col flex-wrap gap-3 items-center justify-start pt-4 pb-4 text-gray-500 shadow-xl ${className}`}
        >
            <Link
                href={route("home.index")}
                className={`group cursor-pointer hover:bg-green-500 rounded-md hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home.index")
                        ? "bg-green-500 text-white"
                        : ""
                }`}
            >
                <HomeIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-md flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Dashboard
                </p>
            </Link>
            <button
                className={`group cursor-pointer hover:bg-green-500 rounded-md hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home") ? "bg-green-500 text-white" : ""
                }`}
            >
                <BanknotesIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-md flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Denda
                </p>
            </button>
            <button
                className={`group cursor-pointer hover:bg-green-500 rounded-md hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home") ? "bg-green-500 text-white" : ""
                }`}
            >
                <HomeIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-md flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Jadwal Solat
                </p>
            </button>
            <button
                className={`group cursor-pointer hover:bg-green-500 rounded-md hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home") ? "bg-green-500 text-white" : ""
                }`}
            >
                <BookOpenIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-md flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Alquran
                </p>
            </button>
            <Link
                href={route("piket.index")}
                className={`group cursor-pointer hover:bg-green-500 rounded-md hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("piket.index")
                        ? "bg-green-500 text-white"
                        : ""
                }`}
            >
                <CalendarDaysIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-md flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Jadwal Piket
                </p>
            </Link>
            <button
                className={`group cursor-pointer hover:bg-green-500 rounded-md hover:text-white p-2 transition ease-in-out delay-50 duration-500 relative ${
                    route().current("home") ? "bg-green-500 text-white" : ""
                }`}
            >
                <BookmarkIcon className="size-7 text-blue-white" />
                <p className="absolute top-2 bg-black w-[100px] rounded-md flex justify-center items-center left-12 text-sm py-[2px] invisible group-hover:visible group-hover:text-white">
                    Panduan
                </p>
            </button>
        </div>
    );
};

export default Sidebar;
