export default function Hero() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-16 px-2 py-20">

                {/* Left Side */}
                <div>
                    <h1 className="text-7xl font-bold leading-tight">
                        Analyze.
                        <br />
                        Improve.
                        <br />
                        Get Hired.
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        AI-powered resume analyzer that helps students improve their ATS score,
                        identify skill gaps, and prepare for interviews.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-3">

                        <button className="rounded-lg bg-indigo-600 px-22 py-6 text-white transition hover:bg-indigo-700">
                            Get Started
                        </button>

                        <button className="text-sm text-gray-700 hover:text-indigo-600 transition">
                            Learn More
                        </button>

                    </div>
                </div>

                {/* Right Side */}
                <div className="flex justify-end">
                    <div className="flex h-96 w-96 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                        Hero Image
                    </div>
                </div>

            </div>
        </section>
    );
}