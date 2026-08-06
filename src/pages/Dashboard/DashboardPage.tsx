import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import RecentAnalysis from "../../components/dashboard/RecentAnalysis";
import QuickActions from "../../components/dashboard/QuickActions";
import AISuggestions from "@/components/dashboard/AISuggestions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import ResumeProgress from "@/components/dashboard/ResumeProgress";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-9xl">

                <WelcomeBanner name="Bobby" />

                <div className="mt-8 grid grid-cols-4 gap-6">

                    <StatCard
                        title="ATS Score"
                        value="92%"
                    />

                    <StatCard
                        title="Resumes"
                        value="3"
                    />

                    <StatCard
                        title="Skill Gaps"
                        value="5"
                    />

                    <StatCard
                        title="Interviews"
                        value="8"
                    />

                </div>

                <div className=" mt-8 grid grid-cols-3 gap-6 px-16">
                    <RecentAnalysis />
                    <QuickActions />
                    <AISuggestions />
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">

                    <ResumeProgress />

                    <RecentActivity />

                </div>


            </div>

        </div>
    );
}