type WelcomeBannerProps = {
    name: string;
};

export default function WelcomeBanner({
    name,
}: WelcomeBannerProps) {
    return (
        <div className="mb-8">

            <h1 className="text-4xl font-bold">
                Welcome back, {name} 👋
            </h1>

            <p className="mt-2 text-gray-600">
                Here's an overview of your latest resume analysis.
            </p>

        </div>
    );
}