type InputProps = {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
};

export default function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = false,
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="
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
            "
        />
    );
}