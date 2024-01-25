import Footer from "./Footer";
import Header from "./Header";
import Row from "./Row";

export default function DataTable({ columns, pagination, loading, error }) {
    return (
        <>
            <div className="shadow-xl shadow-gray-200/40 rounded-t-lg rounded-b-xl overflow-y-hidden mt-6 mb-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <Header columns={columns} />
                    <Row pagination={pagination} columns={columns} loading={loading} error={error} />
                </table>
            </div>
            <Footer pagination={pagination} />
        </>
    );
};