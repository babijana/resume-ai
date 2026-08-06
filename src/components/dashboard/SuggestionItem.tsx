import { CheckCircle2 } from "lucide-react";

type SuggestionItemProps = {
    text: string;
};

export default function SuggestionItem({
    text,
}: SuggestionItemProps) {
    return (
        <div className="flex items-start gap-3">

            <CheckCircle2
                size={18}
                className="mt-1 text-green-500"
            />

            <p className="text-gray-700">
                {text}
            </p>

        </div>
    );
}