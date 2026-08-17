type InputProps = {
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
};

export default function Input({
    label,
    name,
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = false,
    className = "",
}: InputProps) {
    return (
        <div className="space-y-2">

            {label && (
                <label className="block font-medium text-gray-700">
                    {label}
                </label>
            )}

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    text-gray-900
                    outline-none
                    transition
                    duration-300
                    focus:border-indigo-600
                    focus:ring-2
                    focus:ring-indigo-200
                    disabled:cursor-not-allowed
                    disabled:bg-gray-100
                    ${className}
                `}
            />

        </div>
    );
}