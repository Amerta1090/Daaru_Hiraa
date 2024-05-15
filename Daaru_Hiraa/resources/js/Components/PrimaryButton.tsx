import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-xl font-semibold text-sm text-white tracking-widest hover:bg-secondary focus:bg-[#0969DA] active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-200 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
