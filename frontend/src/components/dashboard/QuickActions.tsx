import Card from "../ui/Card";
import Button from "../ui/Button";

export default function QuickActions() {
    return (
        <Card className="w-full p-8">

            <h2 className="text-xl font-semibold">
                Quick Actions
            </h2>

            <div className="mt-6 space-y-4">

                <Button className="w-full">
                    Upload Resume
                </Button>

                <Button variant="outline" className="w-full">
                    View Reports
                </Button>

                <Button variant="outline" className="w-full">
                    Edit Profile
                </Button>

            </div>

        </Card>
    );
}