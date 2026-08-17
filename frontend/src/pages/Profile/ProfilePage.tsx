import ProfileCard from "../../components/profile/ProfileCard";

export default function ProfilePage() {
    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    My Profile
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage your personal information and professional links.
                </p>
            </div>

            <ProfileCard />

        </div>
    );
}