import React from "react";
import { useNavigate } from "react-router-dom";
import tableData from "../data/tables.json";

const TablePage = () => {
    const navigate = useNavigate();

    const getColor = (status) => {
        if (status === "1") return "bg-[#99e0ff]";
        if (status === "2") return "bg-red-400";
        return "bg-white";
    };

    return (

        <div className="p-6 w-3/4 m-auto">
            <h1 className="text-2xl font-bold mb-6">Tables</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {tableData?.result?.map((table) => (
                    <div
                        key={table.TableID}
                        onClick={() =>
                            navigate(`/table/${table.TableName}`, { state: table })
                        }
                        className={`w-full h-32 rounded-xl shadow-lg flex justify-center items-center text-xl font-semibold cursor-pointer hover:scale-110 duration-200 ${getColor(
                            table.TableStatus
                        )}`}
                    >
                        {table.TableName}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TablePage;
