import { useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

import UploadArea from "./UploadArea";
import SelectedFile from "./SelectedFile";

export default function UploadCard() {
    // Store the selected file
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Handle file selection
    const handleFileSelect = (file: File) => {
        setSelectedFile(file);
    };

    // Handle file removal
    const handleRemoveFile = () => {
        setSelectedFile(null);
    };

    return (
        <Card>
            <div className="space-y-6">

                {/* Upload Area */}
                {!selectedFile && (
                    <UploadArea
                        onFileSelect={handleFileSelect}
                    />
                )}

                {/* Selected File */}
                {selectedFile && (
                    <SelectedFile
                        file={selectedFile}
                        onRemove={handleRemoveFile}
                    />
                )}

                {/* Analyze Button */}
                <div className="flex justify-end">
                    <Button
                        disabled={!selectedFile}
                    >
                        Analyze Resume
                    </Button>
                </div>

            </div>
        </Card>
    );
}