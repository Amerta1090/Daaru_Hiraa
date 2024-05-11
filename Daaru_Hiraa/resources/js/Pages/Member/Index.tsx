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
import { useState } from "react";
import Progressbar from "@/Components/Progressbar";
import Table from "@/Components/Table";

const Home = ({ auth, rollCalls, notifications, announcements }: PageProps) => {
    const [progress, setProgress] = useState(0);

    // progress
    const onChangeProgress = () => {
        setProgress((prev) => prev + 20);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            title="Dashboard"
            notifications={notifications}
        >
            <Head title="Dashboard" />

            <div className="flex gap-5 flex-col  px-2">
                {/* TOP CONTENT */}
                <div className="flex gap-5 flex-wrap">
                    <div className="flex w-[calc(100%-660px)] flex-col gap-5">
                        <div className="flex w-full gap-5 h-[270px]">
                            {/* DENDA */}
                            <div className="bg-primary shadow-sm sm:rounded-xl w-1/2 flex flex-col items-center text-textPrimary">
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
                            <div className="bg-primary shadow-sm sm:rounded-xl w-1/2 flex flex-col justify-start text-textPrimary">
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
                                            <div className="w-full h-[0.1rem] bg-textPrimary "></div>
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
                            {/* END PERINGATAN */}
                        </div>

                        {/* TABLE PRESENSI */}
                        <div className="w-full  bg-primary border px-5 py-2 rounded-xl">
                            <h1 className="pb-2 text-xl font-semibold text-textPrimary">
                                Riwayat Presensi
                            </h1>

                            {/* TABLE */}
                            <Table
                                titles={["No", "Name", "Status", "Date"]}
                                datas={rollCalls}
                            />
                            {/* END TABLE */}
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-[40rem] h-[613px] bg-primary rounded-xl shadow-xl px-6 py-4 flex flex-col gap-5">
                        {/* ANNOUNCEMENT */}
                        <div className="grow">
                            <h1 className="mb-2 text-xl font-semibold text-textPrimary">
                                Pengumuman
                            </h1>
                            {/* CONTENT */}
                            <div className=" flex items-center justify-center gap-10 text-textPrimary">
                                <button>
                                    <ChevronLeftIcon className="w-6" />
                                </button>
                                <div className="w-full h-[10rem] border rounded-xl overflow-x-auto overflow-y-hidden flex items-center justify-center">
                                    {announcements?.data.map(
                                        (announcement: any, index: number) => (
                                            <img
                                                src={announcement.image}
                                                alt=""
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                                <button>
                                    <ChevronRightIcon className="w-6" />
                                </button>
                            </div>
                            {/* END CONTENT */}
                        </div>
                        {/* END ANNOUNCEMENT */}

                        {/* CALENDAR */}
                        <div className="h-3/4">
                            <h1 className="mb-2 text-xl font-semibold text-textPrimary">
                                Kalender
                            </h1>
                            <div className="px-10 py-6">
                                {/* <MyCalendar /> */}
                            </div>
                        </div>
                        {/* END CALENDAR */}
                    </div>
                    {/* END RIGHT CONTENT */}
                </div>

                {/* JADWAL */}
                <div className="w-full bg-primary shadow-xl rounded-xl">
                    <div className="px-6 pt-5 text-gray-900">
                        <h1 className="pb-2 text-xl font-semibold text-textPrimary">
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
                {/* END JADWAL */}
            </div>
        </AuthenticatedLayout>
    );
};

export default Home;
