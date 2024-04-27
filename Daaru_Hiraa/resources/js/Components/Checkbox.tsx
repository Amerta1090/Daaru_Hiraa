import { InputHTMLAttributes } from "react";

export default function Checkbox({
    className = "",
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-gray-300 text-[#0969DA] shadow-sm focus:ring-[#0969DA] " +
                className
            }
        />
    );
}
