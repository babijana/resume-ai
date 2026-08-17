import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

import {
    LayoutDashboard,
    FileText,
    Upload,
    BarChart3,
    User,
    Settings,
    LogOut,
} from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="flex h-screen w-64 flex-col border-r bg-white">

            {/* Logo */}
            <Logo />

            {/* Navigation */}
            <nav className="flex-1 p-4">

                <div className="space-y-2">

                    <SidebarItem
                        icon={LayoutDashboard}
                        title="Dashboard"
                        to="/dashboard"
                    />

                    <SidebarItem
                        icon={FileText}
                        title="My Resumes"
                        to="/resumes"
                    />

                    <SidebarItem
                        icon={Upload}
                        title="Upload Resume"
                        to="/upload"
                    
                    />

                    <SidebarItem
                        icon={BarChart3}
                        title="Analysis"
                        to="/analysis"
                    />

                    <SidebarItem
                        icon={User}
                        title="Profile"
                        to="/profile"
                    />

                    <SidebarItem
                        icon={Settings}
                        title="Settings"
                        to="/settings"
                    />

                </div>

            </nav>

            {/* Logout */}
            <div className="border-t p-4">

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-red-600">

                    <LogOut size={20} />

                    <span className="font-medium">
                        Logout
                    </span>

                </button>

            </div>

        </aside>
    );
}