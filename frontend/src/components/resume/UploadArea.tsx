import { useRef, useState } from "react";
import { CloudUpload } from "lucide-react";

import Button from "../ui/Button";

type UploadAreaProps = {
    onFileSelect: (file: File) => void;
};

export default function UploadArea({
    onFileSelect,
}: UploadAreaProps) {

    const [error, setError] = useState("");
    // Reference to the hidden file input
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Open the file picker
    const handleChooseFile = () => {
        fileInputRef.current?.click();
    };

    // Handle file selection
    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
            setError("Only PDF, DOC and DOCX files are allowed.");
            return;
        }
        const maxSize = 5 * 1024 * 1024;

        if (file.size > maxSize) {
            setError("File size must be less than 5 MB.");
            return;
        }
        setError("");
        onFileSelect(file);
    };



    return (
        <div
            className="
                rounded-2xl
                border-2
                border-dashed
                border-gray-300
                bg-gray-50
                p-12
                text-center
                transition-all
                duration-300
                hover:border-indigo-500
                hover:bg-indigo-50
            "
        >
            {/* Upload Icon */}
            <div className="flex justify-center">
                <CloudUpload
                    size={64}
                    className="text-indigo-500"
                />
            </div>

            {/* Title */}
            <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                Drag & Drop your resume here
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-gray-500">
                or
            </p>

            {/* Choose File Button */}
            <div className="mt-6">
                <Button onClick={handleChooseFile}>
                    Choose File
                </Button>
            </div>

            {/* Hidden File Input */}
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
            />

            {/* Supported Formats */}
            <p className="mt-6 text-sm text-gray-500">
                PDF • DOC • DOCX • Maximum 5 MB
            </p>
            {error && (
                <p className="mt-4 text-sm font-medium text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}