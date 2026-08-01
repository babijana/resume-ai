type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "outline";
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
};

export default function Button({
    children,
    variant = "primary",
    disabled = false,
    className = "",
    onClick,
}: ButtonProps) {
    const baseStyle =
        "rounded-lg px-6 py-3 font-medium transition duration-300";

    const primaryStyle =
        "bg-indigo-600 text-white hover:bg-indigo-700";

    const outlineStyle =
        "border border-indigo-600 text-indigo-600 hover:bg-indigo-50";

    const disabledStyle =
        "cursor-not-allowed bg-gray-300 text-gray-500";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyle}
                ${disabled
                    ? disabledStyle
                    : variant === "primary"
                        ? primaryStyle
                        : outlineStyle
                }
                ${className}
            `}
        >
            {children}
        </button>
    );
}