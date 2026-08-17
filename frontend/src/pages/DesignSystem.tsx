import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

export default function DesignSystem() {
    return (
        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="mb-10 text-4xl font-bold">
                ResumeAI Design System
            </h1>

            {/* Buttons */}
            <section className="mb-12">

                <h2 className="mb-6 text-2xl font-semibold">
                    Buttons
                </h2>

                <div className="flex gap-4">

                    <Button>
                        Primary Button
                    </Button>

                    <Button variant="outline">
                        Outline Button
                    </Button>

                    <Button disabled>
                        Disabled Button
                    </Button>

                </div>

            </section>

            {/* Card */}
            <section>

                <h2 className="mb-6 text-2xl font-semibold">
                    Card
                </h2>

                <div className="max-w-md">

                    <Card>

                        <h3 className="text-xl font-bold">
                            ATS Score
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Your resume has an ATS score of
                        </p>

                        <h1 className="mt-4 text-5xl font-bold text-indigo-600">
                            92%
                        </h1>

                    </Card>

                </div>

            </section>
            <section className="mt-12">

                <h2 className="mb-6 text-2xl font-semibold">
                    Inputs
                </h2>

                <div className="max-w-md">

                    <Input placeholder="Enter your email" />

                </div>

            </section>

        </div>
    );
}