import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    BanknotesIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useEffect, useState } from "react";
import Progressbar from "@/Components/Progressbar";

const Home = ({ auth, rollCalls }: PageProps) => {
    const [attendances, setAttendance] = useState<any>([]);
    const [progress, setProgress] = useState(0);

    // fetch data presensi
    useEffect(() => {
        setAttendance(rollCalls);
    }, [rollCalls]);

    // progress
    const onChangeProgress = () => {
        setProgress((prev) => prev + 20);
    };

    return (
        <AuthenticatedLayout user={auth.user} title="Dashboard">
            <Head title="Dashboard" />

            <div className="mx-auto px-2">
                <div className="flex gap-5 flex-col  px-2">
                    {/* TOP CONTENT */}
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex w-[calc(100%-660px)] flex-col gap-5">
                            <div className="flex w-full gap-5 h-[270px]">
                                {/* DENDA */}
                                <div className="bg-black shadow-sm sm:rounded-xl w-1/2 flex flex-col items-center text-white">
                                    <div className="text flex justify-start items-start w-full">
                                        <p className="p-6 text-3xl font-thin">
                                            Total Denda
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <BanknotesIcon className="w-40 -rotate-90 text-xl" />
                                        <p className="font-thin text-5xl">Rp</p>
                                        <span className="flex items-center justify-center">
                                            <h1 className="text-5xl">
                                                {/* <NumberCount
                                                    initialValue={0}
                                                    targetValue={5000}
                                                /> */}
                                                5000
                                            </h1>
                                        </span>
                                    </div>
                                </div>
                                {/* END DENDA */}

                                {/* PERINGATAN */}
                                <div className="bg-black shadow-sm sm:rounded-xl w-1/2 flex flex-col justify-start text-white">
                                    {/* TOP CONTENT */}
                                    <div className="text flex justify-start items-start w-full">
                                        <h1 className="px-6 py-5 text-3xl font-thin">
                                            Peringatan
                                        </h1>
                                    </div>
                                    {/* END TOP CONTENT */}

                                    {/* CONTENT BOTTOM */}
                                    <div className="flex gap-2">
                                        {/* PROGRESSBAR */}
                                        <div className="px-10">
                                            <Progressbar
                                                sqSize={160}
                                                strokeWidth={8}
                                                percentage={20}
                                            />
                                            {/* <button
                                                onClick={onChangeProgress}
                                                className="text-neutral-800 rounded-lg border border-neutral-800 bg-transparent px-2 py-1 min-w-[140px] mt-4 hover:bg-gray-200 hover:border-gray-200 "
                                            >
                                                Update Progress
                                            </button> */}
                                        </div>
                                        {/* END PROGRESSBAR */}

                                        <span className="flex flex-col gap-2">
                                            <p className="font-bold text-xl">
                                                Pelanggaran
                                                <div className="w-full h-[0.1rem] bg-white "></div>
                                            </p>
                                            <ul className="flex font-normal">
                                                <li className="font-thin">
                                                    1. Tidak Solat
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                    {/* END CONTENT BOTTOM */}
                                </div>
                            </div>

                            {/* TABLE PRESENSI */}
                            <div className="w-full  bg-white border px-5 py-2 rounded-xl">
                                <h1 className="pb-2 text-xl font-semibold text-gray-600">
                                    Riwayat Presensi
                                </h1>
                                <div className="bg-white shadow-sm sm:rounded-xl h-[250px] w-full border overflow-y-scroll mb-5">
                                    {/* <pre>
                                        {JSON.stringify(
                                            attendances,
                                            undefined,
                                            2
                                        )}
                                    </pre> */}

                                    <table className="w-full text-sm text-gray-600">
                                        <thead className="text-xs text-gray-600 uppercase border-b-2 bg-[#f2f2f2]">
                                            <tr className="text-nowrap ">
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
                                                <th className="py-3 flex items-center justify-center">
                                                    Status
                                                </th>
                                                <th className="py-3">
                                                    <span className="flex items-center justify-center">
                                                        Date
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {attendances.data?.length === 0 && (
                                                <div className="flex items-center justify-center fixed  left-[32rem] bottom-[22rem]">
                                                    <h1 className="font-semibold text-xl">
                                                        Anda belum memiliki
                                                        riwayat presensi
                                                    </h1>
                                                </div>
                                            )}

                                            {/* DATA PRESENSI */}
                                            {attendances.data?.map(
                                                (
                                                    attendance: any,
                                                    index: any
                                                ) => (
                                                    <tr
                                                        className="text-nowrap even:bg-[#f2f2f2]"
                                                        key={index}
                                                    >
                                                        <td className="py-3">
                                                            <span className="flex items-center mx-2">
                                                                {index + 1}
                                                            </span>
                                                        </td>

                                                        <td className="py-3">
                                                            {
                                                                attendance.user
                                                                    .name
                                                            }
                                                        </td>
                                                        <td className="py-3 flex items-center justify-center">
                                                            <span className=" text-[#ECFFEE] py-1 px-2 rounded-lg bg-[#00B112]">
                                                                {
                                                                    attendance.status
                                                                }
                                                            </span>
                                                        </td>
                                                        <td className="py-3 ">
                                                            <span className="flex items-center justify-center">
                                                                {
                                                                    attendance.created_at
                                                                }
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                    {/* <Pagination Links={projects.meta.links} /> */}
                                </div>
                            </div>
                        </div>

                        {/* CALENDER */}
                        {/* <div className="shadow-xl sm:rounded-xl calenderImage"> */}
                        <div className="w-[40rem] h-[613px] bg-white rounded-xl shadow-xl px-6 py-4 flex flex-col gap-10">
                            {/* ANNOUNCEMENT */}
                            <div className="grow">
                                <h1 className="mb-2 text-xl font-semibold text-gray-600">
                                    Pengumuman
                                </h1>
                                {/* CONTENT */}
                                <div className=" flex items-center justify-center gap-10">
                                    <button>
                                        <ChevronLeftIcon className="w-6" />
                                    </button>
                                    <div className="w-full h-[10rem] border rounded-xl"></div>
                                    <button>
                                        <ChevronRightIcon className="w-6" />
                                    </button>
                                </div>
                                {/* END CONTENT */}
                            </div>
                            {/* END ANNOUNCEMENT */}

                            {/* CALENDAR */}
                            <div className="h-3/4">
                                <h1 className="mb-2 text-xl font-semibold text-gray-600">
                                    Kalender
                                </h1>
                                <div className="px-10 py-6">
                                    {/* <MyCalendar /> */}
                                </div>
                            </div>
                            {/* END CALENDAR */}
                        </div>
                        {/* </div> */}
                    </div>

                    {/* JADWAL */}
                    <div className="w-full bg-white shadow-xl rounded-xl">
                        <div className="px-6 pt-5 text-gray-900">
                            <h1 className="pb-2 text-xl font-semibold text-gray-600">
                                Jadwal Hari ini
                            </h1>
                            <div className="flex gap-5 pb-5 px-2 overflow-x-scroll w-[106rem] ">
                                {/* JADWA: CONTETNT */}
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-40 rounded-xl shadow-md shadow-gray-900 flex flex-col justify-end imageHome">
                                    <div className="w-[20rem] bg-[#f2f2f2] rounded-b-xl p-5 grid gap-3 ">
                                        <h1>Judul</h1>
                                        <div className="flex justify-between">
                                            {/* CLOCK */}
                                            <span className="flex text-black gap-2">
                                                <ClockIcon className="w-5" />
                                                <h1 className="">ini jam</h1>
                                            </span>
                                            {/* PEMATERI */}
                                            <span className="flex gap-2">
                                                <UsersIcon className="w-5" />
                                                <h1>Pemateri</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* END JADWA: CONTETNT */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Home;
