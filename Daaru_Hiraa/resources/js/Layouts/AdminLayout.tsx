import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import {
    ArrowDownOnSquareIcon,
    CheckBadgeIcon,
    DocumentChartBarIcon,
    UserGroupIcon,
    UserIcon,
    UserPlusIcon,
} from "@heroicons/react/24/outline";

const listSIdebarMenu = [
    {
        name: "Presensi",
        icon: <UserPlusIcon />,
        href: "admin.index",
    },
    {
        name: "Rekap Data",
        icon: <DocumentChartBarIcon />,
        href: "denda.index",
    },
    {
        name: "Insert Data",
        icon: <ArrowDownOnSquareIcon />,
        href: "denda.index",
    },
    {
        name: "Approval Data",
        icon: <CheckBadgeIcon />,
        href: "denda.index",
    },
    {
        name: "Users Data",
        icon: <UserGroupIcon />,
        href: "denda.index",
    },
];

export default function AdminLayout({
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
                        className="fixed top-[105px] left-4"
                        listMenus={listSIdebarMenu}
                    />
                </div>
                <main className="flex-grow mt-5 mb-3 ps-[72px]">
                    {/* <h1 className="text-3xl font-bold mb-5 mx-2">{title}</h1> */}
                    {children}
                </main>
            </div>
        </div>
    );
}
