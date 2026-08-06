import Card from "../ui/Card";
import Button from "../ui/Button";
import { Lightbulb } from "lucide-react";
import SuggestionItem from "./SuggestionItem";
export default function AISuggestions() {
    return (
        <Card className="h-full">

            <div className="flex items-center gap-2 mb-6">

                <Lightbulb
                    className="text-yellow-500"
                    size={24}
                />

                <h2 className="text-xl font-semibold">
                    AI Suggestions
                </h2>

            </div>

            <div className="space-y-4">

                <SuggestionItem
                    text="Add more React keywords."
                />

                <SuggestionItem
                    text="Mention Spring Boot REST APIs."
                />

                <SuggestionItem
                    text="Improve measurable achievements."
                />

                <SuggestionItem
                    text="Include Docker in your skills."
                />

            </div>

            <div className="mt-8">

                <Button className="w-full">
                    View Full Report
                </Button>

            </div>

        </Card>
    );
}