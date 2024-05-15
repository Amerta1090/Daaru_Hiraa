import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

type Props = {
    className?: string;
    listMenus: Array<{
        name: string;
        icon: ReactNode;
        href: string;
    }>;
};

const Sidebar = (props: Props) => {
    const { className, listMenus } = props;
    return (
        <div
            className={`w-[65px] bg-background rounded-xl flex flex-col flex-wrap gap-3 items-center justify-start pt-4 pb-4 shadow-md ${className}`}
        >
            {listMenus.map((item: any, index: number) => (
                <Link
                    href={route(`${item.href}`)}
                    className={`group cursor-pointer rounded-xl hover:text-primary p-2 transition ease-in-out delay-50 duration-500 relative ${
                        route().current(`${item.href}`)
                            ? "bg-secondary text-primary"
                            : "text-gray-500"
                    } `}
                    aria-disabled={route().current(`${item.href}`)}
                    key={index}
                >
                    <div className="size-7">{item.icon}</div>
                    <p className="absolute top-2 bg-black rounded-lg flex justify-center items-center left-12 text-sm py-[2px] px-3 text-nowrap invisible group-hover:visible group-hover:text-white">
                        {item.name}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
