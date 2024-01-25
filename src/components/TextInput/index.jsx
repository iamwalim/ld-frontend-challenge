export const TextInput = ({ onChange, value, placeholder, name, icon }) => {
    return (
        <div className="relative flex items-center w-full">
            {icon && (
                <div className="absolute left-3 mt-0.5">
                    {icon}
                </div>
            )}
            <input
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
                className="pl-10 pr-6 py-2 w-full rounded border outline-none focus:ring-2 focus:ring-offset-1 ring-primary-300 text-sm"
            />
        </div>
    );
};