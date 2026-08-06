import Card from "../ui/Card";
import ActivityItem from "./ActivityItem";

import {
    Upload,
    TrendingUp,
    Lightbulb,
    User,
} from "lucide-react";

export default function RecentActivity() {
    return (
        <Card>

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                    Recent Activity
                </h2>

                <button className="text-sm font-medium text-indigo-600 hover:underline">
                    View All
                </button>

            </div>

            <div className="space-y-6">

                <ActivityItem
                    icon={Upload}
                    title="Uploaded Resume.pdf"
                    time="Today, 09:20 AM"
                    bgColor="bg-blue-100"
                    iconColor="text-blue-600"
                />

                <ActivityItem
                    icon={TrendingUp}
                    title="ATS Score improved from 82% to 92%"
                    time="Today, 09:20 AM"
                    bgColor="bg-green-100"
                    iconColor="text-green-600"
                />

                <ActivityItem
                    icon={Lightbulb}
                    title="AI generated interview questions"
                    time="Today, 09:15 AM"
                    bgColor="bg-yellow-100"
                    iconColor="text-yellow-600"
                />

                <ActivityItem
                    icon={User}
                    title="Profile updated"
                    time="2 days ago"
                    bgColor="bg-purple-100"
                    iconColor="text-purple-600"
                />

            </div>

        </Card>
    );
}