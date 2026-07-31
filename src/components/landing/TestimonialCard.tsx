import { Star } from "lucide-react";

type TestimonialCardProps = {
    name: string;
    role: string;
    quote: string;
};

export default function TestimonialCard(props: TestimonialCardProps) {
    return (
        <div className="cursor-pointer rounded-2xl border border-gray-200 bg-white py-12 px-10 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className="h-6 w-6 text-purple-600"
                        fill="currentColor"
                    />
                ))}
            </div>

            {/* Quote */}
            <p className="text-center italic text-gray-800 leading-8">
                "{props.quote}"
            </p>

            {/* Author */}
            <div className="mt-10 text-center">
                <h3 className="text-lg font-semibold">
                    {props.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {props.role}
                </p>
            </div>

        </div>
    );
}