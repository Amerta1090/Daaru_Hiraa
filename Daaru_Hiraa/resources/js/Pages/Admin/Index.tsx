import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";

const Admin = ({ auth, notifications, users }: any) => {
    const [serach, setSearch] = React.useState("");
    const [checkedAll, setCheckedAll] = React.useState(false);

    const filteredUsers = users?.data.filter((user: any) =>
        user.name.toLowerCase().includes(serach.toLowerCase())
    );

    return (
        <AdminLayout
            user={auth.user}
            title="Presensi"
            notifications={notifications}
        >
            <Head title="Admin Page" />

            <div className="flex gap-5 flex-col px-2">
                {/* JADWAL */}
                <div className="w-full bg-background shadow-md rounded-xl flex flex-col px-5 py-5">
                    {/* PRESENSI HEADER */}
                    <span className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold text-textPrimary">
                            Presensi Santri
                        </h1>
                        <div className="flex gap-1 relative items-cente w-1/4 me-2">
                            <input
                                className="rounded-lg overflow-hidden w-full"
                                type="text"
                                placeholder="cari santri..."
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="h-full px-3 bg-primary hover:bg-slate-900 absolute right-0 rounded-r-lg text-background">
                                <MagnifyingGlassIcon className="w-5" />
                            </button>
                        </div>
                    </span>
                    {/* END PRESENSI HEADER */}

                    {/*LIST */}
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mx-2">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" className="px-10 py-3">
                                        Hari
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 flex items-center gap-2"
                                        onChange={() =>
                                            setCheckedAll(!checkedAll)
                                        }
                                    >
                                        <input type="checkbox" name="" id="" />
                                        Presensi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers?.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="text-center py-3"
                                        >
                                            Data tidak ditemukan
                                        </td>
                                    </tr>
                                )}
                                {filteredUsers?.map(
                                    (user: any, index: number) => (
                                        <tr
                                            className="odd:bg-white even:bg-gray-100"
                                            key={index}
                                        >
                                            <td className="px-6 py-4">
                                                {index + 1}
                                            </td>

                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                {user.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {
                                                    new Date()
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                            </td>
                                            <td className="px-6 py-4 flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                    checked={checkedAll}
                                                />
                                                Hadir
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end items-center  pt-3">
                        <PrimaryButton
                            className="flex justify-center shadow-md  bg-primary hover:bg-slate-900"
                            // disabled={processing}
                        >
                            Kirim
                        </PrimaryButton>
                    </div>
                </div>
                {/* END LIST */}
            </div>
            {/* END JADWAL */}
        </AdminLayout>
    );
};

export default Admin;
