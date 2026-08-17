import Card from "../ui/Card";

type StatCardProps = {
    title: string;
    value: string;
};

export default function StatCard({
    title,
    value,
}: StatCardProps) {
    return (
        <Card className="p-6">

            <h3 className="text-sm font-medium text-gray-600">
                {title}
            </h3>

            <h2 className="mt-3 text-3xl font-bold text-indigo-600">
                {value}
            </h2>

        </Card>
    );
}