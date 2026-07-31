import {
  Upload,
  Bot,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-5xl font-bold">
          How It Works
        </h2>

        <p className="mt-4 text-center text-lg text-gray-600">
          Four simple steps to improve your resume.
        </p>

        {/* Timeline */}
        <div className="relative mt-20 grid grid-cols-4 gap-8">

          {/* Horizontal Line */}
          <div className="absolute left-20 right-20 top-8 h-1 bg-gray-200"></div>

          {/* Step 1 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <Upload className="h-10 w-10 text-indigo-600" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Upload Resume
            </h3>

            <p className="mt-3 text-gray-600">
              Upload your PDF resume securely.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <Bot className="h-10 w-10 text-indigo-600" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              AI Analysis
            </h3>

            <p className="mt-3 text-gray-600">
              AI analyzes your resume.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <BarChart3 className="h-10 w-10 text-indigo-600" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              ATS Score
            </h3>

            <p className="mt-3 text-gray-600">
              Receive a detailed ATS score.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <BriefcaseBusiness className="h-10 w-10 text-indigo-600" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Interview Prep
            </h3>

            <p className="mt-3 text-gray-600">
              Practice interview questions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}