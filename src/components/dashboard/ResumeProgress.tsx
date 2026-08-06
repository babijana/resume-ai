import Card from "../ui/Card";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { version: "V1", score: 58 },
    { version: "V2", score: 80 },
    { version: "V3", score: 92 },
];

export default function ResumeProgress() {
    return (
        <Card>

            <h2 className="mb-6 text-xl font-semibold">
                Resume Progress
            </h2>

            <div className="flex gap-8">

                {/* Left Section */}
                <div className="w-40">

                    <p className="text-gray-500">
                        Current ATS Score
                    </p>

                    <h1 className="mt-2 text-5xl font-bold text-indigo-600">
                        92%
                    </h1>

                    <p className="mt-4 font-semibold text-green-600">
                        ↑ 20%
                    </p>

                    <p className="text-gray-500">
                        Improvement
                    </p>

                </div>

                {/* Right Section */}
                <div className="flex-1 h-64">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <LineChart data={data}>

                            <XAxis dataKey="version" />

                            <YAxis />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="score"
                                stroke="#4F46E5"
                                strokeWidth={3}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </Card>
    );
}