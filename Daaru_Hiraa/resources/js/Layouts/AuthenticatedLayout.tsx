import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import {
    BanknotesIcon,
    BookOpenIcon,
    CalendarDaysIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const listSidebarMenu = [
    {
        name: "Dashboard",
        icon: <HomeIcon />,
        href: "home.index",
    },
    {
        name: "Denda",
        icon: <BanknotesIcon />,
        href: "denda.index",
    },
    {
        name: "Jadwal Solat",
        icon: <HomeIcon />,
        href: "jadwal.index",
    },

    {
        name: "Mutaba'ah Qur'an",
        icon: <BookOpenIcon />,
        href: "progress.index",
    },
    {
        name: "Piket Kebersihan",
        icon: <CalendarDaysIcon />,
        href: "piket.index",
    },
    {
        name: "Panduan",
        icon: <QuestionMarkCircleIcon />,
        href: "guide.index",
    },
];

export default function Authenticated({
    user,
    children,
    title,
    notifications,
}: PropsWithChildren<{
    user: User;
    header?: ReactNode;
    title: string;
    notifications: any;
}>) {
    return (
        <div className="bg-gray-200 flex flex-col">
            <Navbar title={title} user={user} notifications={notifications} />

            <div className="flex flex-wrap pt-[82px] m-1 gap-5 me-5">
                <div className="hidden sm:flex">
                    <Sidebar
                        className="fixed top-24 left-3"
                        listMenus={listSidebarMenu}
                    />
                </div>
                <main className="flex-grow mt-5 mb-3 ps-[72px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
