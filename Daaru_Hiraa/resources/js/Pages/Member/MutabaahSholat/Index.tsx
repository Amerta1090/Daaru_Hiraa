import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const JadwalSholat = ({ auth, notifications }: PageProps) => {
    const [sholat, setSholat] = useState({
        shubuh: false,
        dzuhur: false,
        ashar: false,
        maghrib: false,
        isya: false,
    });
    const [list, setList] = useState([
        { no: 1, tanggal: "2024-05-01", shubuh: "jamaah", dzuhur: "tidak", ashar: "jamaah", maghrib: "jamaah", isya: "tidak" },
        // Add more records as needed
    ]);

    const chartContainer = useRef(null);
    const [chartWidth, setChartWidth] = useState(0);
    const [chartHeight, setChartHeight] = useState(0);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSholat(prevState => ({ ...prevState, [name]: checked }));
    };

    const handleSubmit = () => {
        // Add logic to handle form submission
        console.log("Form Submitted:", sholat);
    };

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Sholat Performance',
                data: [28, 30, 27, 25, 29, 30, 31, 32, 28, 29, 30, 31],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    useEffect(() => {
        if (chartContainer.current) {
            setChartWidth(chartContainer.current.offsetWidth);
            setChartHeight(chartContainer.current.offsetHeight);
        }
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Mutaba'ah Sholat"
            notifications={notifications}
        >
            <Head title="Mutaba'ah Sholat" />

            <main className="p-4 flex flex-col md:flex-row md:justify-between">
                {/* Chart Section */}
                <div ref={chartContainer} className="bg-white shadow rounded-lg p-4 mb-4 md:w-2/3 md:mr-2">
                    <Line data={data} width={chartWidth} height={chartHeight} />
                </div>

                {/* Submit Sholat Section */}
                <div className="bg-white shadow rounded-lg p-4 mb-4 md:w-1/3">
                    <h3 className="text-lg font-medium mb-4">Submit Sholat</h3>
                    {["shubuh", "dzuhur", "ashar", "maghrib", "isya"].map((prayer) => (
                        <div key={prayer} className="mb-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name={prayer}
                                    checked={sholat[prayer]}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox"
                                />
                                <span className="ml-2">{prayer.charAt(0).toUpperCase() + prayer.slice(1)}</span>
                            </label>
                        </div>
                    ))}
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </main>

            {/* List Section */}
            <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-medium mb-4">List Sholat</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 text-left">No</th>
                                <th className="p-2 text-left">Tanggal</th>
                                <th className="p-2 text-left">Shubuh</th>
                                <th className="p-2 text-left">Dzuhur</th>
                                <th className="p-2 text-left">Ashar</th>
                                <th className="p-2 text-left">Maghrib</th>
                                <th className="p-2 text-left">Isya</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="p-2">{item.no}</td>
                                    <td className="p-2">{item.tanggal}</td>
                                    <td className="p-2">{item.shubuh}</td>
                                    <td className="p-2">{item.dzuhur}</td>
                                    <td className="p-2">{item.ashar}</td>
                                    <td className="p-2">{item.maghrib}</td>
                                    <td className="p-2">{item.isya}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default JadwalSholat;
