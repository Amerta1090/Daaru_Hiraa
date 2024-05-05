import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";

const Home = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user} title="Dashboard">
            <Head title="Dashboard" />

            <div className="h-[calc(100vh-120px)] mx-auto px-2">
                <div className="flex gap-2 flex-col">
                    {/* TOP CONTENT */}
                    <div className="flex gap-2 flex-wrap flex-grow">
                        <div className="flex grow flex-wrap gap-2">
                            <div className="flex grow gap-2">
                                {/* DENDA */}
                                <div className="bg-white shadow-sm sm:rounded-lg w-1/2 h-[300px] flex flex-col items-center">
                                    <div className="text flex justify-start items-start w-full">
                                        <p className="p-6 text-3xl font-thin text-gray-600">
                                            Total Denda
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <BanknotesIcon className="w-40 -rotate-90 text-" />
                                        <p className="font-thin text-5xl">Rp</p>
                                        <span className="flex items-center justify-center">
                                            <p className="text-5xl">
                                                5.000.0000
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                {/* DENDA */}
                                <div className="bg-gray-500 shadow-xl sm:rounded-lg  w-1/2 h-[300px]">
                                    <div className="p-6 text-gray-900">
                                        You're logged in!
                                    </div>
                                </div>
                            </div>

                            {/* TABLE PRESENSI */}
                            <div className="bg-white shadow-sm sm:rounded-lg h-[400px] w-full overflow-hidden px-2 py-1">
                                <h1 className="py-2 text-xl font-semibold text-gray-600">
                                    Riwayat Presensi:{" "}
                                </h1>
                                <table className="w-full text-sm text-gray-600 border">
                                    <thead className="text-xs text-gray-600 uppercase border-b-2">
                                        <tr className="text-nowrap">
                                            <th className="py-3">
                                                <span className="flex items-center  mx-2">
                                                    No
                                                </span>
                                            </th>

                                            <th className="py-3">
                                                <span className="flex items-center ">
                                                    Name
                                                </span>
                                            </th>
                                            <th className="py-3">
                                                <span className="flex items-center ">
                                                    Status
                                                </span>
                                            </th>
                                            <th className="py-3">
                                                <span className="flex items-center ">
                                                    Date
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {projects.data.map(
                                                (project, index) => (
                                                    <tr
                                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                        key={index}
                                                    >
                                                        <td className="px-3 py-2">
                                                            {project.id}
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            <img
                                                                src={
                                                                    project.img_path
                                                                }
                                                                alt=""
                                                                style={{
                                                                    width: 60,
                                                                }}
                                                            />
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            <Link
                                                                className="hover:text-white hover:underline text-nowrap"
                                                                href={route(
                                                                    "project.show",
                                                                    project.id
                                                                )}
                                                            >
                                                                {project.name}
                                                            </Link>
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            <span
                                                                className={
                                                                    "px-2 py-1 rounded text-white " +
                                                                    PROJECT_STATUS_CLASS_MAP[
                                                                        project
                                                                            .status
                                                                    ]
                                                                }
                                                            >
                                                                {
                                                                    PROJECT_STATUS_TEXT_MAP[
                                                                        project
                                                                            .status
                                                                    ]
                                                                }
                                                            </span>
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            {project.created_at}
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            {project.due_date}
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            {
                                                                project
                                                                    .createdby
                                                                    .name
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )} */}
                                    </tbody>
                                </table>
                                {/* <Pagination Links={projects.meta.links} /> */}
                            </div>
                        </div>

                        {/* CALENDER */}
                        <div className="bg-gray-500 shadow-xl sm:rounded-lg w-[402px]">
                            <div className="p-6 text-gray-900">
                                You're logged in!
                            </div>
                        </div>
                    </div>

                    {/* JADWAL */}
                    <div className="grow bg-pink-300 h-[280px] shadow-xl rounded-md">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Home;
