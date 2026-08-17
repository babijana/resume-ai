export default function Footer() {
    return (
        <footer className="w-full border-t bg-white">

            <div className="mx-auto max-w-9xl px-6 py-10">

                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                    {/* Left Side */}
                    <div>

                        <h2 className="text-2xl font-bold text-indigo-600">
                            ResumeAI
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            © 2026 ResumeAI. All rights reserved.
                        </p>

                    </div>

                    {/* Right Side */}
                    <div className="text-center md:text-right">

                        <h3 className="text-lg font-semibold">
                            Contact
                        </h3>

                        <a
                            href="mailto:support@resumeai.com"
                            className="mt-3 block text-gray-600 transition hover:text-indigo-600"
                        >
                            support@resumeai.com
                        </a>

                        <p className="mt-1 text-gray-600">
                            Colombo, Sri Lanka
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}