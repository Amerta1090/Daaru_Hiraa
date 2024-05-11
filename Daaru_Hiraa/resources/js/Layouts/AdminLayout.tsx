import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import { UserIcon } from "@heroicons/react/24/outline";

const listSIdebarMenu = [
    {
        name: "Users",
        icon: <UserIcon />,
        href: "admin.index",
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
                        className="fixed top-24 left-3"
                        listMenus={listSIdebarMenu}
                    />
                </div>
                <main className="flex-grow mt-5 mb-3 ps-[72px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
