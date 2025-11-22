import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import menuData from "../data/menu.json";

const TableMenu = () => {
    const { state: table } = useLocation();
    const [search, setSearch] = useState("");

    const [qty, setQty] = useState({});

    const filteredMenu = menuData.result.filter((item) =>
        item.MenuName.toLowerCase().includes(search.toLowerCase())
    );

    const handleIncrease = (name) => {
        setQty((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
    };

    const handleDecrease = (name) => {
        setQty((prev) => ({
            ...prev,
            [name]: prev[name] > 0 ? prev[name] - 1 : 0,
        }));
    };

    const clearAll = () => {
        setQty({});
        setSearch("");
    };

    return (
        <div className="p-4 w-4/5 m-auto">
            <h1 className="text-2xl font-bold mb-4">Table: {table.TableName}</h1>

            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Search.."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 border p-2 rounded-l text-lg"
                />

                <button
                    onClick={clearAll}
                    className="bg-purple-700 text-white px-5 py-2 rounded-r text-sm font-bold"
                >
                    CLEAR
                </button>
            </div>

            <div className="space-y-4">
                {filteredMenu.map((item, index) => (
                    <div
                        key={index}
                        className="p-3 border shadow rounded-lg flex justify-between items-center bg-gray-50"
                    >
                        <div>
                            <p className="text-lg font-semibold">{item.MenuName}</p>
                            <p className="text-sm text-gray-600">₹ {item.rate}</p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => handleDecrease(item.MenuName)}
                                className="w-10 h-10 bg-gray-300 text-xl font-bold rounded flex items-center justify-center"
                            >
                                -
                            </button>

                            <span className="text-xl w-6 text-center">
                                {qty[item.MenuName] || 0}
                            </span>

                            <button
                                onClick={() => handleIncrease(item.MenuName)}
                                className="w-10 h-10 bg-gray-300 text-xl font-bold rounded flex items-center justify-center"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableMenu;
