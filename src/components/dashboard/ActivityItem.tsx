import type { LucideIcon } from "lucide-react";

type ActivityItemProps = {
    icon: LucideIcon;
    title: string;
    time: string;
    bgColor: string;
    iconColor: string;
};

export default function ActivityItem({
    icon: Icon,
    title,
    time,
    bgColor,
    iconColor,
}: ActivityItemProps) {
    return (
        <div className="flex items-start gap-4">

            <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${bgColor}`}
            >
                <Icon
                    size={18}
                    className={iconColor}
                />
            </div>

            <div>

                <p className="font-medium text-gray-800">
                    {title}
                </p>

                <p className="text-sm text-gray-500">
                    {time}
                </p>

            </div>

        </div>
    );
}