import React, { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Denda = ({ auth, notifications }: PageProps) => {
    const [paymentMethod, setPaymentMethod] = useState("manual");
    const [nominal, setNominal] = useState("RP. 000");
    const [description, setDescription] = useState("");
    const [list, setList] = useState([
        { no: 1, keterangan: "Example 1", tanggal: "2024-05-16", nominal: "RP. 500", status: "belum bayar" },
        { no: 2, keterangan: "Example 2", tanggal: "2024-05-17", nominal: "RP. 1000", status: "proses" },
        // Add more items as needed
    ]);

    const handleListClick = (item) => {
        setNominal(item.nominal);
        setDescription(item.keterangan);
    };

    const handleSubmit = () => {
        // Handle the form submission logic
        console.log("Form Submitted:", { paymentMethod, nominal, description });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Denda"
            notifications={notifications}
        >
            <Head title="Denda" />
            
            <main className="p-4">
                {/* Form Section */}
                <div className="bg-white shadow rounded-lg p-4 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Metode Pembayaran:</label>
                        <select 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="manual">Manual</option>
                            <option value="qris">QRIS</option>
                            <option value="bank">Bank</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nominal:</label>
                        <input 
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            value={nominal}
                            onChange={(e) => setNominal(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Keterangan:</label>
                        <input 
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button 
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>

                {/* List Section */}
                <div className="bg-white shadow rounded-lg p-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-2 text-left">No</th>
                                    <th className="p-2 text-left">Keterangan</th>
                                    <th className="p-2 text-left">Tanggal</th>
                                    <th className="p-2 text-left">Nominal</th>
                                    <th className="p-2 text-left">Status Denda</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleListClick(item)}>
                                        <td className="p-2">{item.no}</td>
                                        <td className="p-2">{item.keterangan}</td>
                                        <td className="p-2">{item.tanggal}</td>
                                        <td className="p-2">{item.nominal}</td>
                                        <td className="p-2">{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
};

export default Denda;
