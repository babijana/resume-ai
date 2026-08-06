import Card from "../ui/Card";
import Button from "../ui/Button";

export default function RecentAnalysis() {
    return (
        <Card className="w-full p-8">

            <h2 className="text-xl font-semibold">
                Recent Analysis
            </h2>

            <div className="mt-6 space-y-4">

                <div>

                    <p className="text-sm text-gray-500">
                        Resume
                    </p>

                    <p className="font-medium">
                        Resume.pdf
                    </p>

                </div>

                <div>

                    <p className="text-sm text-gray-500">
                        ATS Score
                    </p>

                    <p className="font-medium text-indigo-600">
                        92%
                    </p>

                </div>

                <div>

                    <p className="text-sm text-gray-500">
                        Last Updated
                    </p>

                    <p className="font-medium">
                        Today
                    </p>

                </div>

            </div>

            <Button className="mt-8">
                View Details
            </Button>

        </Card>
    );
}