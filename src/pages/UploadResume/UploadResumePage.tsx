import UploadCard from "../../components/resume/UploadCard";
import UploadTips from "../../components/resume/UploadTips";

export default function UploadResumePage() {
    return (
        <div className="space-y-8">

            {/* Page Header */}
            <div>

                <h1 className="text-3xl font-bold text-gray-900">
                    Upload Resume
                </h1>

                <p className="mt-2 text-gray-500">
                    Upload your latest resume to receive AI-powered
                    analysis and ATS feedback.
                </p>

            </div>

            {/* Upload Card */}
            <UploadCard />

            {/* Upload Tips */}
            <UploadTips />

        </div>
    );
}