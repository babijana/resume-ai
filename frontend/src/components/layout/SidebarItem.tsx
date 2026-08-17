import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarItemProps = {
    icon: LucideIcon;
    title: string;
    to: string;
};

export default function SidebarItem({
    icon: Icon,
    title,
    to,
}: SidebarItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `
                flex w-full items-center gap-3 rounded-xl px-4 py-3
                transition-all duration-200
                ${
                    isActive
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
                }
                `
            }
        >
            <Icon size={20} />

            <span className="font-medium">
                {title}
            </span>
        </NavLink>
    );
}