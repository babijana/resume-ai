export default function CTA() {
    return (
        <section className="w-full bg-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                {/* CTA Card */}
                <div className="rounded-3xl bg-indigo-600 px-10 py-16 text-center text-white">

                    <h2 className="text-5xl font-bold">
                        Ready to Improve Your Resume?
                    </h2>

                    <p className="mt-4 text-lg">
                        Join thousands of students preparing for internships and software engineering careers.
                    </p>

                    <div className="mt-8 flex justify-center gap-6">

                        <button className="rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:scale-105">
                            Get Started
                        </button>

                        <button className="font-semibold text-white transition hover:underline">
                            Learn More
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}