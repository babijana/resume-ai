import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

import type { ProfileData } from "../../types/profile";

type ProfileFormProps = {
    profileData: ProfileData;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};

export default function ProfileForm({
    profileData,
    onChange,
}: ProfileFormProps) {
    return (
        <div className="space-y-8">

            {/* Personal Information */}
            <div>
                <h3 className="mb-4 text-lg font-semibold">
                    Personal Information
                </h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    <Input
                        label="First Name"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={profileData.firstName}
                        onChange={onChange}
                    />

                    <Input
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={profileData.lastName}
                        onChange={onChange}
                    />

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={profileData.email}
                        onChange={onChange}
                    />

                    <Input
                        label="Phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={profileData.phone}
                        onChange={onChange}
                    />

                </div>
            </div>

            {/* Education */}
            <div>
                <h3 className="mb-4 text-lg font-semibold">
                    Education
                </h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    <Input
                        label="University"
                        name="university"
                        placeholder="University of Moratuwa"
                        value={profileData.university}
                        onChange={onChange}
                    />

                    <Input
                        label="Degree"
                        name="degree"
                        placeholder="BSc Computer Science & Engineering"
                        value={profileData.degree}
                        onChange={onChange}
                    />

                    <Input
                        label="Academic Year"
                        name="academicYear"
                        placeholder="3rd Year"
                        value={profileData.academicYear}
                        onChange={onChange}
                    />

                </div>
            </div>

            {/* Professional Links */}
            <div>
                <h3 className="mb-4 text-lg font-semibold">
                    Professional Links
                </h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    <Input
                        label="LinkedIn"
                        name="linkedIn"
                        placeholder="https://linkedin.com/in/username"
                        value={profileData.linkedIn}
                        onChange={onChange}
                    />

                    <Input
                        label="GitHub"
                        name="github"
                        placeholder="https://github.com/username"
                        value={profileData.github}
                        onChange={onChange}
                    />

                </div>
            </div>

            {/* About */}
            <div>
                <h3 className="mb-4 text-lg font-semibold">
                    About
                </h3>

                <TextArea
                    label="Bio"
                    name="bio"
                    placeholder="Tell us about yourself..."
                    value={profileData.bio}
                    onChange={onChange}
                    rows={5}
                />
            </div>

        </div>
    );
}