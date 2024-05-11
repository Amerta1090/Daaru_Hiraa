import InputLabel from "./InputLabel";

type PropsSelect = {
    className?: string;
    options: Array<any>;
    name: string;
};

const Select = (props: PropsSelect) => {
    const { className, options, name } = props;

    return (
        <>
            <InputLabel value={name} className="py-2">
                {name}
            </InputLabel>
            <select
                name={name}
                className={`border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-xl shadow-sm bg-gray-100 px-5 w-full ${className} cursor-pointer`}
            >
                {options.map((option: any, index: number) => (
                    <option
                        value={option}
                        className="text-gray-700"
                        key={index}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
