
export default function Logo() {
    return (
        <div className="flex items-center gap-3 px-6 py-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                R
            </div>

            <div>
                <h1 className="text-xl font-bold text-gray-900">
                    ResumeAI
                </h1>

                <p className="text-xs text-gray-500">
                    Resume Analyzer
                </p>
            </div>
        </div>
    );
}