import Button from "../ui/Button";

type SelectedFileProps = {
    file: File;
    onRemove: () => void;
};

export default function SelectedFile({
    file,
    onRemove,
}: SelectedFileProps) {
    return (
        <div
            className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-green-200
                bg-green-50
                p-4
            "
        >
            {/* File Information */}
            <div>
                <p className="font-medium text-green-700">
                    Selected File
                </p>

                <p className="mt-1 text-gray-800">
                    {file.name}
                </p>

                <p className="text-sm text-gray-500">
                    {(file.size / 1024).toFixed(2)} KB
                </p>
            </div>

            {/* Remove Button */}
            <Button
                variant="outline"
                onClick={onRemove}
            >
                Remove
            </Button>
        </div>
    );
}