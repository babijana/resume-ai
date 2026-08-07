type TextAreaProps = {
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    rows?: number;
};

export default function TextArea({
    label,
    name,
    placeholder = "",
    value,
    onChange,
    rows = 5,
}: TextAreaProps) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block font-medium text-gray-700">
                    {label}
                </label>
            )}

            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
                className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    outline-none
                    transition
                    duration-300
                    focus:border-indigo-600
                    focus:ring-2
                    focus:ring-indigo-200
                "
            />
        </div>
    );
}