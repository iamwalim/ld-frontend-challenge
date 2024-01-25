import { calculatePower } from "../../../common/helpers";

const Row = ({ pagination, columns, loading, error }) => {
    const { paginatedData } = pagination;

    if (error) {
        return (
            <tbody>
                <tr>
                    <td colSpan={columns.length} className="px-6 py-4 text-center text-black">
                        {`${error?.status} - ${error?.statusText}`}
                    </td>
                </tr>
            </tbody>
        );
    }

    if (loading) {
        return (
            <tbody>
                <tr>
                    <td colSpan={columns.length} className="px-6 py-4 text-center text-black">
                        <div className="flex items-center justify-center">
                            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary-300 rounded-full"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }

    if (paginatedData?.length < 1 && !loading) {
        return (
            <tbody>
                <tr>
                    <td colSpan={columns.length} className="px-6 py-4 text-center text-black">
                        No data available
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody>
            {paginatedData.map((data) => (
                <tr
                    key={data.id}
                    className="bg-white border-b border-gray-100 last:border-0 text-center text-sm font-medium text-gray-700 whitespace-nowrap hover:bg-gray-50 cursor-text transition-all duration-300 ease-in-out"
                >
                    {columns.map((column) => (
                        <td key={column.key} className="px-6 py-3 whitespace-nowrap">
                            {column.key === "type"
                                ? data[column.key].join(", ")
                                : column.key === "power"
                                    ? calculatePower(data)
                                    : data[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default Row;