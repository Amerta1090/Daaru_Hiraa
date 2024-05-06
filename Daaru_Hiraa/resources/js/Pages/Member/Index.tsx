import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";

// type Props = {
//     rollCalls: any;
// };

const Home = ({ auth }: PageProps, rollCalls: any) => {
    // const { rollCalls } = props;

    console.log(rollCalls);
    return (
        <AuthenticatedLayout user={auth.user} title="Dashboard">
            <Head title="Dashboard" />

            <div className="mx-auto px-2">
                <div className="flex gap-5 flex-col pb-5 px-2">
                    {/* TOP CONTENT */}
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex w-[calc(100%-660px)] flex-wrap h-[calc(100vh-22rem)]">
                            <div className="flex grow gap-5 h-[350px]">
                                {/* DENDA */}
                                <div className="bg-black shadow-sm sm:rounded-xl w-1/2 h-[300px] flex flex-col items-center text-white">
                                    <div className="text flex justify-start items-start w-full">
                                        <p className="p-6 text-3xl font-thin">
                                            Total Denda
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <BanknotesIcon className="w-40 -rotate-90 text-xl" />
                                        <p className="font-thin text-5xl">Rp</p>
                                        <span className="flex items-center justify-center">
                                            <p className="text-5xl">
                                                5.000.0000
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                {/* DENDA */}
                                <div className="bg-gray-500 shadow-xl sm:rounded-xl  w-1/2 h-[300px]">
                                    <div className="p-6 text-gray-900">
                                        You're logged in!
                                    </div>
                                </div>
                            </div>

                            {/* TABLE PRESENSI */}
                            <div className="w-full overflow-hidden">
                                <h1 className="pb-2 text-xl font-semibold text-gray-600">
                                    Riwayat Presensi
                                </h1>
                                <div className="bg-white shadow-sm sm:rounded-xl h-[250px] w-full px-2 py-1">
                                    {/* <pre>
                                        {JSON.stringify(
                                            rollCalls,
                                            undefined,
                                            2
                                        )}
                                    </pre> */}

                                    <table className="w-full text-sm text-gray-600 rounded-lg">
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
                                            <tr className="text-nowrap">
                                                <td className="py-3">
                                                    <span className="flex items-center  mx-2">
                                                        1.
                                                    </span>
                                                </td>

                                                <td className="py-3">
                                                    Wahid Hasim S
                                                </td>
                                                <td className="py-3">
                                                    <span className=" text-[#ECFFEE] py-1 px-2 rounded-lg bg-[#00B112]">
                                                        HADIR
                                                    </span>
                                                </td>
                                                <td className="py-3">
                                                    <span className="flex items-center "></span>
                                                </td>
                                            </tr>
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
                        </div>

                        {/* CALENDER */}
                        <div className="bg-gray-500 shadow-xl sm:rounded-xl w-[40rem] h-[40rem]">
                            <div className="p-6 text-gray-900">
                                You're logged in!
                            </div>
                        </div>
                    </div>

                    {/* JADWAL */}
                    <div className="grow bg-pink-300 h-[280px] shadow-xl rounded-xl ">
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
