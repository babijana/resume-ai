import Avatar from "../ui/Avatar";
import Button from "../ui/Button";

export default function ProfilePhoto() {
    return (
        <div className="flex items-center gap-6">

            <Avatar />

            <div>
                <Button variant="outline">
                    Change Photo
                </Button>

                <p className="mt-2 text-sm text-gray-500">
                    JPG, PNG up to 2 MB
                </p>
            </div>

        </div>
    );
}