import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <section className="w-full bg-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="text-center">

                    <h2 className="text-5xl font-bold">
                        What Our Users Say
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Real stories from students and professionals who improved
                        their resumes using ResumeAI.
                    </p>

                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    <TestimonialCard
                        name="Sarah Johnson"
                        role="Software Engineering Student"
                        quote="ResumeAI helped me improve my ATS score before applying for internships."
                    />

                    <TestimonialCard
                        name="David Perera"
                        role="Final Year Undergraduate"
                        quote="The AI suggestions made my resume much stronger and helped me receive more interview calls."
                    />

                    <TestimonialCard
                        name="Nimal Fernando"
                        role="Graduate Software Engineer"
                        quote="A clean and simple platform that helped me identify my missing skills."
                    />

                </div>

            </div>

        </section>
    );
}