export default function Navbar() {
    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-9xl items-center px-6 py-4">

                {/* Logo */}
                <div>
                    <a
                        href="#"
                        className="text-2xl font-bold text-indigo-600"
                    >
                        ResumeAI
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex justify-center items-center gap-16">
                    <a href="#" className="text-gray-600 hover:text-indigo-600">
                        Features
                    </a>

                    <a href="#" className="text-gray-600 hover:text-indigo-600">
                        How It Works
                    </a>

                    <a href="#" className="text-gray-600 hover:text-indigo-600">
                        Pricing
                    </a>

                    <a href="#" className="text-gray-600 hover:text-indigo-600">
                        About
                    </a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-16">
                    <a href="#" className="text-gray-600 hover:text-indigo-600">
                        Login
                    </a>

                    <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    );
}