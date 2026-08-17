import { useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

import ProfilePhoto from "./ProfilePhoto";
import ProfileForm from "./ProfileForm";

import type { ProfileData } from "../../types/profile";

export default function ProfileCard() {
    const [profileData, setProfileData] = useState<ProfileData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        university: "",
        degree: "",
        academicYear: "",
        linkedIn: "",
        github: "",
        bio: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        console.log(profileData);

        // TODO:
        // PUT /api/users/profile
    };

    return (
        <Card>
            <div className="space-y-8">

                <h2 className="text-2xl font-semibold text-gray-800">
                    Profile Information
                </h2>

                <ProfilePhoto />

                <ProfileForm
                    profileData={profileData}
                    onChange={handleChange}
                />

                <div className="flex justify-end">
                    <Button onClick={handleSave}>
                        Save Changes
                    </Button>
                </div>

            </div>
        </Card>
    );
}