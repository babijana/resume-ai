import { FileText, Bot, Target } from "lucide-react";


export default function Features() {
    return (
        <section className="w-full bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">

                <h2 className="text-center text-4xl font-bold">
                    Why Choose ResumeAI?
                </h2>
                <p className="mt-4 text-center text-lg text-gray-600">
                    Everything you need to improve your resume and prepare for interviews.
                </p>
                <div className="mt-16 grid grid-cols-3 gap-8">

                    <div className="rounded-2xl border border-gray-200 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                        <div className="text-5xl transition duration-300 group-hover:scale-110">
                            <div className="mb-6 flex justify-center">
                                <FileText className="h-14 w-14 text-indigo-600" />
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                                ATS Score Analysis
                            </h3>

                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Upload your resume and receive an ATS compatibility score with detailed suggestions.
                            </p>
                        </div>

                    </div>


                    <div className="rounded-2xl border border-gray-200 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                        <div className="text-5xl transition duration-300 group-hover:scale-110">
                            <div className="mb-6 flex justify-center">
                                <Bot className="h-14 w-14 text-indigo-600" />
                            </div>




                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                                AI Suggestions
                            </h3>

                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Get personalized recommendations to improve your resume.

                            </p>
                        </div>

                    </div>

                    <div className="rounded-2xl border border-gray-200 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                        <div className="text-5xl transition duration-300 group-hover:scale-110">
                            <div className="mb-6 flex justify-center">
                                <Target className="h-14 w-14 text-indigo-600" />
                            </div>






                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                                Interview Preparation
                            </h3>

                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Generate interview questions based on your resume.
                            </p>
                        </div>

                    </div>


                </div>
            </div>

        </section>
    );
}