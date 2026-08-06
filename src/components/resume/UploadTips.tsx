import Card from "../ui/Card";
import { CircleCheckBig, Lightbulb } from "lucide-react";

export default function UploadTips() {
    const tips = [
        "Upload your resume in PDF format for the best results.",
        "Keep your resume under 5 MB.",
        "Include your latest experience and skills.",
        "Use clear section headings for better ATS compatibility.",
    ];

    return (
        <Card>
            <div className="space-y-5">

                {/* Heading */}
                <div className="flex items-center gap-2">
                    <Lightbulb
                        className="text-amber-500"
                        size={22}
                    />

                    <h2 className="text-xl font-semibold">
                        Upload Tips
                    </h2>
                </div>

                {/* Tips */}
                <div className="space-y-4">
                    {tips.map((tip) => (
                        <div
                            key={tip}
                            className="flex items-start gap-3"
                        >
                            <CircleCheckBig
                                size={18}
                                className="mt-1 text-green-500"
                            />

                            <p className="text-gray-600">
                                {tip}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </Card>
    );
}