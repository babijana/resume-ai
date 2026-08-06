import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
    return (
        <header className="flex h-20 items-center justify-between border-b bg-white px-8">

            {/* Left */}
            <div>
                <h1 className="text-2xl font-bold">
                    Dashboard
                </h1>

                <p className="text-sm text-gray-500">
                    Welcome back to ResumeAI
                </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">

                {/* Search */}
                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-indigo-600"
                    />

                </div>

                {/* Notification */}
                <button className="rounded-full p-2 hover:bg-gray-100">
                    <Bell size={22} />
                </button>

                {/* User */}
                <div className="flex items-center gap-3">

                    <UserCircle
                        size={40}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="font-semibold">
                            Bobby
                        </p>

                        <p className="text-sm text-gray-500">
                            Student
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}