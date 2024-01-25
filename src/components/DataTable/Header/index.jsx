const Header = ({ columns }) => {
    return (
        <thead className="text-xs text-center text-gray-450 bg-gray-25">
            <tr>
                {columns.map((column) => (
                    <th key={column.key} className="px-6 py-3.5">
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default Header;